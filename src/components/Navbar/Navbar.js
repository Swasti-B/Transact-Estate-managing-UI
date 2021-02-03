import React, { Component } from 'react';

import "./Navbar.css";
import { Link } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <nav id="top-nav">
         <h1>TRANSACT</h1>
        <ul className="nav-links">
          <Link to="/Home">
            <li>Home</li>
          </Link>
          <Link to="/About">
            <li>About</li>
          </Link>
          <Link to="/SignIn">
            <li>SignIn</li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default NavBar;