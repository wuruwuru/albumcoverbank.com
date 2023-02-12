import React from "react";

// STYLE IMPORT
import classes from "./SearchBar.module.css";

// IMAGE IMPORT
import Close from "../../assets/close-icon.png";
import { useFetchArtists } from "../../hooks/fetch";

export default function SearchFilter() {
  const {status, data} =useFetchArtists()

  return (
    <div className={classes.FilterContainer}>
      <form className={classes.FilterForm}>

        {/* HEADER */}
        <div className={classes.FormHeader}>
          <h4>FILTER</h4>
          <img src={Close} alt="close" />
        </div>

        {/* BODY */}
        <div className={classes.FormBody}>
          <input type="text"/>
        </div>


      </form>
    </div>
  );
}
