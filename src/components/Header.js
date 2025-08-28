import React from 'react';
import { Link } from 'react-router-dom';

// Header component for navigation
const Header = () => (
  <header>
    <h1>Modern Car Showroom</h1>
    <nav>
      {/* Navigation links for main pages */}
      <Link to="/">Home</Link>
      <Link to="/cars">Cars</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  </header>
);

export default Header;
