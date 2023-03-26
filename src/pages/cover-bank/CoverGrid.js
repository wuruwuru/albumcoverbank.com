import React from "react";
import { useNavigate } from "react-router-dom";

// CSS IMPORT
import classes from "./CoverBank.module.scss";

export default function CoverGrid({ covers }) {
  const navigate = useNavigate();

  return (
    <div className={classes.coverGrid}>
      {covers &&
        covers.map((cover) => (
          <div
            key={cover.id}
            onClick={() => navigate(`/cover-bank/${cover.id}`)}
          >
            <figure>
              <img
                src={cover?.fields?.Cover[0]?.thumbnails?.full?.url}
                alt="album cover"
              />
            </figure>
            <p> {cover?.fields?.Album} </p>
            <span>{cover.fields["Designers copy"]}</span>
          </div>
        ))}
    </div>
  );
}
