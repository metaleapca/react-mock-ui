import './styles/index.css';
import React from 'react';
import Sidebar from './components/Sidebar';
import HeaderBar from './components/HeaderBar';
import Home from './pages/Home2';
// import Services from './pages/Services';
// import CostOverview from './pages/CostOverview';
// import SavingsPlans from './pages/SavingsPlans';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="main-content">
          <HeaderBar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/services" component={Services} />
              <Route path="/cost-overview" component={CostOverview} />
              <Route path="/savings-plans" component={SavingsPlans} /> */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
