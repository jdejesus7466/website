import React from 'react'
import './aboutme.css'
import selfPortrait from '../../assets/me.jpg';

const aboutme = () => {
  return (
    <div id='about-me' className='aboutMe container'>
        <img src={selfPortrait} alt="" />
        <div className="aboutText"><h1>About Me!</h1>
            <p>
              My name is Joseph De Jesus and I am a Software Engineering student at Arizona State University 
              Polytechnic. I have been coding and programming for 8 years, and am proficient several programming langauges
              listed on my resume. Additionally, I am well versed in many frameworks, libraries, and suites.
            </p>
            <button className='btn'>See More!</button>
        </div>
    </div>
  )
}

export default aboutme