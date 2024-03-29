import React, { lazy, Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/Router/Home';
// import About from './components/Router/About';
import NotFound from './components/Router/NotFound';
import Profiles from './components/Router/Profiles';
import Profile from './components/Router/Profile';
import News from './components/News';
import Color from './components/Color';
import LoginPage from './pages/LoginPage';
import Todo from './components/Todo';
import PostListPage from './pages/PostListPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import CounterIndex from './components/Counter';
import GithubProfileLoader from './containers/github/GithubProfileLoader';

const AboutPage = lazy(() => import('./components/Router/About'));

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
    <Suspense fallback={''}>
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
            <Link to="/todos">Todos</Link>
          </li>
          <li>
            <Link to="/colors">Colors</Link>
          </li>
          <li>
            <Link to="/news/">News</Link>
          </li>
          <li>
            <Link to="/github">Github Profile</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/blog/login">Login</Link>
          </li>
          <li>
            <Link to="/blog/register">Register</Link>
          </li>
          <li>
            <Link to="/blog/write">Write</Link>
          </li>
        </ul>
      </StyledNav>

      <hr />

      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="profiles" element={<Profiles />}>
          <Route path=":username" element={<Profile />} />
        </Route>
        <Route path="todos" element={<Todo />} />
        <Route path="colors" element={<Color />} />
        <Route path="counter" element={<CounterIndex />} />
        <Route path="news" element={<News />} />
        <Route path="news/:category" element={<News />} />
        <Route path="github" element={<GithubProfileLoader />} />
        <Route path="blog" element={<PostListPage />} />
        <Route path="blog/login" element={<LoginPage />} />
        <Route path="blog/register" element={<RegisterPage />} />
        <Route path="blog/write" element={<WritePage />} />
        <Route path="blog/@:username/:postId" element={<PostPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default RoutesComponent;
