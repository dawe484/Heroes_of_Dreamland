import React, { Component } from 'react';

import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <header>
        {/* <!-- Navbar --> */}
        <div className="navbar-logo">
          <a href="/">Heroes of Dreamland</a>
        </div>
        <input type="checkbox" id="navbar-toggle" className="navbar-toggle" />
        <nav className="navbar-items">
          <ul>
            <li>
              <a href="#news">News</a>
            </li>
            <li>
              <a href="#game-info">Game Info</a>
            </li>
            <li>
              <a href="#media">Media</a>
            </li>
            <li className="push">
              <a href="">Sign Up</a>
            </li>
            <li>
              <a href="">Login</a>
            </li>
          </ul>
        </nav>
        <label htmlFor="navbar-toggle" className="navbar-toggle-label">
          <span />
          <span />
        </label>
        {/* <!-- //Navbar --> */}
      </header>
    );
  }
}

export default Navbar;
