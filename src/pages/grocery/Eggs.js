// src/pages/grocery/Eggs.js
import React from 'react';
import FlyerItems from '../../components/flyerItems/FlyerItems'; // Import the FlyerItems component

const Eggs = () => {
    // Set the search terms as an array
    const searchTerms = ["egg", "!frozen"];

    return (
        <div className="container"> {/* Add a container class for styling */}
            <FlyerItems searchTerms={searchTerms} /> {/* Pass the array of search terms to FlyerItems */}
        </div>
    );
};

export default Eggs;
