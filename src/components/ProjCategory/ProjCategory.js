import React from "react";

const projCategory = (props) => (
  <div>
    <h3> {props.catTitle} </h3>
    <h4> {props.catSubTitle} </h4>

    {props.children}

  </div>
)

export default projCategory;
