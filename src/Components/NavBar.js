import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const TopBar = () => {
    return (
        <div className="TopBar">
                <Navbar  expand="lg" >
                <Navbar.Brand href="#home">Portfolio</Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse className="links" id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#service">Service</Nav.Link>
                    <Nav.Link href="#works">Works</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
        </div>
    )
}

export default TopBar
