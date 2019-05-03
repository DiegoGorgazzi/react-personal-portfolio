import React, { Component } from 'react';
import portfolioStyles from './Portfolio.module.css';
import Project from "../../components/Projects/Project/Project";
import Projects from "../../components/Projects/Projects";
import {projectListOne} from "../../shared/projectListOne/projectListOne";

class Portfolio extends Component {
  render() {
    return (

      <div>
        <nav id="navbar">
            <h4><a href="#welcome-section">ABOUT</a></h4>
            <h4><a href="#work">WORK</a></h4>
            <h4><a href="#contact">CONTACT ME</a></h4>
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
          <h4> Rites of Passage?</h4>
          <p> These are all challenge projects from freeCodeCamp (FCC).
            They all involved starting from scratch. Some of these
          remind me of the Internet from the 1990's. </p>

        <Projects
          projectList = {projectListOne} />

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
