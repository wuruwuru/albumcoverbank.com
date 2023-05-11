import React, { useEffect } from "react";
import classes from "./SelectedFilter.module.scss";

// IMAGE IMPORT
import Close from "../../assets/closeIcon.webp";

export default function SelectedFilter({
  selectedOptions,
  setSelectedOptions,
}) {
  const selectedFilters = [
    {
      title: "Year",
      value: selectedOptions.year,
    },
    {
      title: "Genre",
      value: selectedOptions.genre,
    },
    {
      title: "Artist",
      value: selectedOptions.artist,
    },
    {
      title: "Designer",
      value: selectedOptions.designer,
    },
  ];


  const removeSpecificFilters = (title) => {
    switch (title) {
      case "Year":
        setSelectedOptions({ ...selectedOptions, year: "" });
        break;

      case "Genre":
        setSelectedOptions({ ...selectedOptions, genre: "" });
        break;

      case "Artist":
        setSelectedOptions({ ...selectedOptions, artist: "" });
        break;

      case "Designer":
        setSelectedOptions({ ...selectedOptions, designer: "" });
        break;

      default:
        break;
    }
  };

  return (
    <div className={classes.selectedFilter}>
      {selectedFilters.map(
        (filter, index) =>
          filter.value && (
            <div key={index}>
              <span>
                {filter.title} : {filter.value}
              </span>

              <img
                src={Close}
                alt="clear filter option"
                loading="lazy"
                // className="lazy"
                // data-src="https://via.placeholder.com/240x240"
                // data-srcset="https://via.placeholder.com/240x240"
                width="235"
                height="235"
                onClick={() => removeSpecificFilters(filter.title)}
              />
            </div>
          )
      )}
    </div>
  );
}
