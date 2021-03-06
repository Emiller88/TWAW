import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../img/twawlogo.png";

class NavbarTWAW extends Component {
  render() {
    return (
      <div className="Navbar">
        <Navbar bg="light" variant="primary" expand="lg" fixed="top">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="230"
              height="80"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Food Protocols</Nav.Link>
              <NavDropdown title="About Us" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Set up an appointment
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Seminars</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Our Team</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="https://texasweightandwellness.com/">
                  Extra Information
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Button
              onClick="location.href='http://www.texasweightandwellness/contactus.com'"
              type="button"
              variant="outline-danger"
            >
              Contact Us Here!
            </Button>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavbarTWAW;
