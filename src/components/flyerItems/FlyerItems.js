import React, { useState } from 'react';
import './FlyerItems.css'; // Import the CSS file for styling
import flyerItemsData from './flyer_items.json'; // Import the JSON data

const FlyerItems = ({ searchTerms }) => {
    const [items] = useState(flyerItemsData); // Initialize state with imported JSON data

    const isNegated = (term) => term.startsWith('!');
    const isStoreTerm = (term) => term.startsWith('*');

    // Separate positive terms for items and stores
    const positiveTerms = searchTerms.filter(term => !isNegated(term));
    const itemTerms = positiveTerms.filter(term => !isStoreTerm(term) && !term.includes(','));
    const storeTerms = positiveTerms.flatMap(term => {
        if (isStoreTerm(term)) {
            return term.substring(1).trim(); // Remove the * and trim
        }
        return term.includes(',') ? term.split(',').map(t => t.trim()) : [];
    });

    const negativeTerms = searchTerms.filter(isNegated).map(term => term.replace('!', ''));

    const filteredItems = items.filter(item => {
        if (item.price === '') return false;

        const formattedName = item.name.trim();
        const storeName = item.store_name ? item.store_name.trim() : '';

        // Check if at least one item term matches formatted name
        const matchesItemTerms = itemTerms.length === 0 || itemTerms.some(term => {
            const regex = new RegExp(`\\b${term}`, 'i'); // Match the term as a whole word
            return regex.test(formattedName);
        });

        // Check if store terms are satisfied (only matches if a store term is specified)
        const matchesStoreTerms = storeTerms.length === 0 || storeTerms.some(term => {
            const regex = new RegExp(`\\b${term}`, 'i'); // Match the term as a whole word
            return regex.test(storeName);
        });

        // Check that all negative terms do not match
        const matchesNegativeTerms = negativeTerms.every(term => {
            const regex = new RegExp(`\\b${term}`, 'i'); // Match the term as a whole word
            return !regex.test(formattedName) && !regex.test(storeName);
        });

        // Ensure that item terms are satisfied, and if store terms are specified, they must match as well; negative terms are not matched
        return matchesItemTerms && matchesStoreTerms && matchesNegativeTerms;
    }).sort((a, b) => (parseFloat(a.price) || 0) - (parseFloat(b.price) || 0));

    return (
        <div className="flyer-items">
            {filteredItems.length === 0 ? (
                <p>No items found.</p>
            ) : (
                filteredItems.map((item, index) => {
                    const formattedName = item.name.trim();
                    const storeName = item.store_name ? item.store_name.trim() : 'N/A';
                    return (
                        <div key={index} className="item">
                            <h2>{formattedName}</h2>
                            <p>Price: ${parseFloat(item.price).toFixed(2)}</p>
                            <p>Store: {storeName}</p>
                            <img 
                                src={item.cutout_image_url || ''} 
                                alt={formattedName || 'Image'} 
                                style={{ maxWidth: '100%', height: 'auto' }} 
                            />
                        </div>
                    );
                })
            )}
        </div>
    );
};

export default FlyerItems;
