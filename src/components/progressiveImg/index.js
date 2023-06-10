import { useState, useEffect } from "react"

const ProgressiveImg = ({
  placeholderSrc,
  src,
  imgRef,
  App,
  width,
  height,
  cover,
  wrapperRef,
  setSelectedCover,
  setOpenModal,
  ...props
}) => {
  //    update the src of the img and render the actual image
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src)

  useEffect(() => {
    // creating an img element by instantiating an Image() object
    const img = new Image()
    // setting the src attribute to the actual image source
    img.src = src
    // detect when the actual image has completely loaded
    img.onload = () => {
      setImgSrc(src)
    }
  }, [src])

  return (
    <img
      {...{ src: imgSrc, ...props }}
      alt={props.alt || ""}
      width={width}
      height={height}
      className="image"
      onClick={() => {
        setSelectedCover(cover)
        setOpenModal(true)
        new App({ figure: { imgRef }, wrapper: { wrapperRef } })
      }}
    />
  )
}
export default ProgressiveImg
