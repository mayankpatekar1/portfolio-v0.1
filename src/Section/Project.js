import React from "react";
import img from "../images/About-img.jpg";
import SectionHead from "../components/SectionHead";
import "./Project.css"

const Project = () => {
  return (
    <div id="project-section" className="container">
      <SectionHead text="Projects" />
      <div className="row">
        <div className="col">
          <img src={img} alt="projectimg" />
        </div>
        <div className="col">
          <h1 className="project-head">Classic You</h1>
          <p className="project-desc">
            nsajnna skxmxak mkmk
            mkskskskskam kxmkzmxk masaksm aksm aks
          </p>
          <div>
            <button className="project-btn-1">See demo</button>
            <button className="project-btn-2">code</button>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <img src={img} alt="projectimg" />
        </div>
        <div className="col">
          <h1 className="project-head">Classic You</h1>
          <p className="project-desc">
          nsajnna skxmxak mkmk
            mkskskskskam kxmkzmxk masaksm aksm aks
          </p>
          <div>
            <button className="project-btn-1">See demo</button>
            <button className="project-btn-2">code</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Project;
