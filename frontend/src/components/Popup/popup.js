import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./popup.css";
import betaphase from "../assets/images/betaphase2.gif";
import eureka from "../assets/images/eureka.gif";

export default () => (

  <div className="container">
    <Popup
      modal
      nested
      defaultOpen='true'
      closeOnDocumentClick= 'true'
      closeOnEscape='false'
      lockScroll='true'      
    >
      {(close) => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="modal-container">
            <div className="modal-1">
              <div className="header"> Beta Testing </div>
              <img src={betaphase} alt="" />
              <div className="content">
                {" "}
                Start your coding journey with our gamfication at just &#8377; 149
                only Also become a pro at solving complex mathematical problems
                within seconds, 
                <ul>
                  <li>
                  3+ Coding domains to start coding
                  </li>
                  <li>
                  Live lectures
                  </li>
                  <li>
                  Projects Workshops Games 
                  </li>
                  <li>
                  & Many More                    
                  </li>
                </ul>
                <p>
                Everything for just &#8377; 149
                </p>
              </div>
              <button className="btn"> <a href="https://pages.razorpay.com/combocor">Join Now</a></button>
            </div>
            <div className="modal-2">
              <div className="header">Eureka (Coming Soon)</div>
              <img src={eureka} alt="" />
              <div className="content">
                {" "}
              </div>
              <button className="btn"> <a href="/beta">Coming Soon</a></button>
            </div>
          </div>
        </div>
      )}
    </Popup>
  </div>
);
