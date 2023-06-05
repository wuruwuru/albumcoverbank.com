import React from "react"

// STYLE IMPORT
import classes from "./MobileHamburger.module.scss"

// IMAGE IMPORT
import Close from "../../assets/closeIcon.webp"
import Logo from "../../assets/logo.svg"

export default function MobileHamburger({ setIsShowing }) {
  return (
    <div className={classes.FilterContainer}>
      <form className={classes.FilterForm}>
        {/* HEADER */}
        <div className={classes.FormHeader}>
          <h2>Menu</h2>
          <h4>Covers</h4>
          <h4>About</h4>
          <h4>Submit</h4>
          <img
            src={Close}
            alt="close"
            onClick={() => {
              setIsShowing(false)
            }}
          />
        </div>

        {/* LOGO FOR MOBILE  */}
        <img className={classes.mobileLogo} src={Logo} alt="cover bank logo" />
      </form>
    </div>
  )
}
