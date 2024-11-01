// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <h1>Hei</h1>
          </Link>
        </div>

        {/* Dropdown Menu */}
        <div className="dropdown">
          <button className="dropdown-button">
            Tabs
          </button>

          <div className="dropdown-menu">
          <Link to="/" className="dropdown-item">
              Home
            </Link>
            <Link to="/grocery" className="dropdown-item">
              Grocery
            </Link>
            <Link to="/eggs" className="dropdown-item">
              Egg 
            </Link>
            <Link to="/meat" className="dropdown-item">
              Meat 
            </Link>
            <Link to="/veggies" className="dropdown-item">
              Veggies 
            </Link>
            <Link to="/jsonGenerator" className="dropdown-item">
              Json 
            </Link>
            {/* Add more project links as needed */}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
