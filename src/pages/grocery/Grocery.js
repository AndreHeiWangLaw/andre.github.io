// src/pages/grocery/Grocery.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import FlyerItems from '../../components/flyerItems/FlyerItems'; // Import the FlyerItems component

// layout
import Header from '../../components/layout/Header'; // Import the Header component
import Footer from '../../components/layout/Footer'; // Import the Footer component

const Grocery = () => {
    return (
        <div>
            <FlyerItems /> {/* Render FlyerItems component */}
        </div>
    );
};

export default Grocery;
