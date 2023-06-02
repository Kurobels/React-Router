import React from 'react';
import { Link } from 'react-router-dom';
import './App3.css';
import imageSrc from './emgreg.jpg';

const Home = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="content-inner">
          <h1>Em-greg Tusi</h1>
          <p>Documentation</p>
          <Link to="/Page3" className="button">Next Page</Link>
        </div>
      </div>
      <div className="image">
        <img src={imageSrc} alt="Description of the image" />
      </div>
    </div>
  );
}

export default Home;
