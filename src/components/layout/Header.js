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
          <h1>My Logo</h1>
        </div>

        {/* Dropdown Menu */}
        <div className="dropdown">
          <button className="dropdown-button">
            Projects
          </button>

          <div className="dropdown-menu">
            <Link to="/grocery" className="dropdown-item">
              Grocery
            </Link>
            {/* Add more project links as needed */}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
