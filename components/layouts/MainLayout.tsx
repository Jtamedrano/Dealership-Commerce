import React from "react";
import { Container } from "react-bootstrap";
import MainFooter from "../parts/MainFooter";
import NavHeader from "../parts/NavHeader";

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <header>
        <NavHeader />
      </header>
      <Container>
        <main>{children}</main>
      </Container>
      <footer>
        <MainFooter />
      </footer>
    </>
  );
};

export default MainLayout;
