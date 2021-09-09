import router from "next/router";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";

const NavHeader = () => {
  const dispatch = useDispatch();
  return (
    <Navbar expand="lg" fixed="top">
      <Container fluid="sm">
        <Navbar.Brand href="/" className="AutoBrand">
          Auto Dealer
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="New Inventory" id="new-intentory-dropdown">
              <NavDropdown.Header>SHOP NEW</NavDropdown.Header>
              <NavDropdown.Item
                onClick={() => {
                  dispatch({
                    type: "ADD_FILTER",
                    payload: { condition: "new" },
                  });
                  router.push("/shop");
                }}
              >
                New Vehicles
              </NavDropdown.Item>
              <NavDropdown.Item>New Vehicle Specials</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Pre-Owned Inventory" id="pre-owned-dropdown">
              <NavDropdown.Header>SHOP PRE-OWNED</NavDropdown.Header>
              <NavDropdown.Item
                onClick={() => {
                  dispatch({
                    type: "ADD_FILTER",
                    payload: { condition: "used" },
                  });
                  router.push("/shop");
                }}
              >
                Pre-Owned Vehicles
              </NavDropdown.Item>
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
