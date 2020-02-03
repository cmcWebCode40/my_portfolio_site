import React from "react";
import img from "../../images/IMG_20181221_105731.jpg";
// import html from "../../images/html5.svg";
// import css from "../../images/css-3.svg";
// import sass from "../../images/sass.svg";
// import js from "../../images/javascript.svg";
// import react from "../../images/react.svg";
// import node from "../../images/nodejs.svg";
// import boot from "../../images/Bootstrap_logo.svg.png";
// import git from "../../images/github-logo.svg";

const About = () => {
  return (
    <div className="about">
      <div className="about-page">
        <h2>
          ABOUT ME{" "}
          <span role="img" aria-label="emoji">
            👨‍💻
          </span>
        </h2>
        <div className="profile">
          <div>
            <img src={img} height="150" width="150" alt="mike" />
          </div>
          <div>
            <h4>Profile</h4>
            <p>
              I'm a{" "}
              <strong style={{ color: "#58c376" }}>frontend Developer</strong>{" "}
              and a{" "}
              <strong style={{ color: "#58c376" }}> Project Manager,</strong>{" "}
              <br />
              I build things for the web and users of the web , i also love
              learning new technologies and working with teams. <br />
              At my spare time i do music ...
            </p>
          </div>
        </div>
        <div className="box">
          <div className="skills">
            <div>
              <img
                src="https://res.cloudinary.com/cmcwebcode/image/upload/v1580726578/html5_r7vv62.svg"
                height="35"
                width="35"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/cmcwebcode/image/upload/v1580724874/css-3_lmpgds.svg"
                height="35"
                width="35"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/cmcwebcode/image/upload/v1580725189/javascript_rzszku.svg"
                height="35"
                width="35"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/cmcwebcode/image/upload/v1580724770/sass_ovlsdt.svg"
                height="35"
                width="35"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/cmcwebcode/image/upload/v1580724842/Bootstrap_logo.svg_fe5fob.png"
                height="35"
                width="35"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/cmcwebcode/image/upload/v1580725616/github_alpj4q.png"
                height="35"
                width="35"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/cmcwebcode/image/upload/v1580725420/react_an9ci0.png"
                height="35"
                width="35"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/cmcwebcode/image/upload/v1580724926/nodejs_ujcgmf.svg"
                height="35"
                width="35"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
