import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="brown darken-2 p1">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
            Last.Fm API
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/">Main page</Link>
            </li>
            <li>
              <Link to="/find">Find track</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
