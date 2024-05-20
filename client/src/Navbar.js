// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-brand">TakeOff</Link>
      </div>
      <div className="navbar-right">
        <Link to="/home">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/tour">Tour</Link>
        <Link to="/packages">Packages</Link>
        <Link to="/adminpage">AdminPage</Link>
        
        
      </div>
    </nav>
  );
};

export default Navbar;
