import React, { Component } from 'react';
import portfolioStyles from './Portfolio.module.css';
import ProjCategory from '../../components/ProjCategory/ProjCategory';
import Projects from "../../components/Projects/Projects";
import ToggleVisibility from "../../components/ToggleVisibility/ToggleVisibility";

import {projectListOne} from "../../shared/projectListOne/projectListOne";
import {projectListTwo} from "../../shared/projectListTwo/projectListTwo";
import {projectListThree} from "../../shared/projectListThree/projectListThree";

class Portfolio extends Component {
  state = {
      hideProj1: true,
      hideProj2: true,
      hideProj3: true,
  }

toggleProjectVisibility = (event) => {
    let hideProject = "hide"+event.target.id;
    let hideStatus = this.state[hideProject];
    this.setState({
      [hideProject]: !hideStatus
    })
  }

  render() {
    return (

      <div>
        <nav id="navbar">
            <h4><a href="#welcome-section">About</a></h4>
            <h4><a href="#work">Work</a></h4>
            <h4><a href="#contact">Contact Me</a></h4>
        </nav>


        <section className={portfolioStyles["welcome-section"]} id="welcome-section">
          <h1>Hi, I'm Mr. Anderson.</h1>
          <h1>My friends call me Neo.</h1>
          <h4>I'm a Web Developer</h4>
        </section>

        <section className={portfolioStyles.work} id="work">
          <h1>SOME OF WHAT I'VE DONE</h1>
        </section>

        <section className={portfolioStyles.projects}>
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
              hideOnClick = {this.toggleProjectVisibility}
              showText = "Show Projects"
              hideText = "Hide Projects"
            />

                {!this.state.hideProj1 &&
                  <Projects projectList = {projectListOne} />}

        </ProjCategory>

        <ProjCategory
          catTitle = "WordPress and a sprinkle of HTML"
          catSubTitle = "A long time ago in a Galaxy far, far away..."
          >

            <p> ???????? ????????? ?????????? ????????????? ???? ?????? </p>

            <ToggleVisibility
                whatState = {this.state.hideProj2}
                hideID = "Proj2"
                hideOnClick = {this.toggleProjectVisibility}
                showText = "Show Projects"
                hideText = "Hide Projects"
              />

              {!this.state.hideProj2 &&
                  <Projects projectList = {projectListTwo} />}

        </ProjCategory>

        <ProjCategory
          catTitle = "Project Category Title"
          catSubTitle = "Project Categoy Sub Title"
          >

          <p> and this is my description </p>

          <ToggleVisibility
              whatState = {this.state.hideProj3}
              hideID = "Proj3"
              hideOnClick = {this.toggleProjectVisibility}
              showText = "Show Projects"
              hideText = "Hide Projects"
            />

          {!this.state.hideProj3 &&
              <Projects projectList = {projectListThree} />}

      </ProjCategory>


        </section>



      <section id={portfolioStyles.contact}>
         <h1>Let's work Together</h1>
          <h4>How do you take your coffee?</h4>

        <div className={portfolioStyles.contactContainer}>

          <div className={portfolioStyles["contact-title"]}>
             <div className={portfolioStyles.circle}>
              <a id="profile-link"
                 href="https://github.com/diegoman1923"
                 target="_blank"
                 rel="noopener noreferrer">
                 Facebook
              </a>
            </div>
          </div>

          <div className={portfolioStyles["contact-title"]}>
             <div className={portfolioStyles.circle}>
              <a id="profile-link"
                 href="https://github.com/diegoman1923"
                 target="_blank"
                 rel="noopener noreferrer">
                 GitHub
              </a>
            </div>
          </div>

          <div className={portfolioStyles["contact-title"]}>
             <div className={portfolioStyles.circle}>
              <a id="profile-link"
                 href="https://github.com/diegoman1923"
                 target="_blank"
                 rel="noopener noreferrer">
                 Twitter
              </a>
            </div>
          </div>

          <div className={portfolioStyles["contact-title"]}>
             <div className={portfolioStyles.circle}>
                <a id="profile-link"
                    href="https://github.com/diegoman1923"
                    target="_blank"
                    rel="noopener noreferrer">
                    Email
                </a>
            </div>
          </div>


          <div className={portfolioStyles["contact-title"]}>
             <div className={portfolioStyles.circle}>
              <a id="profile-link"
              href="https://github.com/diegoman1923"
              target="_blank"
              rel="noopener noreferrer">
              Call me
              </a>
            </div>
          </div>


        </div>
      </section>

      <footer>
        <p> This is a school portfolio of challenges. All the projects shown are part of the educational curriculum. Still, pretty good, eh? </p>
        <p>&copy; Vandalay Industries 2018 ... p.s. this is also a "fake" company name</p>
      </footer>
      </div>

    );
      }
    }

export default Portfolio;
