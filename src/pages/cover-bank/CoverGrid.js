import React from "react";

export default function CoverGrid({ covers }) {
  console.log("my cover", covers[0]);
  return (
    <div className="cover-grid">
      {covers &&
        covers.map((cover) => (
          <div key={cover.id}>
            <img src={cover?.fields?.Cover[0].url} alt="album cover" />
            <p> {cover?.fields?.Album} </p>
            <span>{cover.fields["Designers copy"]}</span>
          </div>
        ))}
    </div>
  );
}
