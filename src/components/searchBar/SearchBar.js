import React, { useState } from "react";

// STYLE IMPORT
import classes from "./SearchBar.module.css";

// IMAGE IMPORTS
import SearchIcon from "../../assets/searchIcon.webp";
import FilterIcon from "../../assets/filterIcon.webp";
import SearchFilter from "./SearchFilter";

export default function SearchBar({ setSearchTerm, setSelectedOptions }) {
  const [isShowing, setIsShowing] = useState(false);

  const capitalizeWord = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className={classes.SearchBar}>
      <img src={SearchIcon} alt="search" />
      <input
        type="text"
        name="search"
        autoComplete="off"
        placeholder="Search"
        onChange={(e) => setSearchTerm(capitalizeWord(e.target.value))}
      />
      <img src={FilterIcon} alt="filter" onClick={() => setIsShowing(true)} />

      {/* FILTER DROPDOWN */}
      {isShowing && (
        <SearchFilter
          setIsShowing={setIsShowing}
          setSelectedOptions={setSelectedOptions}
          capitalizeWord={capitalizeWord}
        />
      )}
    </div>
  );
}
