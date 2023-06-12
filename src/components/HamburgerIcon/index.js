import React from 'react';
import Menu from "../../assets/svg/menu.svg"
import classes from "./HamburgerIcon.module.scss";;

const HamburgerIcon = (  {onShow} ) => {
  return (
    <div className={classes.hamburger} onClick={onShow}>
  <img src={Menu} alt="hamburger menu" />
    </div>
  );
};

export default HamburgerIcon;