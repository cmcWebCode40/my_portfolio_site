import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectList = ({ title, description, source, img, website }) => {
  return (
    <div className="project-content">
      <div className="card">
        <div className="card-image">
          <img className="card-image" src={img} height="70" alt="" />
        </div>
        <div className="card-body">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="card-body-link">
            <div>
              <FontAwesomeIcon
                style={{ marginRight: "0.7rem" }}
                icon={faGithub}
                size="1x"
                color="#f4f4f4"
              />
              <a href={source} target="_blanck">
                View Source
              </a>
            </div>
            <div>
              <span role="img" aria-label="emoji">
                🚀
              </span>
              <a href={website} target="_blanck">
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
