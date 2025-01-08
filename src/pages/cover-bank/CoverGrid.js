import React from "react"
import { useNavigate } from "react-router-dom"
import { App } from "../../animations/Canvas/index"

// CSS IMPORT
import classes from "./CoverBank.module.scss"

//COMPONENTS
import ProgressiveImg from "../../components/progressiveImg"

export default function CoverGrid({
  covers,
  imgRef,
  wrapperRef,
  setSelectedCover,
  setOpenModal,
  error
}) {
  const navigate = useNavigate()

  if (error) {
    return (
      <div className={classes.errorMessage}>
        <p>{error}</p>
      </div>
    )
  }

  if (!covers || covers.length === 0) {
    return (
      <div className={classes.errorMessage}>
        <p>No covers found. Try adjusting your search criteria.</p>
      </div>
    )
  }

  return (
    <div className={classes.coverGrid}>
      {covers.map((cover) => (
        <div key={cover?.id}>
          <figure ref={imgRef}>
            {cover?.fields?.Cover?.[0]?.thumbnails?.full?.url ? (
              <ProgressiveImg
                src={cover?.fields?.Cover[0]?.thumbnails.full.url}
                wrapperRef={wrapperRef}
                cover={cover}
                imgRef={imgRef}
                App={App}
                alt="album cover"
                width="240"
                height="211"
                setOpenModal={setOpenModal}
                setSelectedCover={setSelectedCover}
                placeholderSrc="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
              />
            ) : null}
          </figure>
          <p>{cover?.fields?.Album}</p>
          <h4>{cover?.fields?.CoverArtistString}</h4>
        </div>
      ))}
    </div>
  )
}
