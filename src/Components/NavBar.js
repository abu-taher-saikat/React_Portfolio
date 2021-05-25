import React,{useState, useEffect} from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const TopBar = () => {
    const [offset, setOffset] = useState(0);

    const scrollFunction  = () => {

    }

    useEffect(() => {
        window.onscroll = () => {
          setOffset(window.pageYOffset)
        }
        console.log(offset)
      }, [offset]);



    return (
        <div style={offset > 800 ? {display : "block"} : {display : "none"}} className="TopBar" onScroll={scrollFunction}>
            <div className="container">
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
        </div>
    )
}

export default TopBar
