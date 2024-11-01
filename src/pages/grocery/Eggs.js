// src/pages/grocery/Eggs.js
import React, { useState } from 'react';
import FlyerItems from '../../components/flyerItems/FlyerItems'; // Import the FlyerItems component
import './Button.css'; // Import the CSS file

const Eggs = () => {
    // Set the initial search terms as an array
    const initialSearchTerms = [
        "egg", "oeuf", 
        // !regex
        "!frozen", "!surgelé"
    ];

    const [searchTerms, setSearchTerms] = useState(initialSearchTerms);

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
        <div className="container"> {/* Add a container class for styling */}
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

            <FlyerItems searchTerms={searchTerms} /> {/* Pass the updated array of search terms to FlyerItems */}
        </div>
    );
};

export default Eggs;
