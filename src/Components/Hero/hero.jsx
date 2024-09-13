import React from 'react'
import './hero.css'

const hero = () => {

  const handleResumeClick = () => {
    window.open('https://docs.google.com/document/d/1PT4ks29Q0zxmWw4plIZWjVBmGPWbZz73yMvoLbmRbsU/edit?usp=sharing', '_blank');
  };

  return (
    <div className='hero container'>
        <div className="heroText">
            <h1>Welcome to my Website!</h1>
            <p>Information and Pieces of Code from Joseph De Jesus</p>
            <button onClick={handleResumeClick} className='btn'>Resume</button>
        </div>
    </div>
  )
}

export default hero