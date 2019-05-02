import React from "react";
import Project from "./Project/Project";
import portfolioStyles from '../../containers/Portfolio/Portfolio.module.css';

const mappedProject = (props) => props.projectList.map((eachProject, index) =>
  { return <Project
    projectURL={eachProject.projectURL}
    imageSource={eachProject.imageSource}
    altDescription={eachProject.altDescription}
    projectTitle={eachProject.projectTitle}
    key={index}
    />
  }
);

const projects = (props) => (
  <div className={portfolioStyles.projectContainer}>
    {mappedProject(props)}
</div>

);

export default projects;
