import React from "react";
import Project from "./project";

const ProjectCard = (project: Project) => {
  return (
    <a href={project.link} className="project-card" target="_blank">
      <div className="project-card-title">{project.title}</div>
      <div className="project-image">
        <img src={project.image} alt="gif"/>
      </div>
      <div className="project-description">{project.description}</div>
    </a>
  );
};
export default ProjectCard;
