import React, { Component } from "react";
import "../Header/Header.css";
import "./Home.css";
import Particles from "react-particles-js";
import Display from "./Display";
import Uniqueness from "./Uniqueness";
import ReactTypingEffect from "react-typing-effect";
import aboutUs from "../assets/images/aboutUs.gif";
import euphoria from "../assets/images/euphoria.png";
import genie from "../assets/images/genie.png";
import { Helmet } from "react-helmet";
import Testimonial from "./Testimonial";

export default class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>GenieGradz</title>
          <link rel="canonical" href="https://geniegradz.com/" />
        </Helmet>
        <div className="particle-container">
          <Particles
            id="particlejs"
            params={{
              particles: {
                number: {
                  value: 180,
                  density: {
                    enable: true,
                    value_area: 800,
                  },
                },
                color: {
                  value: ["#00f5ff", "#ff1616", "#fffc00"],
                },
                shape: {
                  type: "circle",
                  stroke: {
                    width: 0,
                    color: "#fff",
                  },
                  polygon: {
                    nb_sides: 6,
                  },
                  image: {
                    src: "https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png",
                    width: 10,
                    height: 10,
                  },
                },

                opacity: {
                  value: 1,
                  random: false,
                  anim: {
                    enable: false,
                    speed: 2000,
                    opacity_min: 0.1,
                    sync: false,
                  },
                },
                size: {
                  value: 3,
                  random: true,
                  anim: {
                    enable: false,
                    speed: 2000,
                    size_min: 10,
                    sync: false,
                  },
                },
                line_linked: {
                  enable: true,
                  distance: 75,
                  color: {
                    value: "#333",
                  },
                  opacity: 0.5,
                  width: 0.8,
                },
                move: {
                  enable: true,
                  speed: 5,
                  direction: "none",
                  random: false,
                  straight: false,
                  out_mode: "out",
                  bounce: false,
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                  },
                },
              },
              interactivity: {
                detect_on: "window",
                events: {
                  onhover: {
                    enable: true,
                    mode: "repulse",
                  },
                },
                modes: {
                  repulse: {
                    distance: 70,
                    duration: 0.4,
                  },
                  push: {
                    particles_nb: 4,
                  },
                },
              },
              retina_detect: true,
            }}
          />
          <div className="main">
            <div className="typing">
              <ReactTypingEffect
                className="typingEffect"
                text={[
                  " Is an alternative online education platform . . . ",
                  " Teaches you skills relevant to the present-day world . . . ",
                  " Helps you develop the tools and mindset for building great careers . . . ",
                  " For the students, by the students . . . ",
                  " One stop solution for gamified learning experience . . . ",
                ]}
                speed={40}
                eraseSpeed={40}
                typingDelay={40}
                eraseDelay={40}
                cursor=" "
              />
            </div>
            <div className="genie">
              <img src={genie} alt="" />
            </div>
          </div>
        </div>
        <div className="uniqueness py-24">
          <div class="flex flex-wrap w-full mb-16 flex-col items-center text-center">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 ">
              Uniqueness
            </h1>
            <div class="h-1 w-20 bg-cyan rounded"></div>
          </div>
          <Uniqueness />
        </div>
        <div className="features">
          <section class="text-gray-600 body-font">
            <div class="feature-container py-24 mx-auto">
              <div class="feature-header flex flex-wrap w-full mb-16 flex-col items-center text-center">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2">
                  Our Features
                </h1>
                <div class="h-1 w-20 bg-cyan rounded"></div>
              </div>
              <Display />
            </div>
          </section>
        </div>
        <div className="aboutUs">
          <section class="text-gray-600 body-font mx-auto">
            <div class="about-container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <img
                  class="object-cover object-center rounded"
                  alt="hero"
                  src={aboutUs}
                />
              </div>

              <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                  About Us
                </h1>
                <div class="h-1 w-20 bg-cyan rounded mb-5"></div>
                <p class="mb-8 leading-relaxed text-black">
                  We are a group of peers sharing a common revolutionary mindset
                  having a centric understanding that choosing career options
                  that others choose/seems to be the most demanding options not
                  always proves to be beneficial, we are a one-stop solution
                  that helps peers/enthusiasts of class 8-12 to find their niche
                  and also help to build their career in one of the best
                  disciplines matching your respective niche area. Catering to
                  more than 20 + problems faced by students for choosing and
                  developing their beneficial career, We have come up with a
                  centralized revolutionary gamified learning environment where
                  Experts/peers across various disciplines help you learn,
                  mentor you, and transform your career prospects.{" "}
                </p>{" "}
                <div class="flex justify-center"></div>
              </div>
            </div>
          </section>
        </div>
        <div className="bvc">
          <div>
            <h3>
              {" "}
              <span>India's</span> first Gamified Virtual Campus,
            </h3>
            <img src={euphoria} alt="" />
            <button className="btn">Coming Soon ...</button>
          </div>
        </div>
        <div className="testimonials-1">
          <Testimonial />
        </div>
      </div>
    );
  }
}
