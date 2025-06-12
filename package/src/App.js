import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Pantry from './pages/Pantry';
import PublicPantryView from './pages/PublicPantryView';
import RestockRequest from './pages/RestockRequest';
import ConsumptionLogs from './pages/ConsumptionLogs';
import AdminDashboard from './pages/AdminDashboard';

const App = () => {
  return (
    <div>
      <nav style={{ padding: '1rem', background: '#eee' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/pantry" style={{ marginRight: '1rem' }}>Pantry</Link>
        <Link to="/view" style={{ marginRight: '1rem' }}>Public View</Link>
        <Link to="/restock" style={{ marginRight: '1rem' }}>Restock</Link>
        <Link to="/logs" style={{ marginRight: '1rem' }}>Consumption Logs</Link>
        <Link to="/admin">Admin</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pantry" element={<Pantry />} />
        <Route path="/view" element={<PublicPantryView />} />
        <Route path="/restock" element={<RestockRequest />} />
        <Route path="/logs" element={<ConsumptionLogs />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
};

export default App;
