import React from "react";
import { useParams } from "react-router-dom";
import classes from "./SingleCover.module.scss";
import fela from "../../assets/sample.png"
import LikeIcon from "../../assets/likeIcon.png"
import ShareIcon from "../../assets/shareIcon.png"
import asa from "../../assets/sample2.png"

export default function SingleCover() {
  const { id } = useParams();

  console.log(id);

  return (
    <div className={classes.singleCover}>
      <div className={classes.singleDiv}>
        <div className={classes.imgDiv}>
          <img src={fela} alt="single cover" />
        </div>
        <div className={classes.textDiv}>
          <p>Beast of No Nation</p>
          <ul>
            <li>Artist:<span>Fela Anikulapo Kuti</span></li>
            <li>Designer:<span>Ghariokwu Lemi Arts Company</span></li>
            <li>Year:<span>1999</span></li>
            <li>Genre:<span>Afrobeat</span></li>
          </ul>
          <div className={classes.iconDiv}>
            <div className={classes.likeDiv}>
              <img src={LikeIcon} alt="like" />
              <p>10</p>
            </div>
            <div className={classes.shareDiv}>
              <img src={ShareIcon} alt="search" />
              <p>Share</p>
            </div>
          </div>
        </div>
      </div>

      <aside>
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
      </aside>
    </div>
  )
}
