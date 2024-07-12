import React from 'react'
import './hero.css'
import heroImg from '../../assets/logo.png'

const hero = () => {

  /* Scrolling animations for going to the about me section */
  const handleScroll = () => {
    document.getElementById('about-me').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='hero container'>
        <div className="heroText">
            <h1>Welcome to my Website!</h1>
            <p>Information and Pieces of Code from Joseph De Jesus</p>
            <button onClick={handleScroll} className='btn'>See More!<img src={heroImg} alt="" /></button>
        </div>
    </div>
  )
}

export default hero