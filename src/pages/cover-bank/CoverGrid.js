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
}) {
  const navigate = useNavigate()

  return (
    <>
     <>
      <div className={classes.coverGrid}>
        {covers &&
          covers.map((cover) => (
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
              <h4>{cover?.fields?.ArtistWebsite}</h4>
            </div>
          ))}
      </div>
    </>
    </>
  )
}
