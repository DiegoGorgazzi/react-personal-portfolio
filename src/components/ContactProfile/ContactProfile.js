import React from "react";
import contactProfileStyles from './ContactProfile.module.css';

const contactProfile = (props) => (

  <div className={contactProfileStyles["contact-title"]}>
     <div className={contactProfileStyles.circle}>
      <a href={props.URL}
         target="_blank"
         rel="noopener noreferrer">
         {props.profName}
      </a>
    </div>
  </div>

);

export default contactProfile;
