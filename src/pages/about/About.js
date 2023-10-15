import React from "react"
import classes from "./About.module.scss"

import { contributors } from "../../data/Contributors"


export default function About() {

  return (
    <div className={classes.about}>
      <div className={classes.aboutWrapper}>
        <h2> About</h2>
        <p>Cover Bank is a digital archive of Nigerian album cover art from 1950 to date. It provides a unique and comprehensive view of the evolution of Nigerian album art</p>
        <p>The main goal of the archive is to further establish the history of Nigerian graphic design. At the core, it’s about cultural identity. The other goal is to provide a platform to celebrate album cover artists. We’ve documented 750 designers so far! </p>
        <p>We hope the archive is used a platform for graphic design inspiration and storytelling. Each cover represents a place, time and person (or group), a valuable tool for enthusiasts, researchers and educators.
        </p>
        <p>The project is built and maintained by a team of contributors.</p>
      </div>

      {/* CONTRIBUTORS */}
      <aside className={classes.contributors}>
        <h3>Contributors</h3>
        {contributors.map((contributor) => (
          <div className={classes.contributorContainer} key={contributor.name}>
            <img src={contributor.image} alt={contributor.name} />
            <div className={classes.textContainer}>
              <p>{contributor.name}</p>
              <span>{contributor.role}</span>
            </div>
          </div>
        ))}
      </aside>
    </div>
  )
}
