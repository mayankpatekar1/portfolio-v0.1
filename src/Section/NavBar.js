import React, { useRef } from "react";

const NavBar = () => {
    const navRef = useRef();

    const showNavBar = () =>{
        navRef.current.classList.toggle("responsive-nav");
    }

  return (
    <nav>
      <div className="logo">Patekar<span></span></div>
      <div className="nav-bar" ref={navRef}>
        
          <div>Home</div>
          <div>About</div>
          <div>Education</div>
          <div>Skills</div>
          <div>Projects</div>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}> x </button>
      </div>
      <div>
        icons

        <button className="nav-btn" onClick={showNavBar}>=</button>
      </div>
      
    </nav>
  );
};

export default NavBar;
