// SELECT DROPDOWN STYLES
export const colourStyles = {
  menuList: (styles) => ({
    ...styles,
    background: "#FDFDFD",
    fontSize: "1.4rem",
    // minHeight: '35.2rem',
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
  }),
  menu: (base) => ({
    ...base,
    fontSize: "1.4rem",
    zIndex: 100,
  }),

  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      fontSize: "1.4rem",
      color: "#4C4C4C",
    };
  },

  control: (base) => ({
    ...base,
    boxShadow: "none",
    borderColor: "#cccccc",
    "&:hover": {
      borderColor: "#cccccc",
    },
    height: "4.2rem",
    width: "26rem",
    borderRadius: "0.4rem",
  }),

  dropdownIndicator: (styles) => ({
    ...styles,
    // color: "#FFAE12",
  }),
  indicatorSeparator: (styles) => ({ display: "none" }),
  loadingIndicator: (styles) => ({ display: "none" }),
};
