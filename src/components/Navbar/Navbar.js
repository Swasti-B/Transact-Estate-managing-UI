import React, { Component } from 'react';

import "./Navbar.css";

class NavBar extends Component {
  render() {
    return (
      <nav id="top-nav">
        <h1>Transact</h1>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>SignIn</li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;