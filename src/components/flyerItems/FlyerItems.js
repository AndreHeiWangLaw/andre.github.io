// src/components/flyerItems/FlyerItems.js
import React, { useEffect, useState } from 'react';

// layout
import './FlyerItems.css'; // Import the CSS file for styling

// data
import flyerItemsData from './flyer_items.json'; // Import the JSON data

const FlyerItems = () => {
    const [items, setItems] = useState(flyerItemsData); // Initialize state with imported JSON data
    const [searchTerm, setSearchTerm] = useState(''); // State for the search term

    // Filter items based on the search term
    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Handle search input change
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // Render flyer items
    return (
        <div className="flyer-items">
            <input
                type="text"
                placeholder="Search items..."
                value={searchTerm}
                onChange={handleSearchChange} // Update search term on change
                className="search-input"
            />
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
