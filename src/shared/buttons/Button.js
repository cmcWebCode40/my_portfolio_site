import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <a href="#!" className="btn btn-pri">
        {name}
      </a>
    </div>
  );
};

export default Button;
