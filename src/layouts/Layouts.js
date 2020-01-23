import React from "react";
import Home from "../components/home/Home";
import Logo from "../components/logo/Logo";
import SideNav from "../shared/sidenav/SideNav";
import Hamburger from "../shared/hamburger/Hamburger";
import Footer from "../shared/footer/Footer";

const Layouts = () => {
  return (
    <div className="layout">
      <Logo />
      <Hamburger className="close" />
      <SideNav />
      <Home />
      <Footer />
    </div>
  );
};

export default Layouts;
