import React from "react";
import MainFooter from "../parts/MainFooter";
import NavHeader from "../parts/NavHeader";

const MainLayout: React.FC = ({ children }) => {
  return (
    <div>
      <header>
        <NavHeader />
      </header>
      <main>{children}</main>
      <footer>
        <MainFooter />
      </footer>
    </div>
  );
};

export default MainLayout;
