import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/Router/Home';
import About from './components/Router/About';
import NotFound from './components/Router/NotFound';
import Profiles from './components/Router/Profiles';
import Profile from './components/Router/Profile';
import News from './components/News';
import Color from './components/Color';

const StyledNav = styled.nav`
  ul {
    display: flex;

    & li {
      display: block;
      margin-right: 10px;

      a {
        display: inline-block;
        padding: 10px 5px;
      }

      &:hover {
        background-color: #fff;
      }
    }
  }
`;

const RoutesComponent: React.FC = () => {
  return (
    <>
      <StyledNav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/profiles">Profiles</Link>
          </li>
          <li>
            <Link to="/colors">Colors</Link>
          </li>
          <li>
            <Link to="/news/">News</Link>
          </li>
        </ul>
      </StyledNav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/info" element={<About />} />
        <Route path="/profiles" element={<Profiles />}>
          <Route path=":username" element={<Profile />} />
        </Route>
        <Route path="/colors" element={<Color />} />
        <Route path="/news" element={<News />}>
          <Route path=":category" element={<News />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default RoutesComponent;
