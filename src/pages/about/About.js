import React from "react"
import classes from "./About.module.scss"

import { contributors } from "../../data/Contributors"


export default function About() {

  return (
    <div className={classes.about}>
      <div className={classes.aboutWrapper}>
        <section>
          <h3>About</h3>
          <p>Cover Bank stands as Nigeria's largest digital archive of album artwork, featuring over 5,300 covers spanning from 1950 to the present day. This extensive collection offers a visual journey through the evolution of Nigerian music and popular culture.</p>
          <p>Our mission is twofold: to document Nigeria's rich musical heritage and to spotlight the often-overlooked graphic designers who shaped the visual identity of Nigerian music. Through meticulous research, we're establishing the first comprehensive history of Nigerian album cover design, recognizing these artists as vital contributors to the nation's cultural landscape.</p>
          <p>Beyond preservation, Cover Bank serves as a dynamic platform for design exploration and storytelling. We provide an invaluable resource for:</p>
          <ul>
              <li>Music historians and researchers exploring Nigerian cultural history</li>
              <li>Graphic designers seeking inspiration from vintage African aesthetics</li>
              <li>Educators teaching visual arts and cultural studies</li>
              <li>Artists and musicians interested in Nigeria's musical evolution</li>
              <li>Design enthusiasts discovering West African graphic design heritage</li>
          </ul>
          <p>The archive is funded by Independent Arts, a creative studio for passion projects, and maintained by Helloworld, a technology studio for cultural production.</p>
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
