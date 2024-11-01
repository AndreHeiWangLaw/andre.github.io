import React, { useState } from 'react';

// Layout
import './JsonGenerator.css'; // Import the CSS file for styling

const JsonGenerator = () => {
    const [url, setUrl] = useState('');
    const [message, setMessage] = useState('');
    const [flyerItems, setFlyerItems] = useState([]);
    const [storeName, setStoreName] = useState('');

    const handleGenerateJson = async () => {
        if (!storeName) {
            setMessage("Please select a store before generating JSON."); // Prevent generating JSON if store not selected
            setTimeout(() => setMessage(''), 2000); // Clear message after 2 seconds
            return;
        }

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
                        store_name: storeName, // Store name is required at this point
                    }));

                    // Combine the new items with the existing items
                    setFlyerItems(prevItems => [...prevItems, ...updatedItems]); // Append new items to the existing state
                    setMessage(`Flyer items for ${storeName} have been added successfully.`);
                    setTimeout(() => setMessage(''), 2000); // Clear message after 2 seconds

                    // Clear the input field and reset dropdown after generating JSON
                    setUrl(''); // Reset URL input
                    setStoreName(''); // Reset store name dropdown
                } else {
                    setMessage(`Failed to fetch flyer items: ${response.status}`);
                    setTimeout(() => setMessage(''), 2000); // Clear message after 2 seconds
                }
            } catch (error) {
                setMessage(`Error: ${error.message}`);
                setTimeout(() => setMessage(''), 2000); // Clear message after 2 seconds
            }
        } else {
            setMessage("Invalid flyer URL.");
            setTimeout(() => setMessage(''), 2000); // Clear message after 2 seconds
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
            <h1>Generate Flyer JSON</h1>

            {/* Container for select and input fields */}
            <div className="input-container">
                <select
                    id="store-select"
                    value={storeName}
                    onChange={(e) => setStoreName(e.target.value)}
                >
                    <option value="">Select a store</option>
                    <option value="IGA">IGA</option>
                    <option value="Metro">Metro</option>
                    <option value="SuperC">SuperC</option>
                    <option value="Maxi">Maxi</option>
                </select>

                <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Enter flyer URL"
                    className="url-input" // Add a class for styling
                />
            </div>

            {/* New row for buttons */}
            <div className="button-container">
                <button onClick={() => window.open('https://flipp.com/en-ca/flyers/groceries?postal_code=J4W2S8', '_blank')}>
                    Find Flyer
                </button>

                <button onClick={handleGenerateJson}>Generate JSON</button>

                <button 
                    onClick={handleDownloadJson} 
                    disabled={flyerItems.length === 0} 
                    className={flyerItems.length === 0 ? 'disabled' : ''}>
                    Download JSON
                </button>
            </div>

            {message && <p className="message">{message}</p>} {/* Display message */}

        </div>
    );
};

export default JsonGenerator;
