import React, { useState } from 'react';
import Navbar from './Components/navbar/navbar';
import Programs from './Components/programs/programs';
import AboutMe from './Components/abtMe/aboutme';
import HeroWithEmail from "./Components/HeroWithEmail";

const App = () => {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <HeroWithEmail />;
      case 'aboutMe':
        return <AboutMe />;
      case 'programs':
        return <Programs />;
      default:
        return <HeroWithEmail />;
    }
  };

  return (
    <div>
      <Navbar setActivePage={setActivePage} />
      {renderPage()}
    </div>
  );
};

export default App;
