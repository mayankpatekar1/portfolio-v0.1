import React, { useRef } from "react";
import './NavBar.css';

import {FaAlignRight,FaEnvelope,FaLinkedin, FaInstagram} from 'react-icons/fa';

const NavBar = () => {
    const navRef = useRef();

    const showNavBar = () =>{
        navRef.current.classList.toggle("responsive-nav");
    }

  return (
    <nav>
      <div className="logo">Patekar<span></span></div>
      <div className="nav-bar" ref={navRef}>
        
          <div><a href="#home-section" onClick={showNavBar}>Home</a></div>
          <div><a href="#about-section" onClick={showNavBar}>About</a></div>
          <div><a href="#skills-section" onClick={showNavBar}>Skills</a></div>
          <div><a href="#project-section" onClick={showNavBar}>Projects</a></div>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}> x </button>
      </div>
      <div className="social-icons">
      <FaEnvelope className="nav-icon"/>
      <FaLinkedin className="nav-icon"/>
      <FaInstagram className="nav-icon"/>

        <button className="nav-btn" onClick={showNavBar}><FaAlignRight /></button>
      </div>
      
    </nav>
  );
};

export default NavBar;
