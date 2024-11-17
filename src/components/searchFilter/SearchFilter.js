import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useFetchArtists } from "../../hooks/fetch";
import { Genre } from "../../data/Genre";

// STYLE IMPORT
import classes from "./SearchFilter.module.scss";
import { colourStyles } from "./SelectDropdownStyles";

// IMAGE IMPORT
import Close from "../../assets/closeIcon.webp";
import Logo from "../../assets/logo.svg";

export default function SearchFilter({
  setIsShowing,
  setSelectedOptions,
  capitalizeWord,
}) {
  const [artistFilter, setArtistFilter] = useState("");
  const [designerFilter, setDesignerFilter] = useState("");
  const { status: artistStatus, data: artists } = useFetchArtists(
    "Artists",
    artistFilter
  );
  const { status: designerStatus, data: designers } = useFetchArtists(
    "Designers",
    designerFilter
  );
  const [genreOptions, setGenreOptions] = useState("");
  const [selectedFilter, setSelectedFilter] = useState({
    artist: "",
    designer: "",
    year: "",
    genre: "",
  });

  // GENRE FILTER FUNCTIONALITY
  useEffect(() => {
    const arr = [];
    Genre.map((artist) => {
      return arr.push({
        value: artist,
        label: artist,
      });
    });
    setGenreOptions(arr);
  }, []);

  // RESET FUNCTIONALITY
  const handleReset = () => {
    setSelectedFilter({
      artist: "",
      designer: "",
      year: "",
      genre: "",
    });
  };

  // SUBMIT FUNCTIONALITY
  const handleSubmit = (e) => {
    e.preventDefault();
    setSelectedOptions({
      artist: selectedFilter.artist,
      designer: selectedFilter.designer,
      year: selectedFilter.year,
      genre: selectedFilter.genre,
    });
    setIsShowing(false);
  };

  return (
    <div className={classes.FilterContainer}>
      <form className={classes.FilterForm} onSubmit={(e) => handleSubmit(e)}>
        {/* HEADER */}
        <div className={classes.FormHeader}>
          <h4>FILTER</h4>
          <img
            src={Close}
            alt="close"
            onClick={() => {
              setIsShowing(false);
            }}
          />
        </div>

        {/* LOGO FOR MOBILE  */}
        <img className={classes.mobileLogo} src={Logo} alt="cover bank logo" />

        {/* BODY */}
        <div className={classes.FormBody}>
          {/* YEAR FILTER */}
          <label>
            <span>Year </span>
            <input
              className={classes.inputContainer}
              placeholder="Enter Value"
              type="number"
              value={selectedFilter.year || ""}
              onChange={(e) =>
                setSelectedFilter({ ...selectedFilter, year: e.target.value })
              }
            />
          </label>

          {/* GENRE FILTER */}
          <label>
            <span>Genre</span>
            <div className={classes.selectContainer}>
              <Select
                onChange={(e) =>
                  setSelectedFilter({ ...selectedFilter, genre: e?.label })
                }
                value={
                  selectedFilter.genre ? { label: selectedFilter.genre } : ""
                }
                options={genreOptions}
                isSearchable={true}
                placeholder="Select Genre"
                styles={colourStyles}
              />
            </div>
          </label>

          {/* ARTIST FILTER */}
          <label>
            <span>Artist </span>
            <div className={classes.selectContainer}>
              <Select
                onChange={(e) =>
                  setSelectedFilter({ ...selectedFilter, artist: e?.label })
                }
                placeholder="Select Artist"
                value={
                  selectedFilter.artist ? { label: selectedFilter.artist } : ""
                }
                options={artists}
                isLoading={artistStatus === "loading"}
                onInputChange={(value) =>
                  setArtistFilter(capitalizeWord(value))
                }
                styles={colourStyles}
              />
            </div>
          </label>

          {/* DESIGNER FILTER */}
          <label>
            <span>Designer </span>
            <div className={classes.selectContainer}>
              <Select
                onChange={(e) =>
                  setSelectedFilter({ ...selectedFilter, designer: e?.label })
                }
                options={designers}
                value={
                  selectedFilter.designer
                    ? { label: selectedFilter.designer }
                    : ""
                }
                isLoading={designerStatus === "loading"}
                onInputChange={(value) =>
                  setDesignerFilter(capitalizeWord(value))
                }
                placeholder="Select Designer"
                styles={colourStyles}
              />
            </div>
          </label>
        </div>

        {/* FILTER BUTTONS */}
        <div className={classes.FormButtons}>
          <div className={classes.resetBtn} onClick={handleReset}>
            RESET
          </div>
          <button className={classes.applyBtn}>APPLY</button>
        </div>
      </form>
    </div>
  );
}
