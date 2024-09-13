import React from 'react';
import './navbar.css';

const Navbar = ({ setActivePage }) => {
  return (
    <nav>
      <ul>
        <li><button onClick={() => setActivePage('home')}>Home</button></li>
        <li><button onClick={() => setActivePage('aboutMe')}>About Me</button></li>
        <li><button onClick={() => setActivePage('programs')}>Programs</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
