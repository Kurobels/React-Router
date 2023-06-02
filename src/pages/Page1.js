import React from 'react';
import { Link } from 'react-router-dom';
import './App2.css';
import imageSrc from './eug.jpg';

const Home = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="content-inner">
          <h1>Eugene Laureano</h1>
          <p>Leader</p>
          <Link to="/Page2" className="button">Next Page</Link>
        </div>
      </div>
      <div className="image">
        <img src={imageSrc} alt="Description of the image" />
      </div>
    </div>
  );
}

export default Home;
