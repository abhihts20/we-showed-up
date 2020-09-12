import React from "react";
import { NavLink,Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link className="navbar-brand" to="/">
                WE SHOWED UP
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <NavLink exact className="nav-link" activeClassName="menu-active" to="/home">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink exact className="nav-link" activeClassName="menu-active" to="/about">
                      About
                    </NavLink>
                  </li>
              
                  <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="menu-active" to="/portfolio">
                      Portfolio
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="menu-active" to="/contact">
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
      </div>
    </>
  );
};

export default Navbar;
