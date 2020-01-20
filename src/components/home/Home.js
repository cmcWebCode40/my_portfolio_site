import React from "react";
import Logo from "../logo/Logo";
import SideNav from "../../shared/sidenav/SideNav";
import Buttons from "../../shared/buttons/Button";
const Home = () => {
  return (
    <div className="home">
      <Logo />
      <Buttons name={"Download CV"} />
      <SideNav />
    </div>
  );
};

export default Home;
