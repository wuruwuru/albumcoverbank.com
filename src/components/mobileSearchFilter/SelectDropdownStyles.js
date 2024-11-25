// SELECT DROPDOWN STYLES
export const colourStyles = {
  menuList: (styles) => ({
    ...styles,
    background: "#fdfdfd",
    borderRadius: "1.2rem",
    fontSize: "1.4rem",
    "::-webkit-scrollbar": {
      display: "none",
    },
    "::-webkit-scrollbar-track": {
      display: "none",
    },
    "::-webkit-scrollbar-thumb": {
      display: "none",
    },
    "::-webkit-scrollbar-thumb:hover": {
      display: "none",
    },
  }),
  option: (styles, { isFocused, isSelected }) => ({
    ...styles,
    background: isFocused ? "#dedede" : isSelected ? "#683522" : undefined,
    zIndex: 1,
    padding: "1.4rem",
    borderBottom: "1px solid #e0e0e0",
    "&:last-of-type": {
      borderBottom: "none",
    },
  }),
  menu: (base) => ({
    ...base,
    fontSize: "1.4rem",
    borderRadius: "1.2rem",
    borderColor: "#cccccc",
    zIndex: 100,
  }),

  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      fontSize: "1.4rem",
      color: "#808080",
    };
  },

  control: (base) => ({
    ...base,
    boxShadow: "none",
    borderColor: "#cccccc",
    "&:hover": {
      borderColor: "#cccccc",
    },
    height: "4.6rem",
    width: "100",
    borderRadius: "1.2rem",
  }),

  dropdownIndicator: (styles) => ({
    ...styles,
  }),
  indicatorSeparator: (styles) => ({ display: "none" }),
  loadingIndicator: (styles) => ({ display: "none" }),
};
