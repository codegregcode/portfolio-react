import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Land from './Land';
import MainMenu from './MainMenu';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Footer from './Footer';
import PhotoReel from './PhotoReel';
import Music from './Music';

import '../styles/app.css';

const App = () => {
  const location = useLocation();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Land />} />
        <Route path="/menu" element={<MainMenu />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/photo-reel" element={<PhotoReel />} />
        <Route path="/music" element={<Music />} />
      </Routes>
      <Footer currentLocation={location.pathname} />
    </div>
  );
};

export default App;
