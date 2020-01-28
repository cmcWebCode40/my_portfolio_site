import React from "react";
import NavItem from "./NavItem";

const NavItems = () => {
  return (
    <div>
      <NavItem link={"/"} title={"Home"} icon={"home"} />
      <NavItem link={"/about"} title={"About"} icon={"user"} />
      <NavItem link={"/projects"} title={"Projects"} icon="code" />
      <NavItem link={"/contact"} title={"Contact"} icon={"phone"} />
    </div>
  );
};

export default NavItems;
