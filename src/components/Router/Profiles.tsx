import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Profiles: React.FC = () => {
  return (
    <div>
      <h3>사용자 리스트</h3>
      <ul>
        <li>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? 'blue' : '',
              };
            }}
            to="/profiles/paul"
          >
            paul의 프로필
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? 'blue' : '',
              };
            }}
            to="/profiles/gildong"
          >
            gildong의 프로필
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? 'blue' : '',
              };
            }}
            to="/profiles/unknown"
          >
            unknown의 프로필
          </NavLink>
        </li>
      </ul>
      <hr />
      <Outlet />
    </div>
  );
};

export default Profiles;
