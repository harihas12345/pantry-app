import React, { useState } from "react";
import { generateClient } from 'aws-amplify/api';
import { createRestockRequest } from "../graphql/mutations";

const client = generateClient();

const RestockRequest = () => {
    const [itemName, setItemName] = useState("");
    const [reason, setReason] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await client.graphql({
                query: createRestockRequest,
                variables: {
                    input: {
                        itemName,
                        reason,
                        date: new Date().toISOString(),
                    },
                },
            });
            setItemName("");
            setReason("");
            alert("Request sent!");
        } catch (err) {
            console.error("Error submitting restock request:", err);
            alert("Something went wrong!");
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ padding: 20 }}>
            <h2>Request Pantry Restock</h2>
            <input value={itemName} onChange={e => setItemName(e.target.value)} placeholder="Item name" required /><br />
            <textarea value={reason} onChange={e => setReason(e.target.value)} placeholder="Why do you need it?" /><br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default RestockRequest;
