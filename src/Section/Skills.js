import React from 'react'
import './Skills.css'
import SectionHead from '../components/SectionHead'
// import aboutImg from '../images/About-img.jpg'
import SkillBox from '../components/SkillBox'
import data from "../data/skills.json"

const Skills = () => {
  return (
    <div id="skills-section" className="skill-section container">
      <SectionHead text="Skills" />
      <div className="skill-div">

      {
        data.skills.map(e => {
          return(

      <SkillBox key={e.key} url={e.url} text={e.text}/>
          )

        })
      }
      {/* <div className="skill-box">
      <img src={aboutImg} alt="skilllogo" />
      <div className="skill-name">
      HTML
      </div>
      </div>
      <div className="skill-box">
      <img src={aboutImg} alt="skilllogo" />
      <div className="skill-name">
      HTML
      </div>
      </div>
      <div className="skill-box">
      <img src={aboutImg} alt="skilllogo" />
      <div className="skill-name">
      HTML
      </div>
      </div>
      <div className="skill-box">
      <img src={aboutImg} alt="skilllogo" />
      <div className="skill-name">
      HTML
      </div>
      </div>
      <div className="skill-box">
      <img src={aboutImg} alt="skilllogo" />
      <div className="skill-name">
      HTML
      </div>
      </div> */}

      

      </div>
    </div>
  )
}

export default Skills
