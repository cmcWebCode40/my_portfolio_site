import React from "react";
import Home from "../components/home/Home";
import Logo from "../components/logo/Logo";
import SideNav from "../shared/sidenav/SideNav";
import Footer from "../shared/footer/Footer";

const Layouts = () => {
  return (
    <>
      <div className="layout">
        <Logo />
        <SideNav />
        <Home />
        <Footer />
      </div>
    </>
  );
};

export default Layouts;
