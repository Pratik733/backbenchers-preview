import React, { Component } from "react";
import "./Quadrangle.css";

const Quadrangle = () => {
  return (
    <div>
      <div className="quad">
        <div className="tip">
          <ul>
            <li>
              <input type="checkbox" />
              <div>C</div>
            </li>
            <li>
              <input type="checkbox" />
              <div>O</div>
            </li>
            <li>
              <input type="checkbox" />
              <div>M</div>
            </li>
            <li>
              <input type="checkbox" />
              <div>I</div>
            </li>
            <li>
              <input type="checkbox" />
              <div>N</div>
            </li>
            <li>
              <input type="checkbox" />
              <div>G</div>
            </li>
          </ul>
          <ul>
            <li>
              <input type="checkbox" />
              <div>S</div>
            </li>
            <li>
              <input type="checkbox" />
              <div>O</div>
            </li>
            <li>
              <input type="checkbox" />
              <div>O</div>
            </li>
            <li>
              <input type="checkbox" />
              <div>N</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Quadrangle;
