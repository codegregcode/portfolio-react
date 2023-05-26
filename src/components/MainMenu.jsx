import React from 'react';
import { Link } from 'react-router-dom';

const MainMenu = () => {
  return (
    <div>
      <Link to="/about-me">
        <h3>About Me</h3>
      </Link>
      <Link to="/portfolio">
        <h3>Portfolio</h3>
      </Link>
    </div>
  );
};

export default MainMenu;
