// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';

import './Navigation_bar.styles.scss'

import React,{useEffect,useState} from 'react'

import Logosign from "../../Assests/logo_black.png"

import Facebook from "../../Assests/Social Media Icons/facebook.png"
import Instagram from "../../Assests/Social Media Icons/instagram.png"
import SnapChat from "../../Assests/Social Media Icons/snapchat.png"
import TikTok from "../../Assests/Social Media Icons/tiktok.png"
import Twitter from "../../Assests/Social Media Icons/twitter.png"

import {Link} from 'react-router-dom'

export default function Navigation_bar() {
  const [navbarBg, setNavbarBg] = useState('transparent');
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 100) {
  //       setNavbarBg('dark');
  //     } else {
  //       setNavbarBg('transparent');
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (

    <div className="navbar">
      <div className='navbar title'> 
        <img src ={Logosign} className='titlepie'/>
      </div>
 

      <div className='line'></div>
      
      <nav className="navbar">

      <ul >
        <li        >
        <Link to="/Home"> Home</Link>
        </li>
        <li>
          <Link to="/About"> About</Link>
        </li>
        <li
          className={`nav-item ${activeTab === 'services' ? 'active' : ''}`}
          onClick={() => handleTabClick('services')}
        >
          Services
        </li>
        <li
          className={`nav-item ${activeTab === 'appointment' ? 'active' : ''}`}
          onClick={() => handleTabClick('appointment')}
        >
          Appointment
        </li>
        <li
          className={`nav-item ${activeTab === 'team' ? 'active' : ''}`}
          onClick={() => handleTabClick('team')}
        >
          Our Team
        </li>
        <li
          className={`nav-item ${activeTab === 'policies' ? 'active' : ''}`}
          onClick={() => handleTabClick('policies')}
        >
          Policies
        </li>
      </ul>
      
      <ul>
        <li> 
          <img src ={Facebook} className='social_icon'/>
        </li>
        <li> 
          <img src ={Instagram} className='social_icon'/>
        </li>
        {/* <li> 
          <img src ={SnapChat} className='social_icon'/>
        </li> */}
        <li> 
          <img src ={TikTok} className='social_icon'/>
        </li>
        <li> 
          <img src ={Twitter} className='social_icon'/>
        </li>
      </ul>

    </nav>
    </div>

  )
}


{/* <Navbar bg={navbarBg}  sticky="top" variant="dark" className='.nav-bar-color'  expand="lg">
<Container>
  <Navbar.Brand href="#home">
    <img src={Logo} width="50%" height="50%" className="logo" />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" className = "justify-content-end">
    <Nav className="me-auto ">
      <Nav.Link style={{ color: "white" }} href="#home">Home</Nav.Link>
      <Nav.Link style={{ color: "white" }} href="#home">About</Nav.Link>
      <Nav.Link style={{ color: "white" }} href="#home">Services</Nav.Link>
      <Nav.Link style={{ color: "white" }} href="#link">Appointment</Nav.Link>
      <Nav.Link style={{ color: "white" }} href="#link">Contact</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">
          Another action
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">
          Separated link
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar> */}