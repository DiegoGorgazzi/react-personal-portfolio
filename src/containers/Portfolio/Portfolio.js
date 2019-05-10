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
                  showText = "More About Me"
                  hideText = "Less About Me"
                />

              {!this.state.hideAboutMe && <AboutMe />}

          </div>

        </section>


{/*----------------------Projects Section--------------------------------------*/}
        <section className={portfolioStyles.projectsSection}>

          <div className={portfolioStyles.work} id="work">
            <h1>SOME OF WHAT I'VE DONE</h1>
          </div>
      {/*---------------------Project Category---------------------------*/}
          <ProjCategory
            catTitle = "React"
            catSubTitle = "Solve World Hunger"
            >

            <p> I started playing around with React in January 2019. When I
              started to understand its capabilities, I was so excited (still am) that
              I felt there was no problem in the world that couldn't be solved. I immediatly
            got a gush of ideas flowing on how to improve this or that.</p>

            <p>I have just scratched the surface, but here are some projects mostly from
              FCC, except for this portfolio site you're seeing here. Which by the way,
              I had to "invest" a good chunk of time figuring out how to add a toggle
              functionality to the app because the &#60;details&#62; element is not supported
              by Internet Explorer. So, Microsoft, you owe a lot of people free lunch
              <span role="img" aria-label="	Smiling Face with Smiling Eyes"> &#128522;</span>. </p>

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
  {/*---------------------Project Category---------------------------*/}
          <ProjCategory
            catTitle = "Algorithms"
            catSubTitle = "A different kind of Rhythm"
            >

            <p> For many years I heard the word "algorithm" being thrown around
              by virtually everybody who was as far removed from software engineering as
              LA is from NYC, but I never
              knew what an algorithm was. To me it sounded like Magic. Meanwhile, there I was in my office, working
              day and night, a lot of the time
              writing, "if", "or", "and", and other operators in Excel spreadsheets
              like nobody's business. </p>

            <p> Essentially, unbeknown to me, I was already
              writing algorithms. Granted, compared to an app, Excel is a lot simpler,
              but the basic structure of the logic is very similar. </p>

            <p>
              A few years ago I did some Project Euler challenges using Python. I don't
              think I remember how to use python (but I do remember putting an extra space
              could mean the end of the world!). However, here,
              are the challenges from FCC, using JavaScript. After completing these,
              I looked at how other people solved them and was in awe at how ingenious
              some of the solutions are. Still, mine look decent enough.</p>
            <p> To be fair,
              you'd probably argue that React projects are also algorithms but I decided to put them in a league
              of their own.
              </p>

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
  {/*---------------------Project Category---------------------------*/}
          <ProjCategory
            catTitle = "WordPress and a sprinkle of HTML"
            catSubTitle = "A long time ago in a Galaxy far, far away..."
            >

              <p> I used the Genesis framework. Making awesome websites with
                WordPress is so easy, I can't believe people pay other people to
                build them.</p>
              <p> This is where I got my hands dirty with SEO,
                Google Analytics, and Google AdWords (now just Google Ads).
               I should mention, I'm aware that this site, being an SPA, is not
               yet SEO friendly. </p>

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
  {/*---------------------Project Category---------------------------*/}
            <ProjCategory
              catTitle = "Vanilla HTML and CSS"
              catSubTitle = "Rite of Passage?"
              >
            <p> If you want to get to point B, you need to start at point A. I wasn't
              particularly thrilled to play around with "old" tech, but FlexBox
              gave me a good run for the money (it still does!). These are all
              challenge projects from freeCodeCamp (FCC). They all involved starting
              from scratch. Some of these  remind me of the Internet from the 1990's.
              Good times. </p>

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
      <section className={portfolioStyles.contactSection} id="contact">
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
