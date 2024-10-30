// src/pages/Home.js
import React from 'react';

// pages
import { Link } from 'react-router-dom'; // Import Link

// layout
import Header from '../../components/layout/Header'; // Import the Header component
import Footer from '../../components/layout/Footer'; // Import the Footer component
import './Home.css'; // Import CSS for styling (create this file for your styles)

// assets
import groceryImage from '../../assets/images/grocery_icon.jpg'; // Import the image

const Home = () => {
    return (
      <div>
        <Header />
        <Link to="/grocery" className="grocery-link">
          <div className="grocery-square">
            <img
                src={groceryImage} // Use the imported image here
                alt="Grocery"
                className="grocery-image"
            />
          </div>
        </Link>
        <Footer />
      </div>
    );
  };

export default Home;
