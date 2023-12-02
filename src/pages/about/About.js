import React from "react"
import classes from "./About.module.scss"

import { contributors } from "../../data/Contributors"


export default function About() {

  return (
    <div className={classes.about}>
      <div className={classes.aboutWrapper}>
        <h2>About</h2>
        <p>Album Cover Bank is a digital archive of Nigerian album covers published from 1950 to date. It provides a comprehensive view into the evolution of Nigerian music and graphic design.</p>
        <p>At its core, the project is about cultural identity. The primary goal of the archive is to establish the history of Nigerian graphic design. We're also looking to highlight album cover artists as important cultural producers. So far, we’ve documented 750 designers! </p>
        <p>The archive is a platform for graphic design and storytelling inspiration. Each cover is a unique window into history, which makes the collection a valuable tool for enthusiasts, researchers, educators and artists of all kind.</p>
        <p>The project is built and maintained by a team of contributors.</p>
        <h4>Contributions</h4>
        <p><a href="https://www.waxpoetics.com/article/nigerian-1970s-album-covers-wuruwuru-archives/" target="_blank">Face the Music</a> is the first essay published from the album cover archive. It's written by multidisciplinary artist <a href="https://immaculataabba.com/" target="_blank">Immaculata Abba</a> and discusses how the covers from 1970 (post-independence) reflected national identities.</p>
        <p>If you'd like to write an essay like this and get published in global music publications like Wax Poetics, please <a href="#">send a pitch</a>.</p>
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
