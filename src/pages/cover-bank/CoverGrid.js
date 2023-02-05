import React from "react";
import { useNavigate } from "react-router-dom";

export default function CoverGrid({ covers }) {
  const navigate = useNavigate();

  return (
    <div className="cover-grid">
      {covers &&
        covers.map((cover) => (
          <div
            key={cover.id}
            onClick={() => navigate(`/cover-bank/${cover.id}`)}
          >
            <img src={cover?.fields?.Cover[0].url} alt="album cover" />
            <p> {cover?.fields?.Album} </p>
            <span>{cover.fields["Designers copy"]}</span>
          </div>
        ))}
    </div>
  );
}
