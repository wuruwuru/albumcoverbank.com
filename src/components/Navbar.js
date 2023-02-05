import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";


// STYLES
import "./Navbar.css";

// IMAGE IMPORT
import Logo from "../assets/logo.svg";

// mobile navbar icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Navbar() {
  // state to check if mobile navbar is open
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  // mobile navbar toggle on and off
  const showNav = () => {
    setIsNavExpanded(!isNavExpanded)
  }

  return (
    <>
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="cover bank logo" />
        </Link>
      </div>
      <nav className="desktop-navbar">
        <ul>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/cover-bank">Cover Bank</NavLink>
          </li>

          <li>
            <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/stories">Stories</NavLink>
          </li>

          <li>
            <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/about">About</NavLink>
          </li>
        </ul>
      </nav>

      {/* hamburger */}
      {isNavExpanded ? (
        //menu btn
        <FontAwesomeIcon className="icon hamburger" icon="fa fa-times" aria-hidden="true" onClick={() => { showNav() }} />
      ) : (
        <FontAwesomeIcon className="icon bars" icon="fa fa-bars" aria-hidden="true" onClick={() => { showNav() }} />
      )}

      {isNavExpanded &&
        <nav className="mobile-navbar">
          <ul>
            <li>
              <p> MENU </p>
            </li>
            <li>
              <NavLink to="/cover-bank" onClick={() => { showNav() }}>Cover Bank</NavLink>
            </li>

            <li>
              <NavLink to="/stories" onClick={() => { showNav() }}>Stories</NavLink>
            </li>

            <li>
              <NavLink to="/about" onClick={() => { showNav() }} >About</NavLink>
            </li>
          </ul>
        </nav>
      }
    </>
  );
}
