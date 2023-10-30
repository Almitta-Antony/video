import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import '../components/Header.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function LandingPage() {
    return (
        <div className='lp container w-75' >
            <Container>
                <Row className='mt-5'>
                    <Col>
                        <div className='mt-5'>
                            <h1><span>V</span>IDEO <span>U</span>PLOADER</h1>
                            <p id="landpara" className='mt-5'>Welcome to <span id="span1">"VIDEO UPLOADER" </span>- Where Your Stories Come to Life!

                                Here we're more than just a video uploader platform; we're the canvas for your creativity, the stage for your talent, and the hub for your stories. We're passionate about helping you share your unique vision with the world through the power of video.</p>
                            <Link to={'/home'}>
                                <Button className='btn  ms-3' id='b1'> Get Started</Button>

                            </Link>                        </div>

                    </Col>

                    <Col lg={6} md={12} sm={12} xs={12}>
                        <img src="https://i.postimg.cc/Jh9ypWFC/gif-unscreen.gif"
                            // height="400px"
                            // width="500px"
                            alt=""
                            className='mt-5 p-2  w-100 ' />
                    </Col>
                </Row>

                <Row className='p-4 mt-5'>
                    <h1 className='mb-5 text-center mt-5'>Features</h1>
                    <Col>
                        <Card className='card  border-light bg-dark text-light mb-2 ' style={{ width: '100%' }}>
                            <Card.Img style={{ height: '200px' }} variant="top" src="https://i.postimg.cc/Gt0kz49C/card2-0.gif" />
                            <Card.Body>
                                <Card.Title className='ctitle'>ADD VIDEOS</Card.Title>
                                <Card.Text className='ctext text-wrap'>
                                    🎥 Add Videos with Ease on "VIDEO UPLOADER"! 
                                    Are you ready to share your stories, showcase your creativity, or promote your brand.

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className='card  border-light bg-dark text-light mb-2  ' style={{ width: '100%' }}>
                            <Card.Img style={{ height: '200px' }} variant="top" src="https://i.postimg.cc/1zKFDyNW/card1-0.gif" />
                            <Card.Body>
                                <Card.Title className='ctitle'>CATEGORISE VIDEOS</Card.Title>
                                <Card.Text className='ctext'>

                                📁Start customizing your video categories today and create a more engaging and structured experience for your audience. Your categories, your content, your impact!


                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className='card border-light bg-dark text-light mb-2 ' style={{ width: '100%' }}>
                            <Card.Img style={{ height: '200px' }} variant="top" src="https://i.postimg.cc/T2SSM05d/card3.gif" />
                            <Card.Body>
                                <Card.Title className='ctitle'>WATCH HISTORY</Card.Title>
                                <Card.Text className='ctext'>
                                🕰️Here we've introduced the "Watch History" feature, allowing you to rediscover the videos you've enjoyed and pick up where you left off.                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LandingPage





