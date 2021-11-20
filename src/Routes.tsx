import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Router/Home';
import About from './components/Router/About';
import Profile from './components/Router/Profile';
const RoutesComponent: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/profile/paul">paul의 프로필</Link>
        </li>
        <li>
          <Link to="/profile/gildong">gildong의 프로필</Link>
        </li>
        <li>
          <Link to="/profile/someone">someone의 프로필</Link>
        </li>
      </ul>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/info" element={<About />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </nav>
  );
};

export default RoutesComponent;
