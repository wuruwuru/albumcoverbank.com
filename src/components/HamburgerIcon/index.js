import React from 'react';
import classes from "./HamburgerIcon.module.scss";;

const HamburgerIcon = (  {onShow} ) => {
  return (
    <div className={classes.hamburger} onClick={onShow}>
      <div className={classes.line}></div>
      <div className={classes.line}></div>
      <div className={classes.line}></div>
    </div>
  );
};

export default HamburgerIcon;