import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import {  getAllCat, getSingleCat, updateCategory } from '../services/allapis';
import '../components/Header.css';
import { Trash2 } from 'react-feather';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap'




function CatSingle() {

  const params = useParams()
  // const { id } = params
  const [singleInputCat, setSingleInputCat] = useState([])
  const [categories, setCategories] = useState([])


  // console.log(id);

  const displayCat = async () => {
    const { data } = await getSingleCat(params.id)
    // console.log(result);
    setSingleInputCat(data.videos)
    console.log(data.videos);

  }

  //new code for delete

  const  removeSinCategory=async(id)=>{
    const selectedCategory=categories.find(i=>i.id==params.id);
    console.log(selectedCategory);
    // const result= await deleteSingle(id)
    // console.log(result);


    //update category object with video data
    selectedCategory.videos=selectedCategory.videos.filter((v)=>v.id !== id);
    await updateCategory(params.id,selectedCategory)
    // if (result.status >= 200 && result.status < 300) {

      //refresh category list
      displayCat();
      getAllCategories()
    // }

  }


const  getAllCategories=async()=>{
  const result = await getAllCat();
      if (result.status >= 200 && result.status < 300) {
        setCategories(result.data)
      }
}

 //till this 

  
  useEffect(() => {
  
    displayCat()
    getAllCategories();
  }, [])


  // console.log(id);
  // console.log(singleInput);
  //find single category


  // const selectedCategory = singleInputCat.find(i => i.id == id)
  // console.log(selectedCategory);

  return (
<div  >
<h1 className='text-center'>{categories.find((i)=>i.id == params.id)?.name}</h1>

      <div className=' d-flex p-2 container w-100'>
  
<Row>

<Col>
      { 
             singleInputCat.map(i => 
      (          <Card lg={3} 
       className='bg-dark text-light ms-3 mt-4 card text-light bg-dark border border-dark  ' style={{  width: '20rem', height: '330px', alignContent: 'center' }}>
                  <Card.Img 
                  
                   style={{ height: '230px', width: '100%' }}
                  variant="top" src={i.cover_image} />
                  <Card.Body>
                    <Card.Title className='cattitle text-light'>{i.caption}</Card.Title>
                    {/* <p>{params.id}</p> */}
                    <Trash2  onClick={() => { removeSinCategory(i.id) }} size={18} className='fa-1x text-light text-end' ></Trash2>
      
                  </Card.Body>
                </Card>
      ))          
      
      
      }
      
      
  
</Col>  
</Row>  
      </div>
      <div className='text-center mt-5'>
  <Link to={'/home'}>
                      <Button variant=""  className=' mt-2   bg-dark text-light '>
                          <img src="https://i.postimg.cc/kXCcVqD6/backarrow-removebg-preview.png"
                          style={{
                              width:"20px",
                              height:"20px"
                          }} 
                          className='me-3'
                          alt="" />
                  Go back Home
                </Button>
      
  </Link>    
  </div>    

  
</div>  )
}

export default CatSingle
