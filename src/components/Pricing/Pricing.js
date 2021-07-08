import React from 'react';
import './Pricing.css'

const Pricing = () => {
  return (
    <div>
      <div className="pricing-container">
        <div className="lm-tabel">
          <div className="lm-item lm-item-1">
            <div className="lm-item-top"><span className="lm-item-title lm-underline">CROWN</span>
              <div className="lm-item-price"><div className="lm-real-price">₹3500</div>₹3000</div>
            </div>
            <div className="lm-item-body">
              <ul className="lm-item-list">
                <li>Study Room<i className="icon-ok"></i></li>
                <li>Live & Recorded Lectures<i className="icon-ok"></i></li>
                <li>Conceptual Test<i className="icon-ok"></i></li>
                <li>Notes & Code Files<i className="icon-ok"></i></li>
                <li>Library<i className="icon-cancel"></i></li>
                <li>Community Forum<i className="icon-cancel"></i></li>
                <li>Doubt & Difficulty<i className="icon-ok"></i></li>
                <li>Mentors Connect<i className="icon-cancel"></i></li>
                <li>Projects & certifications<i className="icon-ok"></i></li>
                <li>Euphoria 90 Days Subscription<i className="icon-ok"></i></li>

              </ul>
              <div className="lm-item-link">
                <a href="#">
                  <svg width="152" height="52" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="lm-gr-2" x1="0" y1="0" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#7E052D"></stop>
                        <stop offset="100%" stop-color="#F6266B"></stop>
                      </linearGradient>
                    </defs>
                    <rect x="1" y="1" width="105" height="50" rx="25" fill="#fff" stroke="url(#lm-gr-2)" stroke-width="1"></rect>
                    <text x="23%" y="65%" fill="url(&quot;#lm-gr-2&quot;)">ADD</text>
                  </svg>

                </a>
              </div>
            </div>
            <div className="lm-item-bottom"></div>
          </div>
          <div className="lm-item lm-item-2">
            <div className="lm-item-top"><span className="lm-item-title lm-underline">ACE</span>
              <div className="lm-item-price"><div className="lm-real-price">₹4500</div>₹4000</div>
            </div>
            <div className="lm-item-body">
              <ul className="lm-item-list">
                <li>Study Room<i className="icon-ok"></i></li>
                <li>Live & Recorded Lectures<i className="icon-ok"></i></li>
                <li>Conceptual Test<i className="icon-ok"></i></li>
                <li>Meme Cheatsheets,<br />Notes & Code Files<i className="icon-ok"></i></li>
                <li>Library<i className="icon-cancel"></i></li>
                <li>Community Forum<i className="icon-ok"></i></li>
                <li>Doubt & Difficulty<i className="icon-ok"></i></li>
                <li>Mentors Connect<i className="icon-cancel"></i></li>
                <li>Projects & certifications<i className="icon-ok"></i></li>
                <li>Euphoria 90 Days Subscription<i className="icon-ok"></i></li>
              </ul>
              <div className="lm-item-link">
                <a href="#">
                  <svg width="152" height="52" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="lm-gr-1" x1="0" y1="0" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#241326"></stop>
                        <stop offset="100%" stop-color="#85468C"></stop>
                      </linearGradient>
                    </defs>
                    <rect x="1" y="1" width="105" height="50" rx="25" fill="#fff" stroke="url(#lm-gr-1)" stroke-width="1"></rect>
                    <text x="23%" y="65%" fill="url(&quot;#lm-gr-1&quot;)">ADD</text>
                  </svg>
                </a>
              </div>
            </div>
            <div className="lm-item-bottom"></div>
          </div>
          <div className="lm-item lm-item-3">
            <div className="lm-item-top"><span className="lm-item-title lm-underline">CONQUEROR</span>
              <div className="lm-item-price"><div className="lm-real-price">₹5500</div>₹4500</div>
            </div>
            <div className="lm-item-body">
              <ul className="lm-item-list">
                <li>Study Room<i className="icon-ok"></i></li>
                <li>Live & Recorded Lectures<i className="icon-ok"></i></li>
                <li>Conceptual Test<i className="icon-ok"></i></li>
                <li>Meme Cheatsheets,<br />Notes & Code Files<i className="icon-ok"></i></li>
                <li>Library<i className="icon-ok"></i></li>
                <li>Community Forum<i className="icon-ok"></i></li>
                <li>Doubt & Difficulty<i className="icon-ok"></i></li>
                <li>Mentors Connect<i className="icon-ok"></i></li>
                <li>Projects & certifications<i className="icon-ok"></i></li>
                <li>Euphoria 90 Days Subscription<i className="icon-ok"></i></li>
              </ul>
              <div className="lm-item-link">
                <a href="#">
                  <svg width="152" height="52" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="lm-gr" x1="0" y1="0" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#1A466F"></stop>
                        <stop offset="100%" stop-color="#4D93D5"></stop>
                      </linearGradient>
                    </defs>
                    <rect x="1" y="1" width="105" height="50" rx="25" fill="#fff" stroke="url(#lm-gr)" stroke-width="1"></rect>
                    <text x="23%" y="65%" fill="url(&quot;#lm-gr&quot;)">ADD</text>
                  </svg>
                </a>
              </div>
            </div>
            <div className="lm-item-bottom"></div>
          </div>

          <div className="lm-item lm-item-4">
            <div className="lm-item-top"><span className="lm-item-title lm-underline">CUSTOM</span>
              <div className="lm-item-price"><span className="lm-real-price">&#8377;</span><output className="lm-real-price" id="custom-real-price"></output><br /><span>&#8377; </span><output type="text" id="custom-price" value="" ></output></div>
            </div>
            <div className="lm-item-body">
              <div className="lm-item-desc">
              </div>
              <div className="lm-item-list" id="catlist">
                <ul className="lm-item-list">
                  <li>Study Room<input type="checkbox" id="cat_1" className="check-box" price="449" /></li>
                  <li>Live Lectures <input type="checkbox" id="cat_2" className="check-box" price="449" /></li>
                  <li>Recorded Lectures<input type="checkbox" id="cat_2" className="check-box" price="449" /> </li>
                  <li>Conceptual Test<input type="checkbox" id="cat_3" className="check-box" price="449" /></li>
                  <li>Meme Cheatsheets,<br />Notes & Code Files<input type="checkbox" id="cat_4" className="check-box" price="349" /></li>
                  <li>Library<input type="checkbox" id="cat_5" className="check-box" price="449" /></li>
                  <li>Community Forum<input type="checkbox" id="cat_6" className="check-box" price="449" /></li>
                  <li>Doubt & Difficulty<input type="checkbox" id="cat_7" className="check-box" price="449" /></li>
                  <li>Mentors Connect<input type="checkbox" id="cat_8" className="check-box" price="449" /></li>
                  <li>Projects & certifications<input type="checkbox" id="cat_9" className="check-box" price="449" /></li>
                  <li>Euphoria 90 Days Subscription<input type="checkbox" id="cat_10" className="check-box" price="750" /></li>
                </ul>
              </div>
              <div className="lm-item-link">
                <a href="#" id="button_click">
                  <svg width="152" height="52" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="lm-gr-1" x1="0" y1="0" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#241326"></stop>
                        <stop offset="100%" stop-color="#85468C"></stop>
                      </linearGradient>
                    </defs>
                    <rect x="1" y="1" width="105" height="50" rx="25" fill="#fff" stroke="url(#lm-gr-1)" stroke-width="1"></rect>
                    <text id="Click" x="23%" y="65%" fill="url(&quot;#lm-gr-1&quot;)">ADD</text>
                  </svg>
                </a>
              </div>
            </div>
            <div className="lm-item-bottom"><span className="lm-underline"> </span></div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Pricing;
