import React from "react";
import img from "../../images/Capture.PNG";
import pic from "../../images/stylish fitness trainer.svg";

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
          <img src={pic} height="200" width="200" alt="skills" />
        </div>
      </div>
    </div>
  );
};

export default About;
