import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png'; // 👈 adjust if your logo is here

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img src={logo} alt="CollabCode Logo" className="logo-img" />
        </Link>
      </div>
      <div className="navbar-right">
        <a
          href="https://github.com/sarahtoussaint/collab-ext"
          className="signup-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Use Now!
      </a>
  </div>
    </nav>
  );
}

export default Navbar;

