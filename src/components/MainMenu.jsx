import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/mainmenu.css';

const MainMenu = () => {
  return (
    <div className="menu-container">
      <h2>Greg C</h2>
      <p>
        I love creating things, solving problems and learning, and I&apos;m
        currently searching for a Junior Software Developer role.
      </p>
      <Link to="/about-me">
        <h3>About Me</h3>
      </Link>
      <Link to="/portfolio">
        <h3>Portfolio</h3>
      </Link>
      <Link to="/photo-reel">
        <h3>Photo Reel</h3>
      </Link>
      <Link to="/music">
        <h3>Music</h3>
      </Link>
    </div>
  );
};

export default MainMenu;
