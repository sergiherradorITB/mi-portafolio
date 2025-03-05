import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PillTabs } from './PillTabs.jsx'; // Asegúrate de importar PillTabs

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="navbar">
        <div className="navbar-links">
          <PillTabs />  
        </div>
        <div className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}>
          <button onClick={toggleMenu}>☰</button>
          <div className="menu-content">
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
