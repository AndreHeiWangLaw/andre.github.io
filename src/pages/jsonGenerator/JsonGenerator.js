// src/pages/jsonGenerator/JsonGenerator.js
import React, { useState } from 'react';

// Layout
import Header from '../../components/layout/Header'; // Import the Header component
import Footer from '../../components/layout/Footer'; // Import the Footer component
import './JsonGenerator.css'; // Import the CSS file for styling

const JsonGenerator = () => {
    const [url, setUrl] = useState('');
    const [message, setMessage] = useState('');
    const [flyerItems, setFlyerItems] = useState([]); // State to hold fetched flyer items (initially an empty array)
    const [storeName, setStoreName] = useState(''); // State for selected store name

    const handleGenerateJson = async () => {
        const flyerIdMatch = url.match(/\/(\d+)-/);
        if (flyerIdMatch) {
            const flyerId = flyerIdMatch[1];
            const flyerItemsUrl = `https://flyers-ng.flippback.com/api/flipp/flyers/${flyerId}/flyer_items`;

            try {
                const response = await fetch(flyerItemsUrl);
                if (response.ok) {
                    const data = await response.json();
                    
                    // Add store_name to each item
                    const updatedItems = data.map(item => ({
                        ...item,
                        store_name: storeName, // Add the selected store name
                    }));

                    // Combine the new items with the existing items
                    setFlyerItems(prevItems => [...prevItems, ...updatedItems]); // Append new items to the existing state
                    setMessage(`Flyer items for ${storeName} have been added successfully.`);

                    // Clear the input field and reset dropdown after generating JSON
                    setUrl(''); // Reset URL input
                    setStoreName(''); // Reset store name dropdown
                } else {
                    setMessage(`Failed to fetch flyer items: ${response.status}`);
                }
            } catch (error) {
                setMessage(`Error: ${error.message}`);
            }
        } else {
            setMessage("Invalid flyer URL.");
        }
    };

    // Function to handle downloading the JSON file
    const handleDownloadJson = () => {
        if (flyerItems.length > 0) { // Check if there are any items to download
            const json = JSON.stringify(flyerItems, null, 2); // Pretty print JSON
            const blob = new Blob([json], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'flyer_items.json'; // Name of the downloaded file
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url); // Free up memory
        } else {
            alert("No data to download.");
        }
    };

    return (
        <div>
            <Header />
            <h1>Generate Flyer JSON</h1>

            <label htmlFor="store-select">Select Grocery Store:</label>
            <select
                id="store-select"
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)} // Update store name on selection
            >
                <option value="">Select a store</option>
                <option value="IGA">IGA</option>
                <option value="Metro">Metro</option>
                <option value="SuperC">SuperC</option>
            </select>

            <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter flyer URL"
            />
            <button onClick={handleGenerateJson}>Generate JSON</button>

            {message && <p className="message">{message}</p>} {/* Display success/error message */}
            {flyerItems.length > 0 && ( // Show download button only if there are items
                <button onClick={handleDownloadJson}>Download JSON</button>
            )}
            <Footer />
        </div>
    );
};

export default JsonGenerator;
