import React from "react";
import logoFinal from "../assets/images/logoFinal.jpg";
import "./Footer.css";
import ScrollToTop from "react-scroll-to-top";
import { FaChevronUp } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer class="text-gray-400 bg-gray-900 body-font">
        <div class="footer-container px-5 py-24 mx-auto flex md:items-start lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div class="flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a class="flex title-font font-medium items-baseline md:justify-start justify-center text-white">
              <img src={logoFinal} alt="" className="img-header" />
            </a>
          </div>
          <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div class="lg:w-1/4 md:w-1/2 w-full px-5">
              <h2 class="title-font font-medium text-white tracking-widest text-md mb-3">
                Company
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a target="_blank" class="text-gray-400" href="https://discord.gg/Nc8S5PtygK">
                    Discord Server
                  </a>
                </li>
                <li>
                  <a 
                    target="_blank"
                    class="text-gray-400"
                    href="https://chat.whatsapp.com/Cf7QS5vT6lpB4eEaCzjLwF"
                  >
                    Whatsapp
                  </a>
                </li>
                <li>
                  <a target="_blank" class="text-gray-400" href="#">
                    Euphoria (Coming Soon){" "}
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    target="_blank"
                    class="text-gray-400"
                    href="https://braizeo.typeform.com/work-with-us"
                  >
                    Work with us
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    target="_blank"
                    class="text-gray-400"
                    href="https://www.instagram.com/brainzeo/"
                  >
                    Gamified Learning
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    target="_blank"
                    class="text-gray-400"
                    href="https://brainzeo.typeform.com/student-dvlp-pg"
                  >
                    Students Developer Program
                  </a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-5">
              <h2 class="title-font font-medium text-white tracking-widest text-md mb-3">
                Products
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a
                    target="_blank"
                    target="_blank"
                    class="text-gray-400"
                    href="https://drive.google.com/drive/folders/17GnHECDg3C0MOTO95HUM9xnEKHp_6V6W?usp=sharing"
                  >
                    Meme Cheatsheets
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    target="_blank"
                    class="text-gray-400"
                    href="https://drive.google.com/drive/folders/1bt_HGGKR5VClorXPmc7m6ZAbZSfKIIi9?usp=sharing"
                  >
                    Interactive Classes
                  </a>
                </li>
                <li>
                  <a target="_blank" class="text-gray-400" href="https://calendly.com/brainzeo-edtech/brainzeo-walkthrough-30-mins?month=2021-09">
                    Book A Walk Through
                  </a>
                </li>
                <li>
                  <a target="_blank" class="text-gray-400" href="https://braizeo.typeform.com/newsletters">
                    Newsletters
                  </a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-5">
              <h2 class="title-font font-medium text-white tracking-widest text-md mb-3">
                About
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a target="_blank" href="/Privacy" className="text-gray-400 cursor-pointer">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a target="_blank" href="/Services" className="text-gray-400 cursor-pointer">
                    Live Mentorship T&C
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    exact
                    href="/Guidelines"
                    className="text-gray-400 cursor-pointer"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    exact
                    href="/Refund"
                    className="text-gray-400 cursor-pointer"
                  >
                    Refund Policy
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    exact
                    href="/Code"
                    className="text-gray-400 cursor-pointer"
                  >
                    Code of Conduct
                  </a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-5">
              <h2 class="title-font font-medium text-white tracking-widest text-md mb-3">
                Contact Us
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a target="_blank" href="#" className="text-gray-400 cursor-pointer">
                    support@brainzeo.co
                  </a>
                </li>
                <li>
                  <a target="_blank" href="#">
                    24, Shreemant Niwas, <br />
                    Jay Bhavani Nagar, Majiwada, <br />
                    Thane(W) - 400601
                  </a>
                </li>
                <li>
                  <a target="_blank" href="#">+91 9702841901</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div class="bg-gray-900 bg-opacity-75">
          <div class="footer-container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p class="text-gray-200 text-md text-center sm:text-left">
              © Copyrights 2021 —
              <a
                href="https://www.instagram.com/brainzeo/"
                rel="noopener noreferrer"
                class="text-gray-400 ml-1"
                target="_blank"
              >
                @Brainzeo
              </a>
            </p>
            <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start footer-medias ">
              <a
                target="_blank"
                class="ml-3 mb-3 text-gray-400 footer-media"
                href="https://www.facebook.com/profile.php?id=100071618354062"
              >
                <i class="fab fa-facebook-f"></i>
              </a>
              <a
                target="_blank"
                class="ml-3 mb-3 text-gray-400 footer-media"
                href="https://twitter.com/Brain_zeo"
              >
                <i class="fab fa-twitter"></i>
              </a>
              <a
                target="_blank"
                class="ml-3 mb-3 text-gray-400 footer-media"
                href="https://www.instagram.com/brainzeo/"
              >
                <i class="fab fa-instagram"></i>
              </a>
              <a
                target="_blank"
                class="ml-3 mb-3 text-gray-400 footer-media"
                href="https://www.linkedin.com/in/brainzeo-edtech-a1805121a/"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
            </span>
          </div>
          <ScrollToTop
            smooth
            component={<FaChevronUp />}
            style={{
              color: "black",
              background: "cyan",
              padding: "12px",
              boxShadow: "0px 0px 5px rgba(0,0,0,.5)",
            }}
          />
          </div>
      </footer>
    </div>
  );
};

export default Footer;
