import React from "react";
import Project from "./Project/Project";
import projectsStyles from "./Projects.module.css";

const mappedProject = props =>
  props.projectList.map((eachProject, index) => {
    return (
      <Project
        projectURL={eachProject.projectURL}
        imageSource={eachProject.imageSource}
        altDescription={eachProject.altDescription}
        projectTitle={eachProject.projectTitle}
        key={index}
      />
    );
  });

const projects = props => (
  <div className={projectsStyles.projectContainer}>{mappedProject(props)}</div>
);

export default projects;
