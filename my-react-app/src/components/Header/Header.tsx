import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <NavLink to="/" className="navLink">
          Main
        </NavLink>
        <NavLink to="/about" className="navLink">
          About
        </NavLink>
      </header>
    );
  }
}

export default Header;
