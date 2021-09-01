import React from "react";
import { Container } from "react-bootstrap";
import MainFooter from "../parts/MainFooter";
import NavHeader from "../parts/NavHeader";

const MainLayout: React.FC = ({ children }) => {
  return (
    <Container>
      <header>
        <NavHeader />
      </header>
      <main>{children}</main>
      <footer>
        <MainFooter />
      </footer>
    </Container>
  );
};

export default MainLayout;
