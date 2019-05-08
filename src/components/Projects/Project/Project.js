import React from "react";
//import portfolioStyles from '../../containers/Portfolio/Portfolio.module.css';
import projectStyles from "./Project.module.css";

const project = (props) => (
      <div className={projectStyles["project-title"]}>
         <picture>
           <a href={props.projectURL}
             target="_blank"
             rel="noopener noreferrer">
             <img
               src={props.imageSource}
               alt={props.altDescription}/>
            <figcaption>
                  {props.projectTitle}
            </figcaption>
          </a>
        </picture>
      </div>

    );

export default project;
