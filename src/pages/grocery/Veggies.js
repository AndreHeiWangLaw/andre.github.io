// src/pages/grocery/Veggies.js
import React from 'react';
import FlyerItems from '../../components/flyerItems/FlyerItems'; // Import the FlyerItems component

const Veggies = () => {
    // Set the search terms as an array
    const searchTerms = ['lettuce', 'apple']; 

    return (
        <div className="container"> {/* Add a container class for styling */}
            <FlyerItems searchTerms={searchTerms} /> {/* Pass the array of search terms to FlyerItems */}
        </div>
    );
};

export default Veggies;
