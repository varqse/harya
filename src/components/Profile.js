import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { NavbarBrand } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';


const Profile = ({ scrollToSection }) => {

    return (
      <div className="contentProfile container position-relative">
        <h1 className='fw-bold px-3'>Harya Pranatreshna</h1>
        <p className='px-3'>Gresik Plant Manager for Cargill Cocoa and Chocolate</p>

        <div>
        <Button variant="secondary" style={{ backgroundColor: '#3282B8', borderColor: 'black', color: 'black' }} className='text-black ms-3'>
          Message <Badge pillbg="secondary"></Badge>
          <FontAwesomeIcon icon={faPaperPlane} className="ms-2" />
          <span className="visually-hidden">unread messages</span>
        </Button>
        </div>

        {/* <div className="nav">
            <NavbarBrand href='/'></NavbarBrand>
          <Nav defaultActiveKey="" className="flex-column d-none d-md-block">
            <Nav.Link href="#about" style={{ color: 'black' }}>About</Nav.Link>
            <Nav.Link href="#experience" style={{ color: 'black' }}>Experience</Nav.Link>
            <Nav.Link href="#portfolio" style={{ color: 'black' }}>Portfolio</Nav.Link>
          </Nav>
        </div> */}


        <div className="d-flex align-items-end bottom-0 py-5 px-3">
        <a href="https://www.linkedin.com/in/harya-pranatreshna-a69781a/" target="_blank" className="mx-2">
          <FontAwesomeIcon icon={faLinkedin} className='text-black' size="3x" />
        </a>
        <a href="https://www.instagram.com/harya_id/" target="_blank" className="mx-2">
          <FontAwesomeIcon icon={faInstagram} className='text-black' size="3x" />
        </a>
        <a href="https://www.facebook.com/harya.id" target="_blank" className="mx-2">
          <FontAwesomeIcon icon={faFacebook} className='text-black' size="3x" />
        </a>
      </div>
      </div>
      
    );
  }
  
  export default Profile;