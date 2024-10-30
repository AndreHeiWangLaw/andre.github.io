// src/pages/Home.js
import React from 'react';

// pages
import { Link } from 'react-router-dom'; // Import Link

// layout
import './Home.css'; // Import CSS for styling (create this file for your styles)

// assets
import groceryImage from '../../assets/images/grocery_icon.jpg'; // Import the image
import jsonImage from '../../assets/images/json_icon.jpg'; // Import the image


const Home = () => {
    return (
      <div>
        <Link to="/grocery" className="page-link">
          <div className="page-square">
            <img
                src={groceryImage} // Use the imported image here
                alt="Grocery"
                className="page-image"
            />
          </div>
        </Link>
        <Link to="/jsonGenerator" className="page-link">
          <div className="page-square">
            <img
                src={jsonImage} // Use the imported image here
                alt="jsonGenerator"
                className="page-image"
            />
          </div>
        </Link>
      </div>
    );
  };

export default Home;
