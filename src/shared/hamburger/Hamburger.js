import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Context } from "../contextApi/Context";

const Hamburger = () => {
  const [opened, setIsOpened] = useContext(Context);
  const close = () => {
    setIsOpened(!opened);
  };
  return (
    <div className="side-menu">
      <div className="menu">
        <div className={opened ? "" : "close"} onClick={close}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="hamb">
        <div className={opened ? "close" : "hamb"}>
          <div className="wrapper">
            <ul>
              <Link to="/">
                <li>
                  {" "}
                  <FontAwesomeIcon
                    icon="home"
                    size="1x"
                    style={{ marginRight: "1rem" }}
                    color="#fff"
                  />
                  Home
                </li>
              </Link>
              <Link to="/about">
                <li>
                  <FontAwesomeIcon
                    icon="user"
                    size="1x"
                    style={{ marginRight: "1rem" }}
                    color="#fff"
                  />{" "}
                  About
                </li>
              </Link>
              <Link to="/projects">
                <li>
                  <FontAwesomeIcon
                    icon="code"
                    size="1x"
                    style={{ marginRight: "1rem" }}
                    color="#fff"
                  />{" "}
                  Projects
                </li>
              </Link>
              <Link to="/contact">
                <li>
                  <FontAwesomeIcon
                    icon="phone"
                    size="1x"
                    style={{ marginRight: "1rem" }}
                    color="#fff"
                  />{" "}
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
