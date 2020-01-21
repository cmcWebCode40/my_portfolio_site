import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ name, icon }) => {
  return (
    <div>
      <a href="#!" className="btn btn-pri">
        {name}
        <FontAwesomeIcon
          style={{ marginLeft: ".5rem" }}
          icon={icon}
          size="1x"
          color="#fff"
        />
      </a>
    </div>
  );
};

export default Button;
