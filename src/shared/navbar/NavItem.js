import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const NavItem = ({ link, title, icon }) => {
  return (
    <div className="side-bar">
      <Link to={link} active="true">
        <ul>
          <li className="move move-btn" title={title}>
            <FontAwesomeIcon icon={icon} size="3x" color="#fff" />
          </li>
        </ul>
      </Link>
    </div>
  );
};

export default NavItem;
