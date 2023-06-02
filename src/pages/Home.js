import React from 'react';
import { Link } from 'react-router-dom';
import './App1.css';
import imageSrc from './img2.png';

const Home = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="content-inner">
          <h1>Welcome to Our React Router</h1>
          <p>WE have 5 pages including this page</p>
          <Link to="/Page1" className="button">Next Page</Link>
        </div>
      </div>
      <div className="image">
        <img src={imageSrc} alt="Description of the image" />
      </div>
    </div>
  );
}

export default Home;