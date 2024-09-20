import React from 'react';
import './programs.css';
import practice from '../../assets/practive.jpg';
import programImg from '../../assets/logo.png';

const Programs = () => {
  return (
    <div className='programs'>
      <h1>Programs that I have made or contributed to.</h1>

      <div className="program">
        <div className="program-info">
          <h2>Swim Practice Maker</h2>
          <p className='explanation'>As a swim coach, it can be difficult to come up with practices while also visualizing the
            total distance and workouts. This website is programmed to make swim practices while also listing it down, and tracking
            the total distance of the sets.
          </p>
        </div>
        <a href="https://jdejesus7466.github.io/practice-designer/" target="_blank" rel="noopener noreferrer">
          <img src={practice} alt="Program 1" />
        </a>
      </div>

      <div className="program">
        <a href="https://example2.com" target="_blank" rel="noopener noreferrer">
          <img src={programImg} alt="Program 2" />
        </a>
        <div className="program-info">
          <h2>Weather App</h2>
          <p className='explanation'>A simple weather app that tracks the weather based on an inputted city.</p>
        </div>
      </div>
    </div>
  );
}

export default Programs;
