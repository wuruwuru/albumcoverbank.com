import React from "react";
import { useNavigate } from "react-router-dom";
import { App } from "../../animations/Canvas/index";

// CSS IMPORT
import classes from "./CoverBank.module.scss";

export default function CoverGrid({
  covers,
  imgRef,
  wrapperRef,
  setSelectedCover,
  setIsScrollable,
}) {
  const navigate = useNavigate();

  return (
    <>
      <div className={classes.coverGrid}>
        {covers &&
          covers.map((cover) => (
            <div key={cover.id}>
              <figure ref={imgRef}>
                <img
                  src={cover?.fields?.Cover[0]?.thumbnails?.full?.url}
                  alt="album cover"
                  onClick={() => {
                    setSelectedCover(cover);
                    setIsScrollable(false);
                    new App({ figure: imgRef, wrapper: wrapperRef });
                  }}
                />
              </figure>
              <p> {cover?.fields?.Album} </p>
              <span>{cover.fields["Designers copy"]}</span>
            </div>
          ))}
      </div>
    </>
  );
}
