import React from "react";
import "./Demo.css";
import { Helmet } from "react-helmet";
import coding from "../assets/images/coding.gif";
import maths from "../assets/images/maths.gif";
import java from "../assets/images/java.png"
import python from "../assets/images/python.png"
import mathematics from "../assets/images/mathematics.png"

const Demo = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>GenieGradz | Launch 2022</title>
        <link rel="canonical" href="https://geniegradz.com/launch2022" />
      </Helmet>
      <div className="demo ">
        <div class="demo-container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
          <div class="demo-contents lg:flex-grow flex flex-col md:items-start md:text-left mb-10 md:mb-0 items-center">
            <div class="flex flex-wrap w-full mb-3 flex-col items-center text-center">
              <h1 class="text-3xl mt-4 font-normal title-font ">
                Exclusive 2022 Package
              </h1>
              <div class="h-1 w-20 bg-cyan rounded m-4"></div>
            </div>
            <p class=" leading-relaxed w-4/5 pt-2">
              We are back with our exclusive 2022 along with some
              exciting offers Moreover, we have added one more option with -{" "}
            </p>
            <div className="fields">
              <ul className="field-list sm:flex-col">
                <li class="m-4">
                  <div class="field">
                    <div className="field-img">
                      <img src={java} alt="" />
                    </div>
                    <h3>Java</h3>
                  </div>
                </li>
                <li class="m-4">
                  <div class="field">
                    <div className="field-img">
                      <img src={python} alt="" />
                    </div>
                    <h3> Python</h3>
                  </div>
                </li>
                                <li class="m-4">
                  <div class="field">
                    <div className="field-img">
                      <img src={mathematics} alt="" />
                    </div>
                    <h3> Mathematics</h3>
                  </div>
                </li>
              </ul>
              <div className="py-12">
                <h1 className="text-2xl font-bold cyan">Course Contents</h1>
                <ul className="course-feat">
                  <li>Live Lectures</li>
                  <li>Recorded Lectures</li>
                  <li>Conceptual Test</li>
                  <li>Doubt & difficulty</li>
                  <li>Mentorship</li>
                  <li>PPT's & PDF's </li>
                  <li>Worksheets</li>
                  <li>Cheatsheets</li>
                  <li>Mind Map</li>
                  <li>Meme based learning </li>
                  <li>Virtual Library</li>
                  <li>Projects & Certifications</li>
                  <li>Alumni Network</li>
                  <li>Virtual Campus</li>
                  <li>Seminars</li>
                  <li>Webinars</li>
                </ul>
              </div>
              {/* <div className="w-full py-10">
                <h1 className="text-2xl pb-3 cyan font-bold">What’s more?</h1>
                <p>
                  All the proceedings[Subscription Fees] will be donated for a
                  social cause which will either be for flood relief or
                  Orphanage or both
                </p>
              </div> */}
              <hr />
              <h1 className="text-2xl font-bold cyan py-12 pb-0">
                Subscription Fees
              </h1>
              <div className="py-5">
                <ul className="price-list-1">
                  <li className="subs pb-4">
                    <div>
                      Java: <br /> <b>Zero to Hero</b>
                    </div>
                    <div className="subs-price-1"> <small>₹349</small> ₹249/-</div>
                    <div className="subs-price text-red-400">
                      <a
                        href="https://rzp.io/l/java249"
                        target="_blank"
                        class="btn-link"
                      >
                        Register Now
                      </a>
                    </div>
                  </li>
                  <li className="subs pb-4">
                    <div>
                      For Python: <br /> <b>Zero to Hero</b>
                    </div>
                    <div className="subs-price-1"> <small>₹349</small> ₹249/-</div>
                    <div className="subs-price text-red-400">
                      <a
                        href="https://rzp.io/l/python249"
                        target="_blank"
                        class="btn-link"
                      >
                        Register Now
                      </a>
                    </div>
                  </li>
                  <li className="subs pb-4">
                    <div>
                      For Mathematics: <br /> <b>Zero to Hero</b>
                    </div>
                    <div className="subs-price-1"> <small>₹349</small> ₹249/-</div>
                    <div className="subs-price text-red-400">
                      <a
                        href="https://rzp.io/l/mathematics249"
                        target="_blank"
                        class="btn-link"
                      >
                        Register Now
                      </a>
                    </div>
                  </li>
                  <li className="subs pb-4">
                    <div>
                    A la Carte: <br /> <b>Choose any two</b>
                    </div>
                    <div className="subs-price-1"> <small>₹699</small> ₹399/-</div>
                    <div className="subs-price text-red-400">
                      <a
                        href="https://rzp.io/l/alacarte399"
                        target="_blank"
                        class="btn-link"
                      >
                        Register Now
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
