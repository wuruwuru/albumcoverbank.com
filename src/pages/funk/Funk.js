import React from "react";
import { Link } from "react-router-dom";
import "./funk.css";

import img1 from "../../assets/1-try-and-love.png";
import img2 from "../../assets/2-kalakuta-show.png";
import img3 from "../../assets/3-papas-land.png";
import img4 from "../../assets/4-atomic-bomb.png";
import img5 from "../../assets/5-orere-elejigbo.png";
import img6 from "../../assets/6-just-for-you.png";
import img7 from "../../assets/7-loverboy-83.png";
import img8 from "../../assets/8-rhumba-dance.png";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const Funk = () => {
  return (
    <div className="image-grid">
      <ul className="image-list">
        {images.map((image, index) => (
          <li key={index} className="image-item">
            <Link to="/">
              <img src={image} alt={`Image ${index + 1}`} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Funk;
