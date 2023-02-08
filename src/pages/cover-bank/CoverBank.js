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
    // ADD SCROLL EVENT TO WINDOW AND SET OFFSET
    if (status === "success") {
      window.addEventListener("scroll", handleScroll);
      setOffset(allCovers.offset);

      // SET INITIAL COVERS ONCE THE COMPONENT MOUNTS
      if (covers.length === 0) {
        setCovers(allCovers.records);
      }

      // REFETCH THE DATA ONCE WE HAVE THE FIRST 12 COVERS
      if (covers.length === pageSize) {
        refetch();
      }
    }

    // CALLBACK FUNCTION
    return () => window.removeEventListener("scroll", handleScroll);
  }, [allCovers, status, covers.length, refetch, pageSize]);

  // FUNCTION THAT FIRES ONCE THE USER GETS TO THE BOTTOM OF THE SCREEN
  const handleScroll = async () => {
    const isAtBottom =
      window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
    if (isAtBottom) {
      console.log(covers);
      await refetch();
      setCovers([...covers, ...allCovers.records]);
    }
  };

  return (
    <div className="cover-bank">
      {status === "success" && (
        <>
          <CoverGrid covers={covers} />
        </>
      )}
    </div>
  );
}
