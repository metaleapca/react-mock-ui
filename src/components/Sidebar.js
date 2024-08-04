import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';
import logo from '../assets/images/logo2.svg';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navigation">
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/cost-overview">Cost Overview</Link>
        </li>
        <li>
          <Link to="/savings-plans">Savings Plans</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
