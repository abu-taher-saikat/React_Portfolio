import React,{useState, useEffect} from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const TopBar = () => {
    const [opacity, setOpacity] = useState(0);

    const scrollFunction  = (e) => {
        console.log(e.target.value)
    }

    useEffect(() => {
        window.onscroll = () => {
        let currentScrollPos1 = window.pageYOffset;
        if(currentScrollPos1 > 600){
            setOpacity(1);
        }else{
            setOpacity(0)
        }
        }
        // console.log(offset)
      }, [setOpacity]);



    return (
        <div style={{opacity : `${opacity}`}} className="TopBar" onScroll={scrollFunction}>
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
