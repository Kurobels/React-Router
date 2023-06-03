import React from 'react';
import { BrowserRouter as Router, NavLink, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import './App.css';

const App = () => {
  const isActive = (match, location) => {
    if (location.pathname === '/' || location.pathname === '/home') {
      return true;
    }
    return match;
  };

  return (
    <Router>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
          <NavLink exact to="/home" className="nav-link" activeClassName="active" isActive={(match, location) => {
  if (match) {
    return true;
  }
  return location.pathname === '/' || location.pathname === '/home';
}}>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/page1" className="nav-link" activeClassName="active">
              Page 1
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/page2" className="nav-link" activeClassName="active">
              Page 2
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/page3" className="nav-link" activeClassName="active">
              Page 3
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/page4" className="nav-link" activeClassName="active">
              Page 4
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
      </Routes>
    </Router>
  );
}

export default App;
