import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

// STYLE IMPORT
import classes from "./SearchBar.module.scss";

// IMAGE IMPORTS
import SearchIcon from "../../assets/searchIcon.webp";
import closeIcon from "../../assets/closeIcon.webp";
import filterIcon from "../../assets/sort.svg";
import SearchFilter from "../searchFilter/SearchFilter";
import MobileSearchFilter from "../mobileSearchFilter/MobileSearchFilter";

export default function SearchBar({ setSearchTerm, setSelectedOptions }) {
  const [inputValue, setInputValue] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const capitalizeWord = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setSearchTerm(capitalizeWord(value));
  };

  const handleClearInput = () => {
    setInputValue("");
    setSearchTerm("");
  };

  const toggleDrawer = () => {
    setIsDrawerOpen((prevState) => {
      if (!prevState) {
        window.scrollTo({
          top: window.scrollY + 400,
          behavior: "smooth",
        });
      }
      return !prevState;
    });
  };

  return (
    <div className={classes.SearchContainer}>
      <div className={classes.SearchBar}>
        <img src={SearchIcon} alt="search" />
        <input
          type="text"
          name="search"
          autoComplete="off"
          placeholder="Search"
          value={inputValue}
          onChange={handleInputChange}
        />
        <img
          src={closeIcon}
          alt="close"
          onClick={handleClearInput}
          style={{ cursor: "pointer", width: "10px", height: "10px" }}
        />
      </div>
      {/* FILTER DROPDOWN */}
      <SearchFilter
        setSelectedOptions={setSelectedOptions}
        capitalizeWord={capitalizeWord}
      />
      <div className={classes.mobileFilter}>
        <div className={classes.mobileFilterContainer} onClick={toggleDrawer}>
          <img src={filterIcon} alt="filter" />
          <p>Show Filters</p>
        </div>
      </div>
      {/* DRAWER COMPONENT */}
      <Drawer
        open={isDrawerOpen}
        onClose={toggleDrawer}
        direction="bottom"
        className={classes.customDrawer}
        size={500}
      >
        <MobileSearchFilter
          setSelectedOptions={setSelectedOptions}
          capitalizeWord={capitalizeWord}
        />
      </Drawer>
    </div>
  );
}
