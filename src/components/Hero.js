import React from "react";
import './Hero.css';
import heroimg from '../images/hero-img.png'

const Hero = () => {
  return (
    <div id="home-section" className="hero-section">
    
      <div className="hero-text">
        <h1 className="hero-head">
          Mayank <br />
          Patekar
        </h1>
        <h3 className="hero-para">
          Fresher B.Sc. IT student wants <br/>
          to work for better experience .
        </h3>
        <button className="hero-btn">Download CV</button>
      </div>

      <div className="hero-img">
      <img src={heroimg} alt="heroimg"/>
      
</div>
    </div>
  );
};

export default Hero;
