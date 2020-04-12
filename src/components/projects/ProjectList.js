import React from "react";
import {Link} from 'react-router-dom'
import Button from '../../shared/buttons/Button';

const ProjectList = ({ title,  img }) => {
  return (
    <Link to={`/project-details/${title}`}>
    <div className="project-content">
      <div className="card">
        <div className="card-image">
          <img className="card-image" src={img}  alt="project appearance" />
        </div>
        <div className="card-btn">
         <Button name="See Project Details"/>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default ProjectList;
