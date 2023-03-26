import React, { useEffect, useState } from "react";

// CSS IMPORT
import classes from "./CoverBank.module.scss";

// IMPORT COMPONENTS
import CoverGrid from "./CoverGrid";
import { useFetchAllCovers, useFetchSearch } from "../../hooks/fetch";
import SearchBar from "../../components/searchBar/SearchBar";

export default function CoverBank() {
  const [covers, setCovers] = useState([]);
  const [searchCovers, setSearchCovers] = useState([]);
  const [offset, setOffset] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOptions, setSelectedOptions] = useState({
    artist: "",
    designer: "",
    year: "",
    genre: "",
  });

  let pageSize = 15;

  // FETCH FROM ALL COVERS FROM AIRTABLE
  const { status, data: allCovers } = useFetchAllCovers(offset, pageSize, "");

  // FETCH SEARCH RESULTS
  const { data: allSearch } = useFetchSearch(
    offset,
    searchTerm,
    selectedOptions
  );

  useEffect(() => {
    // ADD SCROLL EVENT TO WINDOW AND SET OFFSET
    if (status === "success" && allCovers?.records.length > 1) {
      window.addEventListener("scroll", handleScroll);
      setSearchCovers(allSearch?.records);
      // SET INITIAL COVERS ONCE THE COMPONENT MOUNTS
      if (covers.length === 0) {
        setCovers(allCovers.records);
        setOffset(allCovers.offset);
      }
    }

    // CALLBACK FUNCTION
    return () => window.removeEventListener("scroll", handleScroll);
  }, [status, allCovers, allSearch]);

  // FUNCTION THAT FIRES ONCE THE USER GETS TO THE BOTTOM OF THE SCREEN
  const handleScroll = async () => {
    const isAtBottom =
      window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
    if (isAtBottom) {
      setOffset(allCovers.offset);
      setCovers([...covers, ...allCovers.records]);
    }
  };

  return (
    <div className={classes.CoverBank}>
      {status === "success" && (
        <>
          <div className={classes.CoverBankHeader}>
            <p>Explore Nigerian Album Covers</p>
            <h2>5246 Covers</h2>
          </div>

          <SearchBar
            setSearchTerm={setSearchTerm}
            setSelectedOptions={setSelectedOptions}
          />

          {!searchTerm &&
            !selectedOptions.designer &&
            !selectedOptions.artist &&
            !selectedOptions.year &&
            !selectedOptions.genre && <CoverGrid covers={covers} />}

          {/* FOR SEARCHING */}
          {(searchTerm ||
            selectedOptions.designer ||
            selectedOptions.artist ||
            selectedOptions.year ||
            selectedOptions.genre) && <CoverGrid covers={searchCovers} />}
        </>
      )}
    </div>
  );
}
