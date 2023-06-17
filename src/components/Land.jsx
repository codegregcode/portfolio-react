import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/land.css';

const Land = () => {
  return (
    <div className="land-container">
      <Link to="/menu">
        <h1>Greg C</h1>
      </Link>
    </div>
  );
};

export default Land;
