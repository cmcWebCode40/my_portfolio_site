import React from "react";
import img from "../../images/IMG_20181221_105731.jpg";
import about from '../../images/about.png'
import react from "../../images/react.svg";
import ts from '../../images/ts.png'

const About = () => {
  return (
    <div className="about">
      <div className="about-page">

        <h2>
          <img src={about} height="200" width="200" alt="about me" />
        </h2>
        <div className="profile">
          <div>
            <img src={img} height="300" width="300" alt="Chinweike Michael Chinonso" />
          </div>
          <div>
            <h4>Profile</h4>
            <p>
              I'm a <strong style={{ color: "#58c376" }}>Frontend Developer</strong> proficient with javaScript programming language I also have proven experience in creating, designing, and deploying web and progressive web(PWA) applications in a test-driven environment.
              <br />
              I basically use <strong style={{ color: "#58c376" }}>React js & Typescript</strong>  for web development. <br />
              I'm Currently Learning/exploring the blockchain development
              <br />
              At my spare time i do music (A Pianist) .
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
                alt=" html skills"
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/cmcwebcode/image/upload/v1580724874/css-3_lmpgds.svg"
                height="35"
                width="35"
                alt="css skills"
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/cmcwebcode/image/upload/v1580725189/javascript_rzszku.svg"
                height="35"
                width="35"
                alt="javascript tech"
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/cmcwebcode/image/upload/v1580724770/sass_ovlsdt.svg"
                height="35"
                width="35"
                alt="sass tech"
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/cmcwebcode/image/upload/v1580724842/Bootstrap_logo.svg_fe5fob.png"
                height="35"
                width="35"
                alt="bootstrap"
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/cmcwebcode/image/upload/v1580725616/github_alpj4q.png"
                height="35"
                width="35"
                alt="github"
              />
            </div>
            <div>
              <img
                src={react}
                // src="https://res.cloudinary.com/cmcwebcode/image/upload/v1580725420/react_an9ci0.png"
                height="35"
                width="35"
                alt="react"
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/cmcwebcode/image/upload/v1618786756/redux_image_zhk5em.png"
                height="35"
                width="35"
                alt="redux"
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/cmcwebcode/image/upload/v1580724926/nodejs_ujcgmf.svg"
                height="35"
                width="35"
                alt="node js"
              />
            </div>
            <div>
              <img
                src={ts}
                height="35"
                width="35"
                alt="typedscript js"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
