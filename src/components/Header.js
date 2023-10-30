import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>

<Navbar className="header">
        <Container>
<Link to={"/"} style={{textDecoration:'none'}}>
            <Navbar.Brand >
              <img  style={{borderRadius:'8px'}}
                src="https://i.postimg.cc/L4vDjqm1/v1.jpg"
                width="40"
                height="40"
                className="d-inline-block align-top"
                alt="" 
                
              />
              <b className=' fs-2 ms-3 text-white '><span>V</span>IDEO    <span>U</span>PLOADER</b>
            
            </Navbar.Brand>
  
</Link>        </Container>
      </Navbar>
    </div>
  )
}

export default Header