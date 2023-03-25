import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useFetchArtists } from "../../hooks/fetch";
import { Genre } from "../../data/Genre";

// STYLE IMPORT
import classes from "./SearchBar.module.css";

// IMAGE IMPORT
import Close from "../../assets/closeIcon.webp";

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
  const [genreFilter, setGenreFilter] = useState("");

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

  return (
    <div className={classes.FilterContainer}>
      <form className={classes.FilterForm}>
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

        {/* BODY */}
        <div className={classes.FormBody}>
          {/* YEAR FILTER */}
          <label>
            <span>Year </span>
            <input
              type="number"
              onChange={(e) =>
                setSelectedOptions((prev) => {
                  return { ...prev, year: e.target.value };
                })
              }
            />
          </label>

          {/* ARTIST FILTER */}
          <label>
            <span>Artist </span>
            <Select
              // onChange={handleChange}
              onChange={(e) =>
                setSelectedOptions((prev) => {
                  return { ...prev, artist: e?.label };
                })
              }
              options={artists}
              isClearable={true}
              isLoading={artistStatus === "loading"}
              onInputChange={(value) => setArtistFilter(capitalizeWord(value))}
              placeholder="Select Artist"
            />
          </label>

          {/* GENRE FILTER */}
          <label>
            <span>Genre</span>
            <Select
              // onChange={handleChange}
              onChange={(e) =>
                setSelectedOptions((prev) => {
                  return { ...prev, genre: e?.label };
                })
              }
              options={genreOptions}
              isClearable={true}
              isSearchable={true}
              placeholder="Select Genre"
            />
          </label>

          {/* DESIGNER FILTER */}
          <label>
            <span>Designer </span>
            <Select
              // onChange={handleChange}
              onChange={(e) =>
                setSelectedOptions((prev) => {
                  return { ...prev, designer: e?.label };
                })
              }
              options={designers}
              isClearable={true}
              isLoading={designerStatus === "loading"}
              onInputChange={(value) =>
                setDesignerFilter(capitalizeWord(value))
              }
              placeholder="Select Designer"
            />
          </label>
        </div>
      </form>
    </div>
  );
}

// useEffect(() => {
//   const arr = [];
//   artists?.records.map((artist) => {
//     return arr.push({
//       value: artist.fields.Name.toLowerCase(),
//       label: artist.fields.Name,
//     });
//   });
//   setArtistOptions(arr);
//   console.log(arr);
// }, [artists]);

// useEffect(() => {
//   const filteredArtist = artists?.filter((item) => {
//     if (artists?.value?.includes(artistFilter.toLowerCase())) {
//       return item;
//     }
//     return item;
//   });
//   setArtistOptions(filteredArtist);

//   const designerFilters = designers?.filter((item) => {
//     if (designers?.value?.includes(designerFilter.toLowerCase())) {
//       return item;
//     }
//     return item;
//   });
//   setDesignerOptions(designerFilters);
// }, [artists, artistFilter, designerFilter, designers]);
