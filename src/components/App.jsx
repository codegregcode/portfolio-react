import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Land from './Land';
import MainMenu from './MainMenu';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Footer from './Footer';

import '../styles/app.css';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Land />} />
      <Route path="/menu" element={<MainMenu />} />
      <Route path="/about-me" element={<AboutMe />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
    <Footer />
  </div>
);

export default App;
