import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

// STYLES
import classes from "./Navbar.module.scss";

// IMAGE IMPORT
import Logo from "../../assets/logo.svg";

export default function Navbar() {
  return (
    <nav className={classes.Navbar}>
      <div className={classes.Logo}>
        <Link to="/">
          <img src={Logo} alt="cover bank logo" />
        </Link>
      </div>

      <ul>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${classes.active}` : `${classes.inactive}`
            }
            to="/"
          >
            Cover Bank
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${classes.active}` : `${classes.inactive}`
            }
            to="/about"
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
