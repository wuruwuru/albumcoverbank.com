import { useEffect, useState } from "react"
// STYLES
import classes from "./ScrollToTop.module.scss"
// IMAGE IMPORT
import Arrow from "../../assets/svg/scroll-arrow.svg"
export const ScrolltoTop = () => {
  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    })
  }
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 800) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    })
  }, [])
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false)
  return (
    <>
      {showButton && (
        <div
          className={classes.ScrollWrapper}
          onClick={scrollToTop}
          title="scroll to top"
        >
          <img src={Arrow} alt="scroll-to-top arrow" />
        </div>
      )}
    </>
  )
}
