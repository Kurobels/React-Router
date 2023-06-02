import React from 'react';
import { Link } from 'react-router-dom';
import './App1.css';
import imageSrc from './jose.jpg';

const Home = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="content-inner">
          <h1>Jose Mari Solo</h1>
          <p>Programmer</p>
          <Link to="/Page4" className="button">Next Page</Link>
        </div>
      </div>
      <div className="image">
        <img src={imageSrc} alt="Description of the image" />
      </div>
    </div>
  );
}

export default Home;
