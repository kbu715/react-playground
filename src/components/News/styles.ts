import styled from 'styled-components';
import { lineClamp } from '../../styles/utils';

export const NewsItemBlock = styled.div`
  display: flex;

  .thumbnail {
    margin-right: 1rem;

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
