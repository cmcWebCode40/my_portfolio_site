import React, { useState } from "react";
// import Nav from "../navbar/NavItems";

const Hamburger = () => {
  const [opened, setIsOpened] = useState(true);

  return (
    <div className="side-menu">
      <div className="menu">
        <div
          className={opened ? "" : "close"}
          onClick={() => setIsOpened(!opened)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="hamb">
        <div className={opened ? "close" : "hamb"}>
          <div className="wrapper">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/projects">Projects</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
