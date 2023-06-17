import React from 'react';
import { Link } from 'react-router-dom';

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <h1>About me</h1>
      <p data-testid="p1">
        My name is Greg and I&apos;m a junior developer & a musician.
      </p>
      <p data-testid="p2">
        I&apos;ve recently completed Command Shift&apos;s Bootcamp course, and
        I&apos;m looking to pursue a career in software development!
      </p>
      <p data-testid="p3">
        I currently work as a teaching assistant in a primary school in Leeds. I
        moved to Leeds from Devon to study music at Leeds College of Music, and
        music is something that I&apos;m still very passionate about.
      </p>
      <p data-testid="p4">
        You can see what I&apos;ve been building by checking out my{' '}
        <Link to="/portfolio">portfolio</Link>{' '}
      </p>
      <p data-testid="p5">
        You can listen to the music projects I&apos;m working on, or have worked
        on, <Link to="/music">here</Link>
      </p>
      <p data-testid="p6">
        Or perhaps see what I&apos;ve been up to by looking at my{' '}
        <Link to="/photo-reel">photo reel</Link>
      </p>
      <p>
        Please don&apos;t hesitate to get in contact over GitHub, LinkedIn or
        E-Mail by using the links below!
      </p>
    </div>
  );
};

export default AboutMe;
