import React from 'react'
import { Link } from 'react-scroll'
import "./TopContant.css";
import Resume from "../../assets/Mithushan_Resume.pdf"

const TopContant = () => {
  return (
    <div className='topContant'>
      <div className='topContant__container'>
        <h1>Mr.Mithushan Thavarasa</h1>
        <p>A Professional Web Designer and Developer</p>
        <a href={Resume} download="Mithushan_Resume.pdf">
            <button className='topContant__downloadButton'>Download CV</button>
        </a>
        <Link to="projects" smooth={true} duration={500}>
            <button className='topContant__workButton'>My Works</button>
        </Link>
      </div>
    </div>
  )
}

export default TopContant
