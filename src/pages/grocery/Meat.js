// src/pages/grocery/Meat.js
import React from 'react';
import FlyerItems from '../../components/flyerItems/FlyerItems'; // Import the FlyerItems component

const Meat = () => {
    // Set the search terms as an array
    const searchTerms = [
        "meat", "chicken", "beef", "pork", 
        
        // !regex
        "!frozen", "!nuggets", "!ricardo", "!broth", "!brochettes", "!butter", "!stuffed"
    ];

    return (
        <div className="container"> {/* Add a container class for styling */}
            <FlyerItems searchTerms={searchTerms} /> {/* Pass the array of search terms to FlyerItems */}
        </div>
    );
};

export default Meat;
