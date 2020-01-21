import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavItem = ({ link, title, icon }) => {
  return (
    <div className="side-bar">
      <ul>
        <li className="move move-btn">
          <FontAwesomeIcon icon={icon} size="3x" color="#fff" />
          <a href={link}>{title}</a>
        </li>
      </ul>
    </div>
  );
};

export default NavItem;
