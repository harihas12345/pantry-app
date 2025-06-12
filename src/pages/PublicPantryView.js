import React, { useEffect, useState } from 'react';
import { listPantryItems } from '../graphql/queries';
import { GraphQLAPI, graphqlOperation } from '@aws-amplify/api-graphql';
import PantryItemCard from '../components/PantryItemCard';

const PublicPantryView = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const result = await GraphQLAPI.graphql(graphqlOperation(listPantryItems));
        setItems(result.data.listPantryItems.items);
        console.log('Fetched items:', result.data.listPantryItems.items);

      } catch (err) {
        console.error('Error fetching pantry items:', err);
      }
    };
    fetchItems();
  }, []);

  return (
    <div>
      <h2>Shared Pantry Inventory</h2>
      {items.length === 0 ? (
        <p>No pantry items found.</p>
      ) : (
        items.map(item => <PantryItemCard key={item.id} item={item} />)
      )}
    </div>
  );

};

export default PublicPantryView;
