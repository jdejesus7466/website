import React from 'react';
import './programs.css';
import programImg from '../../assets/logo.png';

const Programs = () => {
  return (
    <div className='programs'>
        <h1>Programs that I have made or contributed to.</h1>
        <div className="program">
            <p className='explanation'>Left</p>
            <img src={programImg} alt="Program 1" />
        </div>
        <div className="program">
            <img src={programImg} alt="Program 2" />
            <p className='explanation'>Right</p>
        </div>
        <div className="program">
            <p className='explanation'>Left</p>
            <img src={programImg} alt="Program 3" />
        </div>
        <div className="program">
            <img src={programImg} alt="Program 4" />
            <p className='explanation'>Right</p>
        </div>
    </div>
  );
}

export default Programs;