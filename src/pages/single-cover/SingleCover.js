import React from "react";
import classes from "./SingleCover.module.scss";

// IMAGE IMPORT
import Close from "../../assets/CircularCloseButton.svg";

export default function SingleCover({ cover, setOpenModal }) {
  return (
    <div
      className={classes.singleCover}
      onClick={() => {
        setOpenModal(false);
      }}
    >
      <div className={classes.coverWrapper}>
        <img
          className={classes.close}
          src={Close}
          alt="close"
          onClick={() => {
            setOpenModal(false);
          }}
        />
        <div className={classes.coverFirstWrapper}>
          <figure className={classes.imgContainer}>
            <img
              src={cover?.fields?.Cover[0]?.thumbnails?.full?.url}
              alt="album cover"
            />
          </figure>
          <div className={classes.textContainer}>
            <h2>{cover?.fields?.Album}</h2>
            <ul>
              <li>
                <p> Artist</p>
                <span>{cover?.fields?.MusicArtistString}</span>
              </li>
              <li>
                <p> Cover</p>
                <span>{cover?.fields?.CoverArtistString}</span>
              </li>
              <li>
                <p> Year</p>
                <span>{cover?.fields?.Year}</span>
              </li>
              <li>
                <p>Genre</p>
                <span>
                  <ul className={classes.genreList}>
                    {cover?.fields?.Genre.map((genre, index) => (
                      <li key={index}> {genre} </li>
                    ))}
                  </ul>
                </span>
              </li>
              <li>
                <p> Source</p>
                <a href={cover?.fields?.Source} target="_blank">
                  <h3 className={classes.truncate}>{cover?.fields?.Source}</h3>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.reportWrapper}>
          <a
            href={
              "mailto:coverbank@wuruwuru.com?subject=Report%20Album%20Cover%3A%20" +
              cover?.fields?.Album +
              " by " +
              cover?.fields?.ArtistWebsite
            }
            target="_blank"
          >
            {" "}
            <p className={classes.reportLink}>Report</p>
          </a>
        </div>
      </div>
    </div>
  );
}
