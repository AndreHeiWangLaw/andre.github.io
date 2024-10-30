// src/pages/grocery/Grocery.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import FlyerItems from '../../components/flyerItems/FlyerItems'; // Import the FlyerItems component

const Grocery = () => {
    return (
        <div>
            <h1>Grocery Page</h1>
            <Link to="/">Back to Home Page</Link> {/* Link to Home page */}
            <FlyerItems /> {/* Render FlyerItems component */}
        </div>
    );
};

export default Grocery;
