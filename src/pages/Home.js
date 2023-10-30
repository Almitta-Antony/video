import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Add from '../components/Add'
import View from '../components/View'
import Categories from '../components/Categories'
import '../components/Header.css';
import { Link } from 'react-router-dom'






function Home() {

    const [addUpdate, setAddUpdate] = useState({})

    return (
        <div className='home text-light '>
            <Row className='mt-3'>
                <Col lg={9} className=' container w-50 mt-5  '>

                    <h1 className='home11 '>UPLOAD VIDEOS FOR FREE</h1>
                    <p className='homepara mt-2   text-light fw-lighter text-wrap justify-content'>
                        Our innovative video player redefines the way you experience and manage video content. With our platform, you can effortlessly upload, store, and stream videos, whether it's for personal use, business, or entertainment. Monitize your content, keep it secure, and integrate with other services effortlessly. Our user-centric design, responsive across all devices, ensures an exceptional viewing experience.
                    </p>

                    <h5 className=' ms-3 '>

                        JOIN US ON OUR JOURNEY </h5>

                </Col>



                {/* <Col lg={4} className='text-center '> </Col> */}



                <Col lg={3}>
                    <Link to={'/history'} style={{textDecoration:'none'}}>

                        <p className=' watch text-end  text-dark fs-5 me-5' >
                            <i class="fa-sharp fa-solid fa-clock-rotate-left fa-1x me-2 mt-3"></i><a style={{textDecoration:'none'}} className='text-black '>Watch History</a>

                            <img src="https://i.postimg.cc/N0rHPRVz/home.gif"
                                width="80px"
                                height="80px"
                                alt=""
                                style={
                                    {
                                        borderRadius: '155px'
                                    }
                                }
                                className=' mt-2 p-2 ' />

                        </p>
                    </Link>

                </Col>
            </Row>
            <br /><br />







            <Row className=''>
                <Col className='' lg={1}>
                    <Add update={setAddUpdate}></Add>
                </Col>
                <Col lg={7}>
                    <View updatedState={addUpdate}></View>
                </Col>
                <Col lg={4}>
                    <Categories></Categories>
                </Col>
            </Row>

        </div>
    )
}

export default Home