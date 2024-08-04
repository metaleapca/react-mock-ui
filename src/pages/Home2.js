import React from 'react';
import '../styles/Home2.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="row">
        <div className="diagram">
          <h3>Total Cost</h3>
          <div className="diagram-placeholder">[Total Cost Diagram]</div>
        </div>
        <div className="diagram">
          <h3>Total Estimate</h3>
          <div className="diagram-placeholder">[Total Estimate Diagram]</div>
        </div>
      </div>
      <div className="row">
        <div className="diagram">
          <h3>Actual Spendings</h3>
          <div className="diagram-placeholder">[Actual Spendings Diagram]</div>
        </div>
        <div className="diagram">
          <h3>Total Savings</h3>
          <div className="diagram-placeholder">[Total Savings Diagram]</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
