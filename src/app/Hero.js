import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="middle-photo-container">
        <img className="middle-photo" src="/images/MainPhoto.png" />
      </div>
      <div className="hero-text">
        <div className="left-text">
          <h1>{"I'm Bora ÖZKOÇ"}</h1>
        </div>
        <div className="right-text">
          <h1>A Software Engineer specialising</h1>
          <h1>in mobile development</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
