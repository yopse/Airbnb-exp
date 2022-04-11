import React from "react";
import heroimg from "../images/photo-grid.png";

const Hero = () => {
  return (
    <div className="hero-box">
      <img className="hero-img" alt="error" src={heroimg} />
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts-all
        without leaving home.
      </p>
    </div>
  );
};

export default Hero;
