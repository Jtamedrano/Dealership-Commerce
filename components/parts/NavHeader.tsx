import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const NavHeader = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/">Auto Dealer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="New Inventory" id="new-intentory-dropdown">
              <NavDropdown.Header>SHOP NEW</NavDropdown.Header>
              <NavDropdown.Item>New Vehicles</NavDropdown.Item>
              <NavDropdown.Item>New Vehicle Specials</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Pre-Owned Inventory" id="pre-owned-dropdown">
              <NavDropdown.Header>SHOP PRE-OWNED</NavDropdown.Header>
              <NavDropdown.Item>Pre-Owned Vehicles</NavDropdown.Item>
              <NavDropdown.Item>Certified Pre-Owned Vehicle</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Service & Parts" id="service-dropdown">
              <NavDropdown.Header>SERVICE</NavDropdown.Header>
              <NavDropdown.Item>Schedule Service</NavDropdown.Item>
              <NavDropdown.Item>Service Center</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavHeader;
