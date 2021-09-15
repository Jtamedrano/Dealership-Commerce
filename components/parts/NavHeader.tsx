import router from "next/router";
import Link from "next/link";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";

const NavHeader = () => {
  const dispatch = useDispatch();
  const goToShop = () => {
    dispatch({
      type: "ADD_FILTER",
      payload: { condition: ["new"] },
    });
    router.push("/shop");
  };
  return (
    <Navbar expand="lg" fixed="top">
      <Container fluid="sm">
        <Link href="/">
          <Navbar.Brand className="AutoBrand">Auto Dealer</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Link href="/">
              <Nav.Item>Home</Nav.Item>
            </Link>
            <Nav.Item onClick={goToShop}>Shop Cars</Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavHeader;
