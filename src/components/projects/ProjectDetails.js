import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectDetails = ({ match }) => {
  const [project, setProject] = useState("")
  const [items] = useState([
    {
      id: 1,
      title: "Weight Trakker App",
      description:
        "A Progressive Web App for tracking your weight daily (PWA) built with reactjs and firebase for authentication",
      img:
        "https://res.cloudinary.com/cmcwebcode/image/upload/v1580347382/bodyweight_mmloie.png",
      source: "https://github.com/cmcWebCode40/Body_Weight_Tracker_ReactJs",
      website: "https://bodyweighttrackker.netlify.com/"
    },
    {
      id: 2,
      title: "Editorial Info Site",
      description:
        "A Web App for providing corpers informations in saki-west LGA Nigeria, I was responsible for developing the FRONTEND/UI of the project and also consuming the rest APi's built by the backend developer built with html5,css3,sass react js ",
      img:
        "https://res.cloudinary.com/cmcwebcode/image/upload/v1582291967/editorial_qdl9yd.png",
      source: "https://github.com/cmcWebCode40/Editorial_fullStack",
      website: "http://editorialcdsgroup.live/"
    },
    {
      id: 3,
      title: "My Portfolio Website",
      description:
        "A Progressive Web App (PWA), just to display all my works and coming up blog posts built with reactjs ",
      img:
        "https://res.cloudinary.com/cmcwebcode/image/upload/v1580347416/portfolio_blor3p.png",
      source: "https://github.com/cmcWebCode40/my_portfolio_site",
      website: "https://chinweikemichael.tech"
    },
    {
      id: 4,
      title: "PWA TodoList ",
      description:
        "A Progressive Web App (PWA) TodoList that helps you record your daily Task. this app is built with html5, css3, js and workbox for the PWA ",
      img:
        "https://res.cloudinary.com/cmcwebcode/image/upload/v1580724567/todo_dszi9f.png",
      source: "https://github.com/cmcWebCode40/simple_todo_list",
      website: `https://todolistwebapp.netlify.com`
    },
    {
      id: 5,
      title: "Pixel Art Maker PWA",
      description:
        "A Progressive Web App (PWA) used for making pixel arts jus for fun. built with html5, css3,js ",
      img:
        "https://res.cloudinary.com/cmcwebcode/image/upload/v1580724540/pixel_sp2w77.png",
      source: "https://github.com/cmcWebCode40/pixel_art_maker",
      website: "https://pixelartdrawings.netlify.com/"
    }
  ]);

  const getProject = (id, data) => {
    data.filter(state =>
      state.title === id ? setProject(state) : null
    )
  }
  useEffect(() => {
    getProject(match.params.id, items)
  }, [items])
  return (
    <div className="project-wrap">
      <div className="project-details">
        <h3>{project.title}</h3>
        <img src={project.img} alt="project shot" />
        <div className="project-details-body">

          <p className="para"> <span role="img" aria-label="emoji">
            👉
              </span>{project.description}</p>
          <div className="project-details-body-link">
            <div>
              <FontAwesomeIcon
                style={{ marginRight: "0.7rem" }}
                icon={faGithub}
                size="1x"
                color="#f4f4f4"
              />
              <a href={project.source} target="_blanck">
                View Source
              </a>
            </div>
            <div>
              <span role="img" aria-label="emoji">
                🚀
              </span>
              <a href={project.website} target="_blanck">
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
