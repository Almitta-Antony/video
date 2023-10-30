import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import '../components/Header.css';




function Footer() {
    return (
        <div className='footer p-5 mt-5'>
            <hr className='text-dark'/>
            <Row>
                <Col lg={3} md={6} sm={12} xs={12} >
                    <img style={{ borderRadius: '20px' }}
                        src="https://i.postimg.cc/zfpw0z9P/footer-vp.png"
                        width="40"
                        height="40"
                        className="d-inline-block align-top "
                        alt=""

                    />
                    <b className='f1 fs-4 ms-3 text-white '>VIDEO PLAYER</b>
                    <p className='mt-2 p-2 font-monospace text-wrap'>Designed and built with all <br /> the love in the world by the bootstrap team. </p>

                </Col>
                <Col lg={3} md={6} sm={12} xs={12}>
                    <h5 style={{color:'#7d98bd'}} className='font-monospace mb-3'>PAGES</h5>
                    <a className='font-monospace ' style={{ textDecoration: 'none', color: '#7d98bd' }} href="">🎬</a><br />
                    <a className='font-monospace' style={{ textDecoration: 'none', color: '#7d98bd' }} href="">Home</a><br />
                    <a className='font-monospace' style={{ textDecoration: 'none', color: '#7d98bd' }} href="">Watch History</a><br />


                </Col>
                <Col lg={3} md={6} sm={12} xs={12}  >
                    <p  style={{color:'#ffffff'}}  className='mb-3'>LIBRARIES</p>
                    <b style={{color:'#ffffff'}}><i class="fa-brands fa-react" style={{color:'#ffffff'}}></i>React</b><br />
                    <b style={{color:'#ffffff'}}><i class="fa-brands fa-react" style={{color:'#ffffff'}}></i>React Bootstrap</b><br />
                    <b style={{color:'#ffffff'}}><i class="fa-solid fa-route" style={{color:'#ffffff'}}></i>Routing</b><br />
                    <b style={{color:'#ffffff'}}><i class="fa-solid fa-fingerprint" style={{color:'#ffffff'}}></i>React Bootstrap</b><br />

                </Col>
                <Col lg={3} md={6} sm={12} xs={12}>
                <h4 className='mb-2'>Contact Us</h4>
                <input type="text" className='form-control w-75' placeholder='enter email ' />
                <button className='btn btn-light w-75 mt-3'>Send</button><br />
                <i style={{cursor:'pointer'}} class="fa-brands fa-instagram mt-3 ms-5 text-light" ></i>
                <i style={{cursor:'pointer'}} class="fa-brands fa-twitter mt-3 ms-3 text-light" ></i>
                <i style={{cursor:'pointer'}} class="fa-solid fa-envelope mt-3 ms-3 text-light" ></i>
                <i style={{cursor:'pointer'}} class="fa-brands fa-github mt-3 ms-3 text-light"  ></i>
                <i style={{cursor:'pointer'}} class="fa-brands fa-linkedin mt-3 ms-3 text-light"></i>
            </Col>


        </Row>
        </div >
    )
}

export default Footer