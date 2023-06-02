import React from 'react';
import { Link } from 'react-router-dom';
import './App1.css';
import imageSrc from './sebastian.jpg';

const Home = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="content-inner">
          <h1>Sebastian Wayne Ramirez</h1>
          <p>Design</p>
          <Link to="/Home" className="button">Next Page</Link>
        </div>
      </div>
      <div className="image">
        <img src={imageSrc} alt="Description of the image" />
      </div>
    </div>
  );
}

export default Home;
