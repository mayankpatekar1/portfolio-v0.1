import React from "react"
import './SectionHead.css';

export default function SectionHead({text}){
    return(
        <div className="section-head">
        {text}
    <span className="section-head-underline"></span>
    </div>
    )
}