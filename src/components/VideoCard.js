import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Trash2 } from 'react-feather';
import { addHistory, deleteVideo } from '../services/allapis';
import uniqid from 'uniqid';
import { format } from 'date-fns';




function VideoCard({ video, deleteFunc }) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow =async () => {

    setShow(true);
    //body
    //id
    let id = uniqid()
    //title
    var video_title = video.caption
    //url
    var url = video.video_url
    //date
    var date=format(new Date(),'dd-MM-yyyy h:mm:ss a')
    // console.log(date);

    const body={id,video_title,url,date}
    if(body){
    //api call
    const result= await addHistory(body)
    // console.log(result);
    }


  }

  const handleDelete = async (id) => {
    const result = await deleteVideo(id)
    // console.log(result);
    if (result.status >= 200 && result.status < 300) {
      deleteFunc(result.data)
    }

  }

const dragStart=(e,id)=>{
console.log("drag started id :"+id);

//store dragged data in a method call dataTansfer
e.dataTransfer.setData("cardId",id)
}

  return (
    <div >


      <Card draggable onDragStart={(e)=>dragStart(e,video.id)} className=' card text-light bg-dark border border-dark  '
        style={{ width: '19rem', height: '330px', alignContent: 'center' }}>
        <Card.Img onClick={handleShow}
          style={{ height: '200px', width: '100%' }}
          variant="top" src={video.cover_image} />
        <Card.Body>
          <Card.Title className='title  ' style={{ fontSize: '' }}>
            <h5 >{video.caption}
              <Trash2 size={54} onClick={() => handleDelete(video.id)} className='fa-1x btn text-end' ></Trash2>
              {/* <i class="fa-solid fa-light fa-trash ms-5 fa-1x " style={{color:'#830101'}}></i> */}
            </h5>
          </Card.Title>
        </Card.Body>
      </Card>



      {/* modal */}

      <Modal show={show} onHide={handleClose}  >
        <Modal.Body className='bg-dark text-light '>
          <iframe width="100%" height="300"
            src={video.video_url}
            title="Taylor Swift – august (Official Lyric Video)"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer className='bg-light '>
          <Button variant="secondary" className='bg-dark text-light' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default VideoCard