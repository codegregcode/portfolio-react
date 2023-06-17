import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/app.css';

const Footer = ({ currentLocation }) => {
  const getConditionalLink = () => {
    if (currentLocation === '/about-me') {
      return (
        <>
          <Link to="/portfolio">Portfolio</Link>{' '}
          <Link to="/photo-reel">Photo Reel</Link>{' '}
          <Link to="/music">Music</Link>
        </>
      );
    }
    if (currentLocation === '/portfolio') {
      return (
        <>
          <Link to="/about-me">About Me</Link>{' '}
          <Link to="/photo-reel">Photo Reel</Link>{' '}
          <Link to="/music">Music</Link>
        </>
      );
    }
    if (currentLocation === '/music') {
      return (
        <>
          <Link to="/portfolio">Portfolio</Link>{' '}
          <Link to="/about-me">About Me</Link>{' '}
          <Link to="/photo-reel">Photo Reel</Link>{' '}
        </>
      );
    }
    if (currentLocation === '/photo-reel') {
      return (
        <>
          <Link to="/portfolio">Portfolio</Link>{' '}
          <Link to="/about-me">About Me</Link> <Link to="/music">Music</Link>{' '}
        </>
      );
    }
    return null;
  };

  return (
    <div className="footer-container">
      {getConditionalLink()}
      <p>
        <a
          href="https://github.com/codegregcode"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </p>
      <p>
        <a
          href="https://www.linkedin.com/in/greg-cain/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </p>
      <p>
        <a href="mailto:codegregcode@gmail.com">E-Mail Me</a>
      </p>
    </div>
  );
};

export default Footer;
