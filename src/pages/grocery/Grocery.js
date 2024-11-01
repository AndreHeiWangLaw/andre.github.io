// src/pages/grocery/Grocery.js
import React, { useState } from 'react';
import FlyerItems from '../../components/flyerItems/FlyerItems'; // Import the FlyerItems component
import './Grocery.css'; // Import the CSS file for Grocery

const Grocery = () => {
    const [searchTerm, setSearchTerm] = useState(''); // State for the search term
    const [searchTerms, setSearchTerms] = useState([]); // State for the search terms

    // Handle search input change
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // Split the searchTerm into an array of search terms
    const handleSearchSubmit = () => {
        const terms = searchTerm.split(',').map(term => term.trim()).filter(term => term);
        setSearchTerms(terms); // Update searchTerms with the new terms
    };

    // Handle store filter logic
    const handleStoreFilter = (storeName) => {
        const filterTerm = `*${storeName}`;

        // Check if the filter term is already in the searchTerms
        if (!searchTerms.includes(filterTerm)) {
            // Add the filter term to the searchTerms
            setSearchTerms((prevTerms) => [...prevTerms, filterTerm]);
        } else {
            // Remove the filter term if it already exists
            setSearchTerms((prevTerms) => prevTerms.filter(term => term !== filterTerm));
        }
    };

    const stores = ['Iga', 'Metro', 'Maxi', 'SuperC']; // Define the store names

    return (
        <div className="container"> {/* Add the container class for styling */}
            <input
                type="text"
                placeholder="Search items (separate with commas)..."
                value={searchTerm}
                onChange={handleSearchChange} // Update search term on change
                className="search-input"
                onBlur={handleSearchSubmit} // Update search terms on input blur
            />
            <div className="filter-buttons">
                {stores.map(store => (
                    <button
                        key={store}
                        className={searchTerms.includes(`*${store}`) ? 'active' : ''}
                        onClick={() => handleStoreFilter(store)}
                    >
                        {store}
                    </button>
                ))}
            </div>
            <FlyerItems searchTerms={searchTerms} /> {/* Pass the array of search terms to FlyerItems */}
        </div>
    );
};

export default Grocery;
