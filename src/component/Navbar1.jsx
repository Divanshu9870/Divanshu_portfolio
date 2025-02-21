import React from 'react'

import { Navbar, Nav, Container } from "react-bootstrap";

function Navbar1() {
  return (
    <>
    <Navbar expand="md"  className="shadow-sm justify-content-center" data-aos="fade-down" data-aos-duration="1500">
      <Container className='nav_items'>
        {/* Brand / Logo */}
        <Navbar.Brand href="#" className="fw-bold text-light">PORTFOLIO</Navbar.Brand>

        {/* Mobile Toggle Button */}
        <Navbar.Toggle aria-controls="navbar-nav" className="border-0">
          <span className="navbar-toggler-icon" style={{ filter: "invert(1)" }}></span>
        </Navbar.Toggle>

        {/* Collapsible Navbar Items */}
        <Navbar.Collapse id="navbar-nav className='text-light'">
          <Nav className="ms-auto text-center">
            <Nav.Link href="#home" className="text-light nav_hover">Home</Nav.Link>
            <Nav.Link href="#experience" className="text-light nav_hover">Experience</Nav.Link>
            <Nav.Link href="#skills" className="text-light nav_hover">Skills</Nav.Link>
            <Nav.Link href="#projects" className="text-light nav_hover">Projects</Nav.Link>
            <Nav.Link href="#contact" className="text-light nav_hover">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     
    </>
  )
}

export default Navbar1