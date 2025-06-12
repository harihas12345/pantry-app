import React, { useEffect, useState } from 'react';
import AddItemForm from '../forms/AddItemForm';
import PublicPantryView from './PublicPantryView';
import { GraphQLAPI, graphqlOperation } from '@aws-amplify/api-graphql';
import { listRestockRequests } from '../graphql/queries';

const AdminDashboard = ({ user, signOut }) => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const result = await GraphQLAPI.graphql(graphqlOperation(listRestockRequests));
        setRequests(result.data.listRestockRequests.items);
      } catch (err) {
        console.error("Error fetching restock requests", err);
      }
    };

    fetchRequests();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Welcome, {user?.username || 'Admin'} 👋</h2>
      <button onClick={signOut} style={{ marginBottom: '1rem' }}>Sign Out</button>

      <h3>Admin Pantry Dashboard</h3>
      <AddItemForm />

      <h3 style={{ marginTop: '2rem' }}>Restock Requests</h3>
      {requests.length === 0 ? (
        <p>No restock requests yet.</p>
      ) : (
        <ul>
          {requests.map((req) => (
            <li key={req.id}>
              🛒 {req.itemName} — Qty: {req.quantity} — Requested by: {req.requester || 'Unknown'}
            </li>
          ))}
        </ul>
      )}

      <h3 style={{ marginTop: '2rem' }}>Current Pantry Items</h3>
      <PublicPantryView />
    </div>
  );
};

export default AdminDashboard;
