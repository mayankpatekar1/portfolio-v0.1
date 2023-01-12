import React from 'react'
import './About.css';
import SectionHead from '../components/SectionHead'
import aboutImg from '../images/About-img.jpg'

const About = () => {
  return (
    <div id="about-section" className="container">
    <SectionHead text="About" />
    <span className="flex">
      <div className="about-img">
      <img src={aboutImg} alt="aboutimage"/>
      </div>
      <div className="about-text">
      I am <br />
      Mayank Umesh Patekar . Self motivated & active student Studing B.Sc. IT in Smt. Chandibai Mansukani College , Ulhasnagar East , which comes under Mumbai University .
      Interested in development in MERN Stack and done some courses from online platforms.
      Waiting for the apportunity to work as developer .  

      </div>
      </span>
    </div>
  )
}

export default About
