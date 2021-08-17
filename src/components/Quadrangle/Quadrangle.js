import React, { Component } from "react";
import "./Quadrangle.css";
import quad from  '../assets/images/quad.mp4'

const Quadrangle = () => {
  return (
    <div>
      <div className="quad">
      <video src={quad} autoplay="true" />
      </div>
    </div>
  );
};

export default Quadrangle;
