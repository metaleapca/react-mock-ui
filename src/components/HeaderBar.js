import React from 'react';
import profilePic from '../assets/images/user-profile.svg';
import '../styles/HeaderBar.css';

const HeaderBar = () => {
  return (
    <div className="header-bar">
      <div className="user-profile">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <span className="username">John Doe</span>
        <div className="dropdown-menu">
          <button className="dropdown-button">▼</button>
          <div className="dropdown-content">
            <a href="/profile">Profile</a>
            <a href="/logout">Logout</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBar;
