import React from "react";
import img from "../../images/Capture.PNG";
import html from "../../images/html5.svg";
import css from "../../images/css-3.svg";
import sass from "../../images/sass.svg";
import js from "../../images/javascript.svg";
import react from "../../images/react.svg";
import node from "../../images/nodejs.svg";
import boot from "../../images/Bootstrap_logo.svg.png";
import git from "../../images/github-logo.svg";

const About = () => {
  return (
    <div className="about">
      <div className="about-page">
        <h2>
          ABOUT ME{" "}
          <span role="img" aria-label="emoji">
            🤵
          </span>
        </h2>
        <div className="profile">
          <div>
            <img src={img} height="150" width="150" alt="mike" />
          </div>
          <div>
            <h4>Profile</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
              rerum eligendi recusandae minus fugit distinctio assumenda autem
              earum voluptate. Perspiciatis tempora possimus rerum esse ipsa sit
              assumenda quaerat harum nam.
            </p>
          </div>
        </div>
        <div className="skills">
          <div>
            <img src={html} height="35" width="35" alt="" />
          </div>
          <div>
            <img src={css} height="35" width="35" alt="" />
          </div>
          <div>
            <img src={js} height="35" width="35" alt="" />
          </div>
          <div>
            <img src={sass} height="35" width="35" alt="" />
          </div>
          <div>
            <img src={boot} height="35" width="35" alt="" />
          </div>
          <div>
            <img src={git} height="35" width="35" alt="" />
          </div>
          <div>
            <img src={react} height="35" width="35" alt="" />
          </div>
          <div>
            <img src={node} height="35" width="35" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
