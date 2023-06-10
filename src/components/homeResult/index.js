import React from "react"
import CoverGrid from "../../pages/cover-bank/CoverGrid"

import { FetchMoreLoader } from "../FetchMoreLoader"
export function HomeResult({
  homeStatus,
  selectedCover,
  setSelectedCover,
  wrapperRef,
  setOpenModal,
  imgRef,
  homeFetch,
  covers,
}) {
  console.log("ll", homeStatus)
  return (
    <>
      {homeStatus === "success" ? (
        <>
          <>
            {" "}
            <CoverGrid
              covers={covers}
              setSelectedCover={setSelectedCover}
              selectedCover={selectedCover}
              setOpenModal={setOpenModal}
              imgRef={imgRef}
              wrapperRef={wrapperRef}
            />{" "}
          </>

          {/* FETCHING NEW DATA */}
          {homeFetch && <FetchMoreLoader />}
        </>
      ) : (
        <FetchMoreLoader />
      )}
    </>
  )
}
