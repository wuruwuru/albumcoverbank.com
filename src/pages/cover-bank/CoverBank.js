import React, { useEffect, useState } from "react";

// CSS IMPORT
import "./CoverBank.css";

// IMPORT COMPONENTS
import CoverGrid from "./CoverGrid";
import { useFetchAllCovers } from "../../hooks/fetch";

export default function CoverBank() {
  const [covers, setCovers] = useState([]);
  const [offset, setOffset] = useState("");
  let pageSize = 12;

  // FETCH FROM ALL COVERS FROM AIRTABLE
  const {
    status,
    data: allCovers,
    refetch,
  } = useFetchAllCovers(offset, pageSize);

  useEffect(() => {
    if (status === "success") {
      setOffset(allCovers.offset);
      if (covers.length === 0) {
        setCovers(allCovers.records);
      }
      if (covers.length === pageSize) {
        refetch();
      }
    }
  }, [allCovers, status, covers.length, refetch, pageSize]);

  const handleClick = async () => {
    await refetch();
    setCovers((prevCovers) => {
      return [...prevCovers, ...allCovers.records];
    });
  };

  return (
    <div className="cover-bank">
      {status === "success" && (
        <>
          <CoverGrid covers={covers} />
          <button onClick={handleClick}>More</button>
        </>
      )}
    </div>
  );
}
