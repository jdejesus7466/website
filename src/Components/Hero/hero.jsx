import React from 'react'
import './hero.css'

const hero = () => {

  const handleResumeClick = () => {
    window.open('https://docs.google.com/document/d/1PT4ks29Q0zxmWw4plIZWjVBmGPWbZz73yMvoLbmRbsU/edit?usp=sharing', '_blank');
  };

  const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/in/joseph-de-jesus-91880b264/', '_blank');
  };

  const handleGitHub = () => {
    window.open('https://github.com/jdejesus7466', '_blank');
  };
  

  return (
    <div className='hero container'>
        <div className="heroText">
            <h1>Welcome to my Website!</h1>
            <p>Information and Pieces of Code from Joseph De Jesus</p>
            <button onClick={handleResumeClick} className='btn'>Resume</button>
            <button onClick={handleLinkedIn} className='btn'>LinkedIn</button>
            <button onClick={handleGitHub} className='btn'>GitHub</button>
        </div>
    </div>
  )
}

export default hero