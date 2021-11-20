import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Profile from './Profile';

const Profiles: React.FC = () => {
  const { username } = useParams();

  return (
    <div>
      <h3>사용자 리스트</h3>
      <ul>
        <li>
          <Link to="/profiles/paul">paul의 프로필</Link>
        </li>
        <li>
          <Link to="/profiles/gildong">gildong의 프로필</Link>
        </li>
        <li>
          <Link to="/profiles/unknown">unknown의 프로필</Link>
        </li>
      </ul>
      <hr />
      {username && <Profile />}
    </div>
  );
};

export default Profiles;
