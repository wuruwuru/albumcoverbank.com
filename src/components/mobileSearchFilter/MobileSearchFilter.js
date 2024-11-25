import React, { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Select from "react-select";
import { Genre, ArtistList, DesignerList, Years } from "../../data/Genre";

import classes from "./MobileSearchFilter.module.scss";
import { colourStyles } from "./SelectDropdownStyles";

const MobileSearchFilter = ({ setSelectedOptions }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const designerOptions = useMemo(
    () =>
      DesignerList.map((designer) => ({ value: designer, label: designer })),
    []
  );

  const artistOptions = useMemo(
    () => ArtistList.map((artist) => ({ value: artist, label: artist })),
    []
  );

  const genreOptions = useMemo(
    () => Genre.map((genre) => ({ value: genre, label: genre })),
    []
  );

  const yearOptions = useMemo(
    () => Years.map((year) => ({ value: year, label: year })),
    []
  );

  const getParam = (key, fallback = "") => searchParams.get(key) || fallback;

  const selectedFilter = useMemo(
    () => ({
      artist: getParam("artist"),
      designer: getParam("designer"),
      year: getParam("year"),
      genre: getParam("genre"),
    }),
    [searchParams]
  );

  const updateFilter = (key, value) => {
    const newParams = { ...Object.fromEntries(searchParams.entries()) };
    if (value) {
      newParams[key] = value;
    } else {
      delete newParams[key];
    }
    setSearchParams(newParams);
  };

  useEffect(() => {
    setSelectedOptions(selectedFilter);
  }, [selectedFilter, setSelectedOptions]);

  const handleReset = () => {
    setSearchParams({});
  };
  return (
    <div className={classes.FilterContainer}>
      <div className={classes.headTag}>
        <p>Filter</p>
      </div>
      <div className={classes.FilterForm}>
        <div className={classes.FormBody}>
          {/* DESIGNER FILTER */}
          <label>
            <div className={classes.selectContainer}>
              <Select
                onChange={(e) => updateFilter("designer", e?.value)}
                placeholder="Designer"
                value={
                  selectedFilter.designer
                    ? {
                        value: selectedFilter.designer,
                        label: selectedFilter.designer,
                      }
                    : null
                }
                options={designerOptions}
                isSearchable={true}
                styles={colourStyles}
                isClearable={true}
              />
            </div>
          </label>

          {/* ARTIST FILTER */}
          <label>
            <div className={classes.selectContainer}>
              <Select
                onChange={(e) => updateFilter("artist", e?.value)}
                placeholder="Artist"
                value={
                  selectedFilter.artist
                    ? {
                        value: selectedFilter.artist,
                        label: selectedFilter.artist,
                      }
                    : null
                }
                options={artistOptions}
                isSearchable={true}
                styles={colourStyles}
                isClearable={true}
              />
            </div>
          </label>

          {/* GENRE FILTER */}
          <label>
            <div className={classes.selectContainer}>
              <Select
                onChange={(e) => updateFilter("genre", e?.value)}
                placeholder="Genre"
                value={
                  selectedFilter.genre
                    ? {
                        value: selectedFilter.genre,
                        label: selectedFilter.genre,
                      }
                    : null
                }
                options={genreOptions}
                isSearchable={true}
                styles={colourStyles}
                isClearable={true}
              />
            </div>
          </label>

          {/* YEAR FILTER */}
          <label>
            <div className={classes.selectContainer}>
              <Select
                onChange={(e) => updateFilter("year", e?.value)}
                placeholder="Year"
                value={
                  selectedFilter.year
                    ? {
                        value: selectedFilter.year,
                        label: selectedFilter.year,
                      }
                    : null
                }
                options={yearOptions}
                isSearchable={true}
                styles={colourStyles}
                isClearable={true}
              />
            </div>
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
};

export default MobileSearchFilter;
