import React from "react";
import logo from "../../images/newLogo.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <div className="logo">
        <img src={logo} alt="site logo" />
      </div>
    </Link>
  );
};

export default Logo;
