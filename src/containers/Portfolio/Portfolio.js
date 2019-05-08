import React, { Component } from 'react';
import portfolioStyles from './Portfolio.module.css';
import ProjCategory from '../../components/ProjCategory/ProjCategory';
import Projects from "../../components/Projects/Projects";
import ToggleVisibility from "../../components/ToggleVisibility/ToggleVisibility";
import ContactProfile from "../../components/ContactProfile/ContactProfile";
import AboutMe from "../../components/AboutMe/AboutMe";

import {projectListOne} from "../../shared/projectListOne/projectListOne";
import {projectListTwo} from "../../shared/projectListTwo/projectListTwo";
import {projectListThree} from "../../shared/projectListThree/projectListThree";
import {projectListFour} from "../../shared/projectListFour/projectListFour";

class Portfolio extends Component {
  state = {
      hideAboutMe: true,
      hideProj1: true,
      hideProj2: true,
      hideProj3: true,
      hideProj4: true
  }

toggleCompVisibility = (event) => {
    let hideComponent = "hide"+event.target.id;
    let hideStatus = this.state[hideComponent];
    this.setState({
      [hideComponent]: !hideStatus
    })
  }

  render() {
    //Conditional styling on Welcome screen IF a Togle component is included
    let toggleStyle;
    if(this.state.hideAboutMe) {
      toggleStyle = portfolioStyles["welcome-section"];
    } else {
      toggleStyle = portfolioStyles["welcome-section-toggled"];
    }



    return (

      <div>
        <nav id="navbar">
            <h4><a href="#welcome-section">About</a></h4>
            <h4><a href="#work">Work</a></h4>
            <h4><a href="#contact">Contact Me</a></h4>
        </nav>

{/*-----------------------Welcome / About section ----------------------------*/}
        <section
          className= {toggleStyle}
          >
            <div id={portfolioStyles.myMessage}>
              <h1 id="hi">Hi, I'm Diego</h1>
              <h1>This is my SPA Portfolio created with</h1>
              <h4>React</h4>
            </div>

          <div>
              <ToggleVisibility
                  whatState = {this.state.hideAboutMe}
                  hideID = "AboutMe"
                  hideOnClick = {this.toggleCompVisibility}
                  showText = "More about me"
                  hideText = "Less about me"
                />

              {!this.state.hideAboutMe && <AboutMe />}

          </div>

        </section>


{/*----------------------Projects Section--------------------------------------*/}
        <section className={portfolioStyles.projects}>

          <div className={portfolioStyles.work} id="work">
            <h1>SOME OF WHAT I'VE DONE</h1>
          </div>

          <ProjCategory
            catTitle = "React"
            catSubTitle = "Project Categoy Sub Title"
            >

            <p> and this is my description </p>

            <ToggleVisibility
                whatState = {this.state.hideProj4}
                hideID = "Proj4"
                hideOnClick = {this.toggleCompVisibility}
                showText = "Show Projects"
                hideText = "Hide Projects"
              />

            {!this.state.hideProj4 &&
               <Projects projectList = {projectListFour} />}

          </ProjCategory>

          <ProjCategory
            catTitle = "Algorithms, mostly JavaScript"
            catSubTitle = "Project Categoy Sub Title"
            >

            <p> and this is my description </p>

            <ToggleVisibility
                whatState = {this.state.hideProj3}
                hideID = "Proj3"
                hideOnClick = {this.toggleCompVisibility}
                showText = "Show Projects"
                hideText = "Hide Projects"
              />

            {!this.state.hideProj3 &&
               <Projects projectList = {projectListThree} />}

          </ProjCategory>

          <ProjCategory
            catTitle = "WordPress and a sprinkle of HTML"
            catSubTitle = "A long time ago in a Galaxy far, far away..."
            >

              <p> ???????? ????????? ?????????? ????????????? ???? ?????? </p>

              <ToggleVisibility
                  whatState = {this.state.hideProj2}
                  hideID = "Proj2"
                  hideOnClick = {this.toggleCompVisibility}
                  showText = "Show Projects"
                  hideText = "Hide Projects"
                />

                {!this.state.hideProj2 &&
                    <Projects projectList = {projectListTwo} />}

          </ProjCategory>



            <ProjCategory
              catTitle = "Vanilla HTML and CSS"
              catSubTitle = "Rite of Passage?"
              >
            <p> These are all challenge projects from freeCodeCamp (FCC).
              They all involved starting from scratch. Some of these
            remind me of the Internet from the 1990's. Good times. </p>

            {/*IMPORTANT for ToggleVisibility: hideID MUST match the second part of
               the word after "hide" in state.
                Example:
                 * if your state is hideProj3,
                        then hideID MUST be Proj3
                 * if your state is hideAllofTheAbove,
                        then hideID MUST be AllofTheAbove

                YOUR state MUST always start with the word "hide"
                Example:
                 * Acceptable:
                        state = {hideThisSection} ;
                        state = {hideDescription};
                 * NOT acceptable:
                        state = {invisibleSection};
                        state = {toggleDescription};
                        state = {HideSome};
                        state = {anythingOtherThanHideAnything};
                 */}

            <ToggleVisibility
                whatState = {this.state.hideProj1}
                hideID = "Proj1"
                hideOnClick = {this.toggleCompVisibility}
                showText = "Show Projects"
                hideText = "Hide Projects"
              />

                  {!this.state.hideProj1 &&
                    <Projects projectList = {projectListOne} />}

          </ProjCategory>



        </section>


{/* -------------------CONTACT ME SECTION------------------------------------*/}
      <section className={portfolioStyles.contact} id="contact">
        <h1>Let's work Together</h1>
        <h4>How do you take your coffee?</h4>

          <div className={portfolioStyles.contactContainer}>

            <ContactProfile
              URL= "https://github.com/DiegoGorgazzi"
              profName = "GitHub"
              />

            <ContactProfile
              URL= "https://www.linkedin.com/in/diego-g-gorgazzi-2b5a922b/"
              profName = "Linkedin"
              />

          </div>
      </section>

{/*----------------------FOOTER----------------------------------------------*/}
      <footer>
        <p> Thanks for Stopping By </p>
        <p>&copy; Diego Gorgazzi {(new Date().getFullYear())}</p>
      </footer>
      </div>

    );
      }
    }

export default Portfolio;
