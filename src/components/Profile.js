import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Profile = ({ onNavigate = () => {} }) => {
  return (
    <div className="contentProfile container position-relative">
      <div>
        <h1 className="fw-bold px-3">Harya Pranatreshna</h1>
        <p className="px-3">Gresik Plant Manager for Cargill Cocoa and Chocolate</p>


      </div>


      <div className="nav pt-3">
        <Nav className="flex-column d-none d-md-block">
          <Nav.Link onClick={() => onNavigate('about')} style={{ color: 'black' }}>
            About
          </Nav.Link>
          <Nav.Link onClick={() => onNavigate('experience')} style={{ color: 'black' }}>
            Experience
          </Nav.Link>
          <Nav.Link onClick={() => onNavigate('article')} style={{ color: 'black' }}>
            Article
          </Nav.Link>
        </Nav>
      </div>

      <div className="d-flex align-items-end bottom-0">
        <a
          href="https://www.linkedin.com/in/harya-pranatreshna-a69781a/"
          target="_blank"
          rel="noreferrer"
          className="mx-2"
        >
          <FontAwesomeIcon icon={faLinkedin} className="text-black" size="2x" />
        </a>
        <a
          href="https://www.instagram.com/harya_id/"
          target="_blank"
          rel="noreferrer"
          className="mx-2"
        >
          <FontAwesomeIcon icon={faInstagram} className="text-black" size="2x" />
        </a>
        <a
          href="https://www.facebook.com/harya.id"
          target="_blank"
          rel="noreferrer"
          className="mx-2"
        >
          <FontAwesomeIcon icon={faFacebook} className="text-black" size="2x" />
        </a>
      </div>
    </div>
  );
};

export default Profile;
