import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { getAllVideos } from '../services/allapis'
import { Col, Row } from 'react-bootstrap'


function View({updatedState}) {

  const [allVideos, setAllVideos] = useState([])

  //state to update delete
  const [deleteUpdate,setDeleteUpdate] =useState({})

  const accessAllVideos = async () => {
    const result = await getAllVideos()
    // console.log(result);
    if (result.status >= 200 && result.status < 300) {
      // console.log(result.data);
      setAllVideos(result.data)
    }

  }
  console.log(allVideos);

  useEffect(() => {
    accessAllVideos()

  },[updatedState,deleteUpdate])

  return (
    <Row>
      {
        allVideos.length > 0 ? (
          allVideos.map(i => (
<Col lg={4} md={6} className='p-2 ms-5' mb-2 >
              <VideoCard deleteFunc={setDeleteUpdate} video={i}></VideoCard>
  
</Col>          ))

        ) :
          <h1>No videos in your collection</h1>
      }


    </Row>
  )
}

export default View