import React from "react";

const NavItem = ({ link, title }) => {
  return (
    <div>
      <ul>
        <li>
          <a href={link}>{title}</a>
        </li>
      </ul>
    </div>
  );
};

export default NavItem;
