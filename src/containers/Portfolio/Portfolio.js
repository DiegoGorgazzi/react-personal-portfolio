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
            <h4><a href="#welcome-section">About</a></h4>
            <h4><a href="#work">Work</a></h4>
            <h4><a href="#contact">Contact</a></h4>
        </nav>


        <section className={portfolioStyles["welcome-section"]} id="welcome-section">
          <h1>Hi, I'm Mr. Anderson.</h1>
          <h1>My friends call me Neo.</h1>
          <h4>I'm a Web Developer</h4>
        </section>

        <section className={portfolioStyles.work} id="work">
          <h1>Some of what I've done</h1>
        </section>

        <section className={portfolioStyles.projects}>
          <h1>Some of the Projects I did at FCC...</h1>

          <div className={portfolioStyles.projectContainer}>

            <Project
              projectURL="https://codepen.io/StartHere/full/pxQwGV"
              imageSource="https://dl.dropbox.com/s/i28mpp1n8f463cw/Project5Portfolio.png?dl=0"
              altDescription="Project number 5, Personal Portfolio Page"
              projectTitle="Project #5: Personal Portfolio"
            />

            <Project
              projectURL="https://codepen.io/StartHere/full/Edpzbe"
              imageSource="https://dl.dropbox.com/s/zsoqbc8d4rllcd0/Project4Documentation.png?dl=0"
              altDescription="Project number 4, Documentation Page"
              projectTitle="Project #4: Documentation Page"
              />

            <Project
              projectURL="https://codepen.io/StartHere/full/VErWRL"
              imageSource="https://dl.dropbox.com/s/ypqmu10qkxni702/Project3ProductPage.png?dl=0"
              altDescription="Project number 3, Product Page"
              projectTitle="Project #3: Product Page"
            />

            <Project
              projectURL="https://codepen.io/StartHere/full/MPmRNv"
              imageSource="https://dl.dropbox.com/s/oi7s38d8dy0w2lt/Project2Survey.png?dl=0"
              altDescription="Project number 2, Survey Form"
              projectTitle="Project #2: Survey Form"
            />

            <Project
              projectURL="https://codepen.io/StartHere/full/qJawxB"
              imageSource="https://dl.dropbox.com/s/ak5ppvomibuqfs6/Project1TributePage.png?dl=0"
              altDescription="Project number 1, Tribute Page"
              projectTitle="Project #1: Tribute Page"
              />

          </div>
        </section>

        <section className={portfolioStyles.projects}>
          <h3> Vanilla HTML and CSS</h3>
          <h4> Rites of Passage?</h4>
          <p> These are all challenge projects from freeCodeCamp (FCC).
            They all involved starting from scratch. </p>

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
