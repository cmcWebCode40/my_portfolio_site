import React from "react";
import NavItem from "./NavItem";

const NavItems = () => {
  return (
    <div>
      <NavItem link={"#"} title={"Home"} icon={"home"} />
      <NavItem link={"#"} title={"About"} icon={"user"} />
      <NavItem link={"#"} title={"Projects"} icon="code" />
      <NavItem link={"#"} title={"Contact"} icon={"phone"} />
      <NavItem link={"#"} title={"Blog"} icon={"blog"} />
    </div>
  );
};

export default NavItems;
