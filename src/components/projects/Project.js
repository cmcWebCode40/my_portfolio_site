import React, { useState } from "react";
import ProjectList from "./ProjectList";

const Project = () => {
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
        "A Web App for providing corpers informations in saki-west LGA Nigeria, built with html5,css3,sass react js ",
      img:
        "https://res.cloudinary.com/cmcwebcode/image/upload/v1580347399/editor_hqkbrm.png",
      source: "https://github.com/cmcWebCode40/Editorial_fullStack",
      website: "http://editorialfullstack.herokuapp.com/"
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
      website: "https://todolistwebapp.netlify.com"
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
