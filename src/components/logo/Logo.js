import React from "react";
import logo from "../../images/newLogo.svg";

const Logo = () => {
  return (
    <a href="/">
      <div className="logo">
        <img src={logo} alt="site logo" />
      </div>
    </a>
  );
};

export default Logo;
