import React from 'react'
import './navbar.css'
import logo from '../../assets/t1.png'

const navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt="" className='logo'/>
        <ul>
            <li>Home</li>
            <li>About Me</li>
            <li>Programs</li>
            <li>My Information</li>
            <li>
              <button className='btn'>
                Contact Me
              </button>
            </li>
        </ul>
    </nav>
  )
}

export default navbar