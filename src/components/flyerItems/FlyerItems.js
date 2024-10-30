// src/components/flyerItems/FlyerItems.js
import React, { useEffect, useState } from 'react';
import './FlyerItems.css'; // Import the CSS file for styling
import flyerItemsData from './flyer_items.json'; // Import the JSON data

const FlyerItems = () => {
    const [items, setItems] = useState(flyerItemsData); // Initialize state with imported JSON data

    // Render flyer items
    return (
        <div className="flyer-items">
            <h1>Flyer Items</h1>
            {items.length === 0 ? (
                <p>No items found.</p>
            ) : (
                items.map((item, index) => (
                    <div key={index} className="item">
                        <h2>{item.name || 'Unnamed Item'}</h2>
                        <p>Price: {item.price !== undefined ? item.price : 'N/A'}</p>
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
