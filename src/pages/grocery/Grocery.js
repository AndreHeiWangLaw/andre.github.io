// src/pages/grocery/Grocery.js
import React, { useState } from 'react';
import FlyerItems from '../../components/flyerItems/FlyerItems'; // Import the FlyerItems component
import './Grocery.css'; // Import the CSS file for Grocery

const Grocery = () => {
    const [searchTerm, setSearchTerm] = useState(''); // State for the search term

    // Handle search input change
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="container"> {/* Add the container class for styling */}
            <input
                type="text"
                placeholder="Search items..."
                value={searchTerm}
                onChange={handleSearchChange} // Update search term on change
                className="search-input"
            />
            <FlyerItems searchTerm={searchTerm} /> {/* Pass the search term to FlyerItems */}
        </div>
    );
};

export default Grocery;
