import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Our Web App!</h1>
      <p>This is the home page of our application. Here, you can find an overview of our services, explore cost options, and learn about our savings plans. Feel free to navigate through the sidebar to explore more.</p>
      <div className="section">
        <h2>About Us</h2>
        <p>Our web app is designed to provide comprehensive solutions for managing your tasks efficiently. We offer a range of services tailored to meet your needs, from basic management to advanced analytics.</p>
      </div>
      <div className="section">
        <h2>Features</h2>
        <ul>
          <li>Service Management</li>
          <li>Cost Analysis</li>
          <li>Savings Plan Customization</li>
        </ul>
      </div>
      <div className="section">
        <h2>Get Started</h2>
        <p>To get started, simply use the navigation menu to access the different sections of our app. Whether you're looking for detailed service information, cost breakdowns, or tailored savings plans, we have you covered.</p>
      </div>
    </div>
  );
};

export default Home;
