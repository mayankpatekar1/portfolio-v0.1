import React from 'react'

const SkillBox = ({key,url,text}) => {
  return (
    <div className="skill-box" key={key}>
      <img src={url} alt="skilllogo" />
      <div className="skill-name">
      {text}
      </div>
      </div>
  )
}

export default SkillBox
