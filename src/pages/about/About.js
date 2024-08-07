import React from "react"
import classes from "./About.module.scss"

import { contributors } from "../../data/Contributors"


export default function About() {

  return (
    <div className={classes.about}>
      <div className={classes.aboutWrapper}>
        <section>
          <h3>About</h3>
          <p>Cover Bank is a digital archive of 5300+ Nigerian album covers from 1950 to date. It provides a unique view into the evolution of Nigerian music.</p>
          <p>At its core, the archive is a research project to establish the history of Nigerian graphic design. Through this website, we hope to highlight cover artists as important cultural producers.</p>
          <p>Cover Bank is also a platform for design and storytelling. Our goal is to become a valuable tool for artists, enthusiasts, educators and researchers of all kind.</p>
          <p>The archive is built and maintained by Helloworld, a technology studio for cultural production. The project is sponsored by wuruwuru, a production studio for passion projects.</p>
        </section>
        <section>
          <h3>Essays</h3>
          <p>
            <a href="https://www.albumcoverbank.com/funk"><b>Nigerian Funk</b></a> <br></br>
            <span>Opemipo Aikomo & Sample Chief</span>
          </p>
          <p>
            <a href="https://www.waxpoetics.com/article/nigerian-1970s-album-covers-wuruwuru-archives/"><b>Face the Music</b></a> <br></br>
            <span>Immaculata Abba & Wax Poetics</span>
          </p>
        </section>
        <section>
          <h3>Join us</h3>
          <p>You can contribute the Cover Bank project by helping to maintain the database, working on the website or publishing a story inspired by the covers. If you're interested, please <a href="mailto:coverbank@wuruwuru.com">send us an email</a>.</p>
        </section>
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
