import React, { useState } from "react";
import ProjectList from "./ProjectList";

const Project = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Weight Trakker App",
      description:
        "A Progressive Web App (PWA) built with reactjs and firebase for authentication",
      img:
        "https://res.cloudinary.com/cmcwebcode/image/upload/v1580347382/bodyweight_mmloie.png",
      source: "https://github.com/cmcWebCode40/Body_Weight_Tracker_ReactJs",
      website: "https://bodyweighttrackker.netlify.com/"
    },
    {
      id: 2,
      title: "Editorial Info Site",
      description: "A Web App built with react js ",
      img:
        "https://res.cloudinary.com/cmcwebcode/image/upload/v1580347399/editor_hqkbrm.png",
      source: "https://github.com/cmcWebCode40/Editorial_fullStack",
      website: "http://editorialfullstack.herokuapp.com/"
    },
    {
      id: 3,
      title: "My Portfolio Website",
      description: "A Progressive Web App (PWA) built with reactjs ",
      img:
        "https://res.cloudinary.com/cmcwebcode/image/upload/v1580347416/portfolio_blor3p.png",
      source: "https://github.com/cmcWebCode40/my_portfolio_site",
      website: "https://www.chinweikemichaelchinonso"
    }
  ]);
  return (
    <div className="project">
      <h2>
        My Projects
        <span role="img" aria-label="emoji">
          🔥🔥
        </span>
      </h2>
      <div className="grid">
        {items.map(item => (
          <div key={item.id}>
            <ProjectList
              title={item.title}
              description={item.description}
              img={item.img}
              source={item.source}
              website={item.website}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
