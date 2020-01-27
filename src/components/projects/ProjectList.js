import React from "react";
import image from "../../images/stylish fitness trainer.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectList = () => {
  return (
    <div className="project">
      <h2>
        My Projects
        <span role="img" aria-label="emoji">
          🔥🔥
        </span>
      </h2>
      <div className="grid">
        <div className="project-content">
          <div className="card">
            <div className="card-image">
              <img className="card-image" src={image} height="100" alt="" />
            </div>
            <div className="card-body">
              <h3>Website</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium velit autem qui neque eaque omnis animi quia quod
                quo laboriosam?
              </p>
              <div className="card-body-link">
                <div>
                  <FontAwesomeIcon
                    style={{ marginRight: "0.7rem" }}
                    icon={faGithub}
                    size="1x"
                    color="#f4f4f4"
                  />
                  <a href="www.cdn.com">View Source</a>
                </div>
                <div>
                  <span role="img" aria-label="emoji">
                    🚀
                  </span>
                  <a href="www.cdn.com">View Project</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project-content">
          <div className="card">
            <div className="card-image">
              <img className="card-image" src={image} height="100" alt="" />
            </div>
            <div className="card-body">
              <h3>Website</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium velit autem qui neque eaque omnis animi quia quod
                quo laboriosam?
              </p>
              <div className="card-body-link">
                <div>
                  <FontAwesomeIcon
                    style={{ marginRight: "0.7rem" }}
                    icon={faGithub}
                    size="1x"
                    color="#f4f4f4"
                  />
                  <a href="www.cdn.com">View Source</a>
                </div>
                <div>
                  <span role="img" aria-label="emoji">
                    🚀
                  </span>
                  <a href="www.cdn.com">View Project</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project-content">
          <div className="card">
            <div className="card-image">
              <img className="card-image" src={image} height="100" alt="" />
            </div>
            <div className="card-body">
              <h3>Website</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium velit autem qui neque eaque omnis animi quia quod
                quo laboriosam?
              </p>
              <div className="card-body-link">
                <div>
                  <FontAwesomeIcon
                    style={{ marginRight: "0.7rem" }}
                    icon={faGithub}
                    size="1x"
                    color="#f4f4f4"
                  />
                  <a href="www.cdn.com">View Source</a>
                </div>
                <div>
                  <span role="img" aria-label="emoji">
                    🚀
                  </span>
                  <a href="www.cdn.com">View Project</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project-content">
          <div className="card">
            <div className="card-image">
              <img className="card-image" src={image} height="100" alt="" />
            </div>
            <div className="card-body">
              <h3>Website</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium velit autem qui neque eaque omnis animi quia quod
                quo laboriosam?
              </p>
              <div className="card-body-link">
                <div>
                  <FontAwesomeIcon
                    style={{ marginRight: "0.7rem" }}
                    icon={faGithub}
                    size="1x"
                    color="#f4f4f4"
                  />
                  <a href="www.cdn.com">View Source</a>
                </div>
                <div>
                  <span role="img" aria-label="emoji">
                    🚀
                  </span>
                  <a href="www.cdn.com">View Project</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
