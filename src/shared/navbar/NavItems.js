import React from "react";
import NavItem from "./NavItem";
// <NavItem link={"#"} title={"Blog"} icon={"blog"} />

const NavItems = () => {
  return (
    <div>
      <NavItem link={"contact"} title={"Home"} icon={"home"} />
      <NavItem link={"#"} title={"About"} icon={"user"} />
      <NavItem link={"#"} title={"Projects"} icon="code" />
      <NavItem link={"#"} title={"Contact"} icon={"phone"} />
    </div>
  );
};

export default NavItems;
