import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import CostOverview from './pages/CostOverview';
import SavingsPlans from './pages/SavingsPlans';

const Routes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/services" element={<Services />} />
    <Route path="/cost-overview" element={<CostOverview />} />
    <Route path="/savings-plans" element={<SavingsPlans />} />
  </Routes>
);

export default Routes;
