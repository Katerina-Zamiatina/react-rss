import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <NavLink to="/" className="navLink">
          Main
        </NavLink>
        <NavLink to="/about" className="navLink">
          About
        </NavLink>
      </div>
    );
  }
}

export default Header;
