import React from 'react';
import profilePic from '../assets/images/user-profile.svg';
import './UserProfile.css';

const UserProfile = () => {
  return (
    <div className="user-profile">
      <div className="profile-header">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <h1 className="username">John Doe</h1>
      </div>
      <div className="profile-details">
        <p><strong>Email:</strong> john.doe@example.com</p>
        <p><strong>Member Since:</strong> January 2021</p>
        <p><strong>Bio:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
      </div>
      <div className="profile-actions">
        <button className="btn">Edit Profile</button>
        <button className="btn">Logout</button>
      </div>
    </div>
  );
};

export default UserProfile;
