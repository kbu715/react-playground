import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { lineClamp } from '../../styles/utils';

export const NewsItemBlock = styled.div`
  display: flex;

  .thumbnail {
    margin-right: 1rem;

    &:hover {
      opacity: 0.5;
    }

    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }

  .contents {
    h2 {
      text-decoration: underline;

      &:hover {
        opacity: 0.4;
      }
      a {
        color: #000;
      }
    }

    p {
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
      ${lineClamp(3)};
    }
  }

  & + & {
    margin-top: 3rem;
  }
`;

export const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const CategoriesBlock = styled.nav`
  display: flex;
  padding: 1rem 0;
  width: 768px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

export const Category = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: nowrap;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #3bc8db;
  }

  &.active {
    font-weight: 600;
    border-bottom: 2px solid #22b8cf;
    color: #22b8cf;
    &:hover {
      color: #3bc8db;
    }
  }

  & + & {
    margin-left: 1rem;
  }
`;
