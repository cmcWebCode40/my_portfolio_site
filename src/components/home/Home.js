import React from "react";
import Logo from "../logo/Logo";
import SideNav from "../../shared/sidenav/SideNav";

const Home = () => {
  return (
    <div className="home">
      <Logo />
      <SideNav />
      <a href="" className="btn btn-pri">
        DownLoad CV
      </a>
    </div>
  );
};

export default Home;
