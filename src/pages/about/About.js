import React from "react";
import classes from "./About.module.scss";

export default function about() {
  return (
    <div className={classes.about}>
      <h2> About</h2>

      <div className={classes.aboutWrapper}>
        <p>
          Music is a bedrock of Nigerian culture and album covers are a new
          perspective into this massice cultural export.
        </p>

        <p>
          Album Cover Bank is a database of cover images from 1950, gathered
          from the internet and tagged by designer.
        </p>

        <p>
          It also includes longform stories that explore the intersection
          between Nigerian music and graphic design.
        </p>

        <p>
          The project is run by a group of friends and directed by wuruwuru.
        </p>
      </div>
    </div>
  );
}
