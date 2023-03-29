import React from "react";
// import { useParams } from "react-router-dom";
import classes from "./SingleCover.module.scss";

// IMAGE IMPORT
import Close from "../../assets/CircularCloseButton.svg";

// COMPONENT
import Footer from "../../components/footer/Footer";

export default function SingleCover({
  cover,
  setSelectedCover,
  setIsScrollable,
}) {
  // const { id } = useParams();

  return (
    <div className={classes.singleCover}>
      <div className={classes.coverWrapper}>
        <img
          className={classes.close}
          src={Close}
          alt="close"
          onClick={() => {
            setIsScrollable(true);
            setSelectedCover({});
          }}
        />
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
              <span>{cover?.fields?.ArtistWebsite}</span>
            </li>
            <li>
              <p> Designer</p>
              <span>{cover?.fields["Designers copy"]}</span>
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
          </ul>
        </div>
      </div>

      <Footer />

      {/* <aside>
        <div>
          <h3>Popular Covers</h3>
        </div>
        <div className={classes.asideDiv}>
          <img src={asa} alt="" />
          <p>album title</p>
          <p>designer name</p>
        </div>
        <div className={classes.asideDiv}>
          <img src={asa} alt="" />
          <p>album title</p>
          <p>designer name</p>
        </div>
        <div className={classes.asideDiv}>
          <img src={asa} alt="" />
          <p>album title</p>
          <p>designer name</p>
        </div>
      </aside> */}
    </div>
  );
}
