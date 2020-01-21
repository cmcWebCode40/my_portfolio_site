import React from "react";
import Buttons from "../../shared/buttons/Button";
const Home = () => {
  return (
    <div className="home">
      <div className="content">
        <em>
          Hello <span className="line"> ------------</span>
        </em>
        <p>
          My Name is Michael , <br /> I'm a <span>DEVELOPER </span>&& <br /> A{" "}
          <span> PROJECT MANAGER</span>
          from <span>Nigeria...</span>
        </p>
        <Buttons name={"Download CV"} />
      </div>
    </div>
  );
};

export default Home;
