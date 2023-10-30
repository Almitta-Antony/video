import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import uniqid from 'uniqid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory, deleteCat, getAllCat, getVideo, updateCategory } from '../services/allapis';
import { Trash2 } from 'react-feather';
import '../components/Header.css';
import { Link } from 'react-router-dom';








function Categories() {
  //state to hold input,id and video arrary

  const [catInputs, setCatInputs] = useState({
    id: "",
    name: "",
    videos: []
  })

  const [categories, setCategories] = useState([])
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const setInputs = (e) => {
    const { value, name } = e.target
    setCatInputs({ ...catInputs, [name]: value });
  }
  // console.log(catInputs);

  //add category
  const addData = async () => {
    let id = uniqid()
    setCatInputs({ ...catInputs, ["id"]: id })
    const { name } = catInputs
    if (name == "") {
      toast.error(" Input is required", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });


    }

    else {
      //api call
      const result = await addCategory(catInputs)
      // console.log(result);
      if (result.status >= 200 && result.status < 300) {
        setShow(false)
        getAllCategories()
        // success alert
        toast.success(`${result.data.name} added to category`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });



      }


    }
  }
  // console.log(catInputs);

  //to get all category
  const getAllCategories = async () => {
    const result = await getAllCat()
    if (result.status >= 200 && result.status < 300) {
      setCategories(result.data);
    }
  };
  // console.log(categories);

//delete  a category
  const removeCategory = async (id) => {
    const result = await deleteCat(id)
    if (result.status >= 200 && result.status < 300) {
      //refresh category list
      getAllCategories()

    }

  };

  useEffect(() => {
    getAllCategories()
  }, [])

  const dragOver = (e) => {
    e.preventDefault()
    console.log("drag over :");
  }

  const dropped = async(e, id) => {
    console.log("drooped" + id);

    //video id access
    const videoId = e.dataTransfer.getData("cardId")
    console.log(videoId);

  //access video from backend
    const { data } = await getVideo(videoId)
    console.log(data);


    //dropped category from all category
    const selectedCategory = categories.find((i )=> i.id == id)
    console.log(selectedCategory);

    //update category object with video data
    selectedCategory.videos.push(data)
    console.log(selectedCategory);

    //api call to update the changed category in ba
    await updateCategory(id, selectedCategory)
    getAllCategories()
  };

  return (
    <div>

      <Button variant="" onClick={handleShow} className='w-75 mt-2 ms-5  bg-dark text-light'>
        Add Categories
      </Button>

      {
        categories.length > 0 ? (
          categories.map(i => (
              <div droppable
                onDragOver={(e) => dragOver(e)} 
                onDrop={(e) => dropped(e, i?.id)}
                className='catbox ms-5 mt-3 p-3 d-flex   w-75 container '>
  <Link to={`/catSingle/${i.id}`} style={{textDecoration:'none'}}>

                <p className='catadd text-dark mt-1 thumb-cursor' > {i.name}</p>
                </Link>

  
  
                <div>
                  <Trash2 onClick={() => { removeCategory(i.id) }} size={18} className='fa-1x text-dark ms-5' ></Trash2>
  
                </div >
                {
                  i.videos.map(j=>(
  
  
                      <img lg={3}
                      src={j.cover_image}
                     
                      style={{ width: '70px', height: '50px' }}
  
                     className='catimg  ms-2 mt-2 '
                      alt="" />
                  
                  )
                  
                  )
                }
              </div>
  

          ))

        ) : <h1>no categories added yet</h1>
      }

      <Modal className='text-dark  border-2' show={show} onHide={handleClose}>
        <Modal.Body classname='bg-black border'>

          <Modal.Title >Add New Category</Modal.Title>

          <FloatingLabel
            controlId="floatingInput"
            label="Category Name"
            className="mb-3 text-dark" >
            <Form.Control name='name' onChange={(e) => setInputs(e)} type="text" />
          </FloatingLabel>

        </Modal.Body>

        <Modal.Footer classname='bg-black border'>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
          <Button variant="dark" onClick={addData}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer />

    </div>
  )
}

export default Categories