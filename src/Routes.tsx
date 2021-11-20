import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/Router/Home';
import About from './components/Router/About';
import NotFound from './components/Router/NotFound';
import Profiles from './components/Router/Profiles';
import Profile from './components/Router/Profile';
import NewsList from './components/News/NewsList';

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
            <Link to="/news">News</Link>
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
        <Route path="/news" element={<NewsList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default RoutesComponent;
