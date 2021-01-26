import React from 'react'
import { Button, Navbar, Nav, Form, FormControl, Row, Col } from 'react-bootstrap'
import { FaCartPlus } from 'react-icons/fa'
import image from "../assets/images/ttt.png"
import { useHistory } from "react-router-dom";

export default function Home() {

    const history = useHistory();
    const routeChange = () =>{ 
        let path = `Cart`; 
        history.push(path);
      }
    return (
        <div>
        <Navbar fixed="top" bg="light" expand="lg" className="bg-light justify-content-center">
            <Navbar.Brand href="/">
                <img
                    alt=""
                    src={image}
                    width="100"
                    height="50"
                    className="d-inline-block align-top"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            
                <Col>
                    <Form inline>
                    <FormControl type="text" placeholder="🔍 Search" className="mr-sm-2" />
                    {/* <Button variant="outline-success">Search</Button> */}
                    </Form>
                </Col>
                <Col>
                    <Nav className="mr-auto">
                    <Nav.Link>                                                                     </Nav.Link>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link>|</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link>|</Nav.Link>
                    <Nav.Link href="/shop">Shop</Nav.Link>
                    <Nav.Link>|</Nav.Link>
                    <Nav.Link href="/help">Help</Nav.Link>
                    <Nav.Link>|</Nav.Link>
                    <Button variant="secondary" onClick={routeChange}><FaCartPlus /> Your Cart</Button>
                    </Nav>
                </Col>
                
            </Navbar.Collapse>
        </Navbar>
        </div>
    )
}
