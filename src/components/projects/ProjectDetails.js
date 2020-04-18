import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectDetails = ({ match }) => {
  const [project, setProject] = useState("")
  const [items] = useState([
    {
      id: 1,
      title: "Editorial Community Service Website",
      description:
        `A Web Application  basically built for updating our host communities about all events happening around them organized by corps member (A service group). I fully developed the UI (Frontend) and also consumed the different api (REST) endpoints developed by the backend engineer
        This app was built with HTML,CSS/SASS & REACTjs`,
      img:
        "https://res.cloudinary.com/cmcwebcode/image/upload/v1587170307/soft3_xaapbw.png",
      source: "https://github.com/cmcWebCode40/Editorial_fullStack",
      website: "http://editorialcdsgroup.live/"
    },
    {
      id: 2,
      title: "Soft Soundz Music Zone",
      description:
        `A Web App built for music  downloads and updates on current celebrity news world wide developer built with HTML5,CSS3/SASS REACTjs,TYPEDSCRIPT & GRAPHQL NB:"the admin dashboard is still in progress"`,
      img:
        "https://res.cloudinary.com/cmcwebcode/image/upload/v1587170296/soft1_jiv0id.png",
      source: "https://github.com/cmcWebCode40/musical_crew_website/",
      website: "https://soft-soundz.netlify.app/"
    },
    {
      id: 3,
      title: "My Portfolio Website",
      description:
        "A Progressive Web App (PWA), just to display all my works and coming up blog posts built with Reactjs ",
      img:
        "https://res.cloudinary.com/cmcwebcode/image/upload/v1587170282/soft4_su7dkv.png",
      source: "https://github.com/cmcWebCode40/my_portfolio_site",
      website: "https://chinweikemichael.tech"
    },
    {
      id: 4,
      title: "Developers Quiz App ",
      description:
        `A Progressive Web App (PWA) Built for that a user take a quick HTML quiz just for fun. This app was an internship task from (investa Ng) , built with HTML5, CSS3, JAVASCRIPT and workbox for the PWA `,
      img:
        "https://res.cloudinary.com/cmcwebcode/image/upload/v1587170269/soft2_k9saon.png",
      source: "https://github.com/cmcWebCode40/simple_todo_list",
      website: "https://cmcwebcode40.github.io/Quiz_app_investa_task/"
    },
  ]);

  const getProject = (id, data) => {
    data.filter(state =>
      state.title === id ? setProject(state) : null
    )
  }
  useEffect(() => {
    getProject(match.params.id, items)
  }, [match.params.id, items]);
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
