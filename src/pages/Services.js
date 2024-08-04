import React from 'react';

const Services = () => {
  return (
    <div className="services">
      <h1>Our Services</h1>
      <p>
        We offer a wide range of services tailored to meet your needs. Explore the various options below and find the right solutions for you.
      </p>
      <div className="service-list">
        <div className="service-item">
          <h2>Service 1</h2>
          <p>
            Description of Service 1. This service provides comprehensive solutions for managing your tasks efficiently. It includes features such as task tracking, scheduling, and analytics.
          </p>
        </div>
        <div className="service-item">
          <h2>Service 2</h2>
          <p>
            Description of Service 2. This service focuses on cost management, offering detailed analysis and reporting to help you understand and optimize your expenses.
          </p>
        </div>
        <div className="service-item">
          <h2>Service 3</h2>
          <p>
            Description of Service 3. This service offers customized savings plans tailored to your specific needs, ensuring you get the best value for your investments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
