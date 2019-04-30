import React, { Component } from 'react';
import './Portfolio.css';


class Portfolio extends Component {
  render() {
    return (

      <div>
      <nav id="navbar">

          <h4><a href="#welcome-section">About</a></h4>
          <h4><a href="#projects">Work</a></h4>
          <h4><a href="#contact">Contact</a></h4>


      </nav>


      <section id="welcome-section">
        <h1>Hi, I'm Mr. Anderson.</h1>
        <h1>My friends call me Neo.</h1>
        <h4>I'm a Web Developer</h4>

      </section>

      <section id="projects">
        <h1>Some of the Projects I did at FCC...</h1>

        <div class="projectContainer">

          <div class="project-title">
             <picture>
               <a href="https://codepen.io/StartHere/full/pxQwGV">
                 <img
                   src="https://dl.dropbox.com/s/i28mpp1n8f463cw/Project5Portfolio.png?dl=0"
                   alt="Project number 5, Personal Portfolio Page"/>
                <figcaption>
                      Project #5: Personal Portfolio
                </figcaption>
              </a>
            </picture>
          </div>

          <div class="project-title">
           <picture>
             <a href="https://codepen.io/StartHere/full/Edpzbe">
               <img
                 src="https://dl.dropbox.com/s/zsoqbc8d4rllcd0/Project4Documentation.png?dl=0"
                 alt="Project number 4, Documentation Page"/>
               <figcaption>
                 Project #4: Documentation Page
               </figcaption> </a>
          </picture>
        </div>

          <div class="project-title">
           <picture>
        <a href="https://codepen.io/StartHere/full/VErWRL">
          <img
            src="https://dl.dropbox.com/s/ypqmu10qkxni702/Project3ProductPage.png?dl=0"
            alt="Project number 3, Product Page"/>
        <figcaption>
              Project #3: Product Page
          </figcaption> </a>
       </picture>
        </div>

           <div class="project-title">
             <picture>
       <a href="https://codepen.io/StartHere/full/MPmRNv">
         <img src="https://dl.dropbox.com/s/oi7s38d8dy0w2lt/Project2Survey.png?dl=0"
           alt="Project number 2, Survey Form"/>
        <figcaption>
              Project #2: Survey Form
          </figcaption> </a>
       </picture>
          </div>

           <div class="project-title">
             <picture>
       <a href="https://codepen.io/StartHere/full/qJawxB">
         <img
           src="https://dl.dropbox.com/s/ak5ppvomibuqfs6/Project1TributePage.png?dl=0"
           alt="Project number 1, Tribute Page"/>
        <figcaption>
              Project #1: Tribute Page
          </figcaption> </a>
       </picture>
          </div>

        </div>

      </section>




      <section id="contact">
         <h1>Let's work Together</h1>
          <h4>How do you take your coffee?</h4>

        <div class="contactContainer">

          <div class="contact-title">
             <div class="circle">
              <a id="profile-link" href="https://github.com/diegoman1923" target="_blank">Facebook</a>
            </div>
          </div>

          <div class="contact-title">
             <div class="circle">
              <a id="profile-link" href="https://github.com/diegoman1923" target="_blank">GitHub</a>
            </div>
          </div>

          <div class="contact-title">
             <div class="circle">
              <a id="profile-link" href="https://github.com/diegoman1923" target="_blank">Twitter</a>
            </div>
          </div>

          <div class="contact-title">
             <div class="circle">
                <a id="profile-link" href="https://github.com/diegoman1923" target="_blank">Email</a>
            </div>
          </div>


          <div class="contact-title">
             <div class="circle">
              <a id="profile-link" href="https://github.com/diegoman1923" target="_blank">Call me</a>
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
