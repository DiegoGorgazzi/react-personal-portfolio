import React from "react";
import ProjCategoryStyles from "./ProjCategory.module.css";

const projCategory = (props) => (
  <div className = {ProjCategoryStyles.projects} >
    <h3> {props.catTitle} </h3>
    <h4> {props.catSubTitle} </h4>

    {props.children}

  </div>
)

export default projCategory;
