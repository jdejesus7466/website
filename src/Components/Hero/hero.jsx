import React from 'react'
import './hero.css'
import heroImg from '../../assets/logo.png'

const hero = () => {

  /* Scrolling animations for going to the about me section */
  const handleScroll = () => {
    document.getElementById('about-me').scrollIntoView({ behavior: 'smooth' });
  };

  const handleResumeClick = () => {
    window.open('https://docs.google.com/document/d/14KCJIz-koIY2G0MHyioicH-Be_7mgoY7Er3cOgqGrbI/edit?usp=sharing', '_blank');
  };

  return (
    <div className='hero container'>
        <div className="heroText">
            <h1>Welcome to my Website!</h1>
            <p>Information and Pieces of Code from Joseph De Jesus</p>
            <button onClick={handleScroll} className='btn'>See More!<img src={heroImg} alt="" /></button>
            <button onClick={handleResumeClick} className='btn'>Resume</button>
        </div>
    </div>
  )
}

export default hero