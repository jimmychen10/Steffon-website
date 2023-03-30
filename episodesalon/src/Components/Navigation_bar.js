import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import './Navigation_bar.styles.scss'

import React,{useEffect,useState} from 'react'

import Logo from "../Assests/logo.png"

export default function Navigation_bar() {
  const [navbarBg, setNavbarBg] = useState('transparent');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setNavbarBg('dark');
      } else {
        setNavbarBg('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
      <Navbar bg={navbarBg}  sticky="top" variant="dark" className='.nav-bar-color'  expand="lg">
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
    </Navbar>

  )
}
