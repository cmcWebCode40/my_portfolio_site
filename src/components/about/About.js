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
              I'm a{" "}
              <strong style={{ color: "#58c376" }}>frontend Developer</strong>{" "}
              and also a guy who is so much passionate about 
              <strong style={{ color: "#58c376" }}> Project Management,</strong>{" "}
              <br />
              I build web Apps (Client-side) and very much interested in delivering good user experience(UX) for clients, i also love
              learning new technologies and working with teams.
             <em> "one of my personal goal is to put smile on people's face using
              softwares". </em>
              <br />
              At my spare time i do music (A Pianoist) .
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
