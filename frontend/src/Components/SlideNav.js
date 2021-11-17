import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navegacion() {
  return (
    <>
      <Navbar bg="light"  expand="lg">
        <Container fluid>
          
       
          <Navbar.Brand href="#" >myTinerary</Navbar.Brand>
          <img  src="." alt="logo" />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0 "
              style={{ maxHeight: "100px" }}
              navbarScroll
              
            >
                
              <Nav.Link href="#action1" >Home</Nav.Link>
              <Nav.Link href="#action2">Cities</Nav.Link>
              <NavDropdown title="User" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Sing in</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Sing out
                </NavDropdown.Item>
               
            
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Loggin
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
