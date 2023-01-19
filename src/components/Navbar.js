import React from "react";
import { Link } from "react-router-dom";

// STYLES
import "./Navbar.css";

// IMAGE IMPORT
import Logo from "../assets/logo.svg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li className="logo">
          <Link to="/">
            <img src={Logo} alt="cover bank logo" />
          </Link>
        </li>

        <li>
          <Link to="/cover-bank">Cover Bank</Link>
        </li>

        <li>
          <Link to="/stories">Stories</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
