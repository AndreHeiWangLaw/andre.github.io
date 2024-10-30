// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Make sure to import the footer CSS

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Grocery Flyer Deals. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
