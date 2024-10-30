// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Link to="/grocery">Go to Grocery Page</Link> {/* Link to Grocery page */}
    </div>
  );
};

export default Home;
