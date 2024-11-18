import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useFetchArtists } from "../../hooks/fetch";
import { Genre, ArtistList, DesignerList } from "../../data/Genre";

// STYLE IMPORT
import classes from "./SearchFilter.module.scss";
import { colourStyles } from "./SelectDropdownStyles";

// IMAGE IMPORT
import Logo from "../../assets/logo.svg";

export default function SearchFilter({ setSelectedOptions }) {
  const [artistFilter, setArtistFilter] = useState([]);
  const [designerFilter, setDesignerFilter] = useState([]);
  const [genreOptions, setGenreOptions] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState({
    artist: "",
    designer: "",
    year: "",
    genre: "",
  });

  // Initialize designer options
  useEffect(() => {
    const arr = DesignerList.map((designer) => ({
      value: designer,
      label: designer,
    }));
    setDesignerFilter(arr);
  }, []);

  // Initialize artist options
  useEffect(() => {
    const arr = ArtistList.map((artist) => ({
      value: artist,
      label: artist,
    }));
    setArtistFilter(arr);
  }, []);

  // Initialize genre options
  useEffect(() => {
    const arr = Genre.map((genre) => ({
      value: genre,
      label: genre,
    }));
    setGenreOptions(arr);
  }, []);

  const handleReset = () => {
    setSelectedFilter({
      artist: "",
      designer: "",
      year: "",
      genre: "",
    });
  };

  const handleSubmit = () => {
    setSelectedOptions({
      artist: selectedFilter.artist,
      designer: selectedFilter.designer,
      year: selectedFilter.year,
      genre: selectedFilter.genre,
    });
  };

  useEffect(() => {
    handleSubmit();
  }, [selectedFilter]);

  return (
    <div className={classes.FilterContainer}>
      <div className={classes.FilterForm}>
        {/* LOGO FOR MOBILE */}
        <img className={classes.mobileLogo} src={Logo} alt="cover bank logo" />

        {/* BODY */}
        <div className={classes.FormBody}>
          {/* DESIGNER FILTER */}
          <label>
            <div className={classes.selectContainer}>
              <Select
                onChange={(e) =>
                  setSelectedFilter({ ...selectedFilter, designer: e?.label })
                }
                placeholder="Designer"
                value={
                  selectedFilter.designer
                    ? {
                        label: selectedFilter.designer,
                        value: selectedFilter.designer,
                      }
                    : null
                }
                options={designerFilter}
                isSearchable={true}
                onInputChange={(value) => {
                  const filtered = DesignerList.filter((designer) =>
                    designer.toLowerCase().includes(value.toLowerCase())
                  ).map((designer) => ({ value: designer, label: designer }));
                  setDesignerFilter(filtered);
                }}
                styles={colourStyles}
              />
            </div>
          </label>

          {/* ARTIST FILTER */}
          <label>
            <div className={classes.selectContainer}>
              <Select
                onChange={(e) =>
                  setSelectedFilter({ ...selectedFilter, artist: e?.label })
                }
                placeholder="Artist"
                value={
                  selectedFilter.artist
                    ? {
                        label: selectedFilter.artist,
                        value: selectedFilter.artist,
                      }
                    : null
                }
                options={artistFilter}
                isSearchable={true}
                onInputChange={(value) => {
                  const filtered = ArtistList.filter((artist) =>
                    artist.toLowerCase().includes(value.toLowerCase())
                  ).map((artist) => ({ value: artist, label: artist }));
                  setArtistFilter(filtered);
                }}
                styles={colourStyles}
              />
            </div>
          </label>

          {/* GENRE FILTER */}
          <label>
            <div className={classes.selectContainer}>
              <Select
                onChange={(e) =>
                  setSelectedFilter({ ...selectedFilter, genre: e?.label })
                }
                value={
                  selectedFilter.genre
                    ? {
                        label: selectedFilter.genre,
                        value: selectedFilter.genre,
                      }
                    : null
                }
                options={genreOptions}
                isSearchable={true}
                placeholder="Genre"
                styles={colourStyles}
              />
            </div>
          </label>

          {/* YEAR FROM */}
          <label>
            <input
              className={classes.inputContainer}
              placeholder="Year"
              type="number"
              value={selectedFilter.year || ""}
              onChange={(e) =>
                setSelectedFilter({ ...selectedFilter, year: e.target.value })
              }
            />
          </label>

          {/* RESET */}
          <div className={classes.reset}>
            <p className={classes.resetButton} onClick={handleReset}>
              Reset
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
