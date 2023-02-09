import React from "react";

// STYLE IMPORT
import classes from "./SearchBar.module.css";

// IMAGE IMPORTS
import SearchIcon from "../../assets/searchIcon.png";
import FilterIcon from "../../assets/filterIcon.png";

export default function SearchBar() {
  return (
    <div className={classes.SearchBar}>
      <img src={SearchIcon} alt="search" />
      <input type="text" name="search" autoComplete="off" placeholder="Search" />
      <img src={FilterIcon} alt="filter" />
    </div>
  );
}
