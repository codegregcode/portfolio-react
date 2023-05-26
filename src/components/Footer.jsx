import React from 'react';
// import { Link } from 'react-router-dom';
// will use above for link to AboutMe or Portfolio
import '../styles/footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>Conditional Link</p>
      <p>
        <a href="https://github.com">GitHub</a>
      </p>
      <p>
        <a href="https://linkedin.com">LinkedIn</a>
      </p>
      <p>
        <a href="mailto:your-email@example.com">E-Mail Me</a>
      </p>
    </div>
  );
};

export default Footer;
