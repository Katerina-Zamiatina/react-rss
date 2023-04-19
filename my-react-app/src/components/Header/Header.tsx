import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <NavLink to="/" className="navLink">
        Main
      </NavLink>
      <NavLink to="/about" className="navLink">
        About
      </NavLink>
      <NavLink to="/form" className="navLink">
        Form
      </NavLink>
    </header>
  );
};

export default Header;
