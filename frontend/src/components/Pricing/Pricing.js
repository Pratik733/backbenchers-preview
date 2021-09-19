import React from 'react';
import './Pricing.css'
import InfoIcon from '@material-ui/icons/Info';
import { Helmet } from 'react-helmet';

const Pricing = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Brainzeo | Pricing</title>
        <link rel="canonical" href="https://www.brainzeo.tech/pricing" />
      </Helmet>
      <div class="flex flex-wrap w-full mt-8 flex-col items-center text-center">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 ">1:1 Niche Development</h1>
        <div class="h-1 w-72 bg-cyan rounded"></div>
      </div>
      <div className="pricing-container">
        <div className="lm-tabel">
          <div className="lm-item lm-item-1">
            <div className="lm-item-top">
              {/* <div class="tooltip"><InfoIcon/>
              </div>
                <div class="tooltiptext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rerum numquam eveniet dolore dolorem nemo voluptatum officia consectetur provident ab. Aperiam deleniti id ut? Harum accusamus ipsam aliquid atque laudantium.</div> */}
              <div class="featured-ribbon">11% Off</div>
              <span className="lm-item-title lm-underline">CROWN</span>
              <div className="lm-item-price"><div className="lm-real-price">₹8500</div>₹7565<span className="only">/-</span></div><div className="perLecCost">₹169 per lecture</div>
            </div>
            <div className="lm-item-body">
              <ul className="lm-item-list">
                <li>Study Room<i className="icon-ok"></i></li>
                <li>Live & Recorded Lectures<i className="icon-ok"></i></li>
                <li>Conceptual Test<i className="icon-ok"></i></li>
                <li>Notes & Code Files<i className="icon-ok"></i></li>
                <li>Library<i className="icon-ok"></i></li>
                <li>Community Forum<i className="icon-ok"></i></li>
                <li>Doubt & Difficulty<i className="icon-ok"></i></li>
                <li>Mentors Connect<i className="icon-ok"></i></li>
                <li>Projects & certifications<i className="icon-ok"></i></li>
                <li>Euphoria 45 Days Subscription<i className="icon-ok"></i></li>

              </ul>
              <div className="lm-item-link">
                <a href="/" className="bn3637 bn36">Subscribe for 45 days</a>
              </div>
            </div>
            <div className="lm-item-bottom"></div>
          </div>
          <div className="lm-item lm-item-2">
            <div className="lm-item-top">
              <div class="featured-ribbon"><ul><li>20% OFF</li></ul></div>
              <span className="lm-item-title lm-underline">ACE</span>
              <div className="lm-item-price"><div className="lm-real-price">₹45000</div>₹40000<span className="only">/-</span></div><div className="perLecCost">₹445 per lecture</div>
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
                <a href="/" className="bn3637 bn36">Subscribe for 90 days</a>
              </div>
            </div>
            <div className="lm-item-bottom">Recommended</div>
          </div>
          <div className="lm-item lm-item-3">
            <div className="lm-item-top">
              <div class="featured-ribbon">10% Off</div>
              <span className="lm-item-title lm-underline">CONQUEROR</span>
              <div className="lm-item-price"><div className="lm-real-price">₹100000</div>₹90000<span className="only">/-</span></div><div className="perLecCost">₹500 per lecture</div>
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
                <li>Euphoria 180 Days Subscription<i className="icon-ok"></i></li>
              </ul>
              <div className="lm-item-link">
                <a href="/" className="bn3637 bn36">Subscribe for 180 days</a>
              </div>
            </div>
            <div className="lm-item-bottom"></div>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap w-full flex-col items-center text-center">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 ">GROUP OF 5</h1>
        <div class="h-1 w-32 bg-cyan rounded"></div>
      </div>

      <div className="pricing-container">
        <div className="lm-tabel">
          <div className="lm-item lm-item-1">
            <div className="lm-item-top">
              <div class="featured-ribbon">11% Off</div>
              <span className="lm-item-title lm-underline">CROWN</span>
              <div className="lm-item-price"><div className="lm-real-price">₹5000</div>₹4000<span className="only">/-</span><div className="text-sm">per student</div></div><div className="perLecCost">₹89 per lecture</div>
            </div>
            <div className="lm-item-body">
              <ul className="lm-item-list">
                <li>Study Room<i className="icon-ok"></i></li>
                <li>Live & Recorded Lectures<i className="icon-ok"></i></li>
                <li>Conceptual Test<i className="icon-ok"></i></li>
                <li>Notes & Code Files<i className="icon-ok"></i></li>
                <li>Library<i className="icon-ok"></i></li>
                <li>Community Forum<i className="icon-ok"></i></li>
                <li>Doubt & Difficulty<i className="icon-ok"></i></li>
                <li>Mentors Connect<i className="icon-ok"></i></li>
                <li>Projects & certifications<i className="icon-ok"></i></li>
                <li>Euphoria 45 Days Subscription<i className="icon-ok"></i></li>

              </ul>
              <div className="lm-item-link">
                <a href="/" className="bn3637 bn36">Subscribe for 45 days</a>
              </div>
            </div>
            <div className="lm-item-bottom"></div>
          </div>
          <div className="lm-item lm-item-2">
            <div className="lm-item-top">
              <div class="featured-ribbon">20% Off</div>
              <span className="lm-item-title lm-underline">ACE</span>
              <div className="lm-item-price"><div className="lm-real-price">₹20000</div>₹16000<span className="only">/-</span><div className="text-sm">per student</div></div><div className="perLecCost">₹178 per lecture</div>
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
                <a href="/" className="bn3637 bn36">Subscribe for 90 days</a>
              </div>
            </div>
            <div className="lm-item-bottom">Recommended</div>
          </div>
          <div className="lm-item lm-item-3">
            <div className="lm-item-top">
              <div class="featured-ribbon">20% Off</div>
              <span className="lm-item-title lm-underline">CONQUEROR</span>
              <div className="lm-item-price"><div className="lm-real-price">₹35000</div>₹28000<span className="only">/-</span><div className="text-sm">per student</div></div><div className="perLecCost">₹156 per lecture</div>
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
                <li>Euphoria 180 Days Subscription<i className="icon-ok"></i></li>
              </ul>
              <div className="lm-item-link">
                <a href="/" className="bn3637 bn36">Subscribe for 180 days</a>
              </div>
            </div>
            <div className="lm-item-bottom"></div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Pricing;