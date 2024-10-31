// src/components/flyerItems/FlyerItems.js
import React, { useState } from 'react';
import './FlyerItems.css'; // Import the CSS file for styling
import flyerItemsData from './flyer_items.json'; // Import the JSON data

const FlyerItems = ({ searchTerms }) => {
    const [items] = useState(flyerItemsData); // Initialize state with imported JSON data

    // Filter items based on the search terms
    const filteredItems = searchTerms.length === 0 
        ? items // If no search terms, show all items
        : items.filter(item => 
            Array.isArray(searchTerms) && searchTerms.some(term => 
                new RegExp(`\\b${term}\\b`, 'i').test(item.name) // Use word boundaries with regex
            )
        );

    // Render flyer items
    return (
        <div className="flyer-items">
            {filteredItems.length === 0 ? (
                <p>No items found.</p>
            ) : (
                filteredItems.map((item, index) => (
                    <div key={index} className="item">
                        <h2>{item.name || 'Unnamed Item'}</h2>
                        <p>Price: {item.price !== undefined ? item.price : 'N/A'}</p>
                        <p>Store: {item.store_name !== undefined ? item.store_name : 'N/A'}</p>
                        <img 
                            src={item.cutout_image_url || ''} 
                            alt={item.name || 'Image'} 
                            style={{ maxWidth: '100%', height: 'auto' }} 
                        />
                    </div>
                ))
            )}
        </div>
    );
};

export default FlyerItems;
