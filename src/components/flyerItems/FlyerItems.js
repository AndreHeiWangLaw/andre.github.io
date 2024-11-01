import React, { useState } from 'react';
import './FlyerItems.css'; // Import the CSS file for styling
import flyerItemsData from './flyer_items.json'; // Import the JSON data

const FlyerItems = ({ searchTerms }) => {
    const [items] = useState(flyerItemsData); // Initialize state with imported JSON data

    // Function to check if a term is negated (starts with "!")
    const isNegated = (term) => term.startsWith('!');

    // Separate the search terms into positive and negative terms
    const positiveTerms = searchTerms.filter(term => !isNegated(term));
    const negativeTerms = searchTerms.filter(isNegated);

    // Filter items based on the search terms
    let filteredItems = items.filter(item => {
        // Filter out items with no price
        if (item.price === '') {
            return false;
        }

        // Check positive terms using .some() (should match any positive term)
        const matchesPositiveTerms = positiveTerms.length === 0 || 
            positiveTerms.some(term => new RegExp(`\\b${term}\\b`, 'i').test(item.name));

        // Check negative terms using .every() (should not match any negative term)
        const matchesNegativeTerms = negativeTerms.every(term => 
            !new RegExp(`\\b${term.replace('!', '')}\\b`, 'i').test(item.name)
        );

        // Return true if the item matches both positive and negative conditions
        return matchesPositiveTerms && matchesNegativeTerms;
    });

    // Sort items by ascending price order
    filteredItems = filteredItems.sort((a, b) => {
        const priceA = parseFloat(a.price) || 0; // Convert price to number, default to 0 if invalid
        const priceB = parseFloat(b.price) || 0; // Convert price to number, default to 0 if invalid
        return priceA - priceB;
    });

    // Render flyer items
    return (
        <div className="flyer-items">
            {filteredItems.length === 0 ? (
                <p>No items found.</p>
            ) : (
                filteredItems.map((item, index) => (
                    <div key={index} className="item">
                        <h2>{item.name || 'Unnamed Item'}</h2>
                        <p>Price: {`$${parseFloat(item.price).toFixed(2)}`}</p>
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
