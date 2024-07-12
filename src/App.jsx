import React from 'react'
import Navbar from './Components/navbar/navbar'
import Hero from './Components/Hero/hero'
import Programs from './Components/programs/programs'
import AboutMe from './Components/abtMe/aboutme'
import Email from './Components/email/email'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <Programs/>
      <Email/>
    </div>
  )
}

export default App