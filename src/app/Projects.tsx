import React from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard";
import { projects } from "./project";
const Projects = () => {
  return (
    <div id="projects" className="projects">
      <div className="projects-title">Projects</div>
      <div className="projects-body">
        {projects.map(({ id, title, image, link, type, description }) => {
          return (
            <ProjectCard
              key={id}
              id={id}
              title={title}
              image={image}
              link={link}
              type={type}
              description={description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
