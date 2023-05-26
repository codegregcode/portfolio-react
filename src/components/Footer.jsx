import React from 'react';
// import { Link } from 'react-router-dom';
// will use above for link to AboutMe or Portfolio
import '../styles/footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>Conditional Link</p>
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
