import React from 'react';
import AddItemForm from '../forms/AddItemForm';
import PublicPantryView from './PublicPantryView';

const AdminDashboard = () => (
  <div>
    <h2>Admin Pantry Dashboard</h2>
    <AddItemForm />
    <PublicPantryView />
  </div>
);

export default AdminDashboard;
