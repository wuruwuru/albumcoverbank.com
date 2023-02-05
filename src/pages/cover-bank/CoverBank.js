import React, { useState } from "react";

// CSS IMPORT
import "./CoverBank.css";

// import env from "react-dotenv";

// IMPORT COMPONENTS
import CoverGrid from "./CoverGrid";

// AIRTABLE IMPORT
import Airtable from "airtable";

const apiKey = process.env.REACT_APP_API_KEY;

const base = new Airtable({ apiKey: apiKey }).base("appHk58J4aUulwANn");

export default function CoverBank() {
  const [covers, setCovers] = useState([]);

  // FETCH FROM ALL COVERS FROM AIRTABLE
  base("covers")
    .select({ pageSize: 12, view: "All Covers" })
    .eachPage(function page(records, fetchNextPage) {
      setCovers(records);

      // fetchNextPage();
    });

  return (
    <div className="cover-bank">
      <CoverGrid covers={covers} />
    </div>
  );
}

// .eachPage(function page(records, fetchNextPage) {
//   // This function (`page`) will get called for each page of records.

//   records.forEach(function(record) {
//       console.log('Retrieved', record.get('Album'));
//   });

//   // To fetch the next page of records, call `fetchNextPage`.
//   // If there are more records, `page` will get called again.
//   // If there are no more records, `done` will get called.
//   fetchNextPage();

// }, function done(err) {
//   if (err) { console.error(err); return; }
// });

// const {. records, fetchNextPage  } = baseData
