import React from "react"
import classes from "./About.module.scss"

import { contributors } from "../../data/Contributors"


export default function About() {

  return (
    <div className={classes.about}>
      <div className={classes.aboutWrapper}>
        <h2> About</h2>

        <p>
         
Album Cover Bank is an archive of Nigerian album cover art from 1950 to date. It’s a public resource that provides a unique and comprehensive view of the evolution of Nigerian album art.
        </p>

        <p>
        
Album art is often the first interaction people have with music. It reflects an artist's style, message, and creative vision. The archive highlights how album art has changed and evolved alongside the political, economic, and social climate of the music industry and Nigeria at large. It provides insight into the creativity and vision of Nigerian artists throughout the years. 
        </p>

        <p>
          
We created the archive to establish the history of digital art production in Nigeria and provide a platform to connect and pull graphic design inspiration from. With 5000+ images, the archive displays the rich history and diversity of Nigerian music, graphic design, photography and illustration. It’s a valuable tool for enthusiasts, researchers and educators.
        </p>

        <p>
         
By bringing the past into the present, Cover Bank is also a useful resource for musicians and album designers. The archive serves as a creative space to inspire cover design and visual storytelling and informs artists on how to reflect their style and message through visuals.
        </p>
        <p>
          
The project is built and maintained by a team of contributors. Most of the images are scrapped from various sources on the internet, and a few were sent in by the artists. All images are referenced to the source. We’ve also provided a form to report or request takedowns.
        </p>
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
