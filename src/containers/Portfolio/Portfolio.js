import React, { Component } from 'react';
import portfolioStyles from './Portfolio.module.css';
import Projects from "../../components/Projects/Projects";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

import {projectListOne} from "../../shared/projectListOne/projectListOne";
import {projectListTwo} from "../../shared/projectListTwo/projectListTwo";


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
          <h3> Vanilla HTML and CSS</h3>
          <h4> Rite of Passage?</h4>
          <p> These are all challenge projects from freeCodeCamp (FCC).
            They all involved starting from scratch. Some of these
          remind me of the Internet from the 1990's. Good times. </p>

              <div className={portfolioStyles.showMore}>
                    <div

                      >
                      {this.state.hideProj1 ?
                         <span
                            id="Proj1"
                             onClick={this.toggleProjectVisibility}>
                             Show Projects
                              <span
                               className={portfolioStyles.showMoreArrowDown}
                               id="Proj1"
                                onClick={this.toggleProjectVisibility}>
                                &#8964;
                              </span>
                          </span>

                        : <span
                           id="Proj1"
                            onClick={this.toggleProjectVisibility}>

                             <span
                              className={portfolioStyles.showMoreArrowUp}
                              id="Proj1"
                               onClick={this.toggleProjectVisibility}>
                                  &#8963;
                             </span>
                             Hide Projects
                         </span> }
                    </div>
            </div>

                {!this.state.hideProj1 &&
                  <Projects projectList = {projectListOne} />}




          <h3> WordPress and a sprinkle of HTML</h3>
          <h4> A long time ago, in a Galaxy far, far away...</h4>
          <p> ???????????????????????????????????????? ???? ?????? </p>

              <div className={portfolioStyles.showMore}>
                    <div

                      >
                      {this.state.hideProj2 ?
                         <span
                            id="Proj2"
                             onClick={this.toggleProjectVisibility}>
                             Show Projects
                              <span
                               className={portfolioStyles.showMoreArrowDown}
                               id="Proj2"
                                onClick={this.toggleProjectVisibility}>
                                &#8964;
                              </span>
                          </span>

                        : <span
                           id="Proj2"
                            onClick={this.toggleProjectVisibility}>

                             <span
                              className={portfolioStyles.showMoreArrowUp}
                              id="Proj2"
                               onClick={this.toggleProjectVisibility}>
                                  &#8963;
                             </span>
                             Hide Projects
                         </span> }
                    </div>
            </div>

                {!this.state.hideProj2 &&
                  <Projects projectList = {projectListTwo} />}

        </section>



{/*
        <div>
          <button id="Proj2" onClick={this.toggleProjectVisibility} >
            {this.state.hideProj2 ? "Show" : "Hide"} Projects
          </button>

          {!this.state.hideProj2 &&
            <Projects projectList = {projectListTwo} />}

      </div>

        </section>
*/}

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
