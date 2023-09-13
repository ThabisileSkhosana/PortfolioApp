import React from 'react'
import './About.css';
import AboutMe from '../About/AboutMe'
import DetailsAboutMe from './DetailsAboutMe';
import LearnMore from './LearnMore'
const About =() => {
return (
    <div>
      <h1 className='intro'>Hi, I am <span style={{color:'green'}}>Thabisile</span></h1>
      <AboutMe/>
      <DetailsAboutMe/>
      <LearnMore/>
    </div>
  )
}

export default About




