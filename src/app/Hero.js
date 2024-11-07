import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-text">
        <h1>I'm Bora Özkoç</h1>
      </div>
      <div className="middle-photo-container" >
        <img className="middle-photo"
          src="https://fastly.picsum.photos/id/811/200/200.jpg?hmac=aHZzO_yldxODDwFs6yO7fk8Mr1uZ7Mx2J-Ek188-rT4"       
        />
      </div>
      <div className="right-text">
        <h1>A SoftWare Engineer specialising</h1>
        <h1>in mobile development</h1>
      </div>
    </div>
  );
};

export default Hero;
