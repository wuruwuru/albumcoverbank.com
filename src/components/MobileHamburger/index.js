import React from "react"
import { useLocation} from 'react-router-dom';

// STYLE IMPORT
import classes from "./MobileHamburger.module.scss"

// IMAGE IMPORT
import Close from "../../assets/closeIcon.webp"
import Logo from "../../assets/logo.svg"

export default function MobileHamburger({ setIsShowing }) {
  const location = useLocation();
  return (
    <div className={classes.FilterContainer}>
      <form className={classes.FilterForm}>
        {/* HEADER */}
        <div className={classes.FormHeader}>
          <h2>Menu</h2>
      {location.pathname==='/'?<a  href="/">
            <h4 style={{ color: "#683522" }}>Covers</h4>
          </a>:<a  href="/">
            <h4>Covers</h4>
          </a>}    
          {location.pathname==='/about'?<a  href="/">
            <h4 style={{ color: "#683522" }}>About</h4>
          </a>:<a  href="/about">
            <h4>About</h4>
          </a>}  
          <a href="https://forms.gle/Tz1SMwkBRbKvd62JA" target="_blank">
            {" "}
            <h4>Submit</h4>
          </a>
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
