import React from "react";
import Home from "../components/home/Home";
import Logo from "../components/logo/Logo";
import SideNav from "../shared/sidenav/SideNav";

const Layouts = () => {
  return (
    <div className="layout">
      <Logo />
      <SideNav />
      <Home />
    </div>
  );
};

export default Layouts;
