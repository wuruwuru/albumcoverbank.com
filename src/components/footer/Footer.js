import React from "react";
import classes from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={classes.Footer}>
      <span><a href="https://wuruwuru.com" target="_blank">Independent Arts</a></span>
      <span>&copy; 2024</span>
    </div>
  );
}
