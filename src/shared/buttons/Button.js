import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ name, icon, link }) => {
  return (
    <div>
      <a href={link} className="btn btn-pri" target="_blanck">
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
