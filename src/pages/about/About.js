import React from "react"
import classes from "./About.module.scss"

import { contributors } from "../../data/Contributors"


export default function About() {

  return (
    <div className={classes.about}>
      <div className={classes.aboutWrapper}>
        <h2>About</h2>
        <p>Album Cover Bank is a digital archive of Nigerian album cover art published from 1950 to date. It provides a unique and comprehensive view into the evolution of Nigeria music and graphic design.</p>
        <p>The main goal of the archive is to further establish the history of Nigerian graphic design. At the core, it’s about cultural identity. The other goal is to highlight album cover artists as important cultural producers. We’ve documented 750 people so far! </p>
        <p>We hope the archive is used a platform for graphic design inspiration and storytelling. Each cover represents a unique person, place, time, which is a valuable tool for enthusiasts, researchers, educators and storytellers.</p>
        <p>The project is built and maintained by a team of contributors.</p>
        <blockquote>Whether or not you were familiar with Pino and the Heartbeats at the time, going to the record store and stumbling on this album cover meant you were seduced by this promise of a good time. That’s what cover art for albums and singles do: be a good wingman for the music. Nigerian music, now one of the country’s biggest cultural exports, may not need a wingman, but its accompanying visuals definitely expand our aesthetic experience of both the music itself and Nigerian society at large. Nowhere is this more obvious than in Wuruwuru’s cover bank of over 5000 album covers in Nigeria’s music history since 1950. The covers help us see not just the spirit of the music but also the ever-evolving textures of the soft belly skin of the Nigerian milieu. After all, these album covers were the images the people brought home to their living rooms, the images that lived on in the hearts of the people.</blockquote>
        <p><a href="https://www.waxpoetics.com/article/nigerian-1970s-album-covers-wuruwuru-archives/" target="_blank">Face the Music</a></p>
        <h4>Contributions</h4>
        <p>If you'd like to write an essay based on the album cover and get published in global music publications like Wax Poetics, please submit <a href="#">this form</a>.</p>
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
