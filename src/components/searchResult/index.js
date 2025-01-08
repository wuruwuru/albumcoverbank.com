import React from "react"
import CoverGrid from "../../pages/cover-bank/CoverGrid"
import { FetchMoreLoader } from "../FetchMoreLoader"

export function SearchResult({
  searchStatus,
  searchCovers,
  setSelectedCover,
  wrapperRef,
  setOpenModal,
  imgRef,
  searchFetch,
  error
}) {
  return (
    <>
      {searchStatus === "success" && (
        <>
          <CoverGrid
            covers={searchCovers}
            setSelectedCover={setSelectedCover}
            setOpenModal={setOpenModal}
            imgRef={imgRef}
            wrapperRef={wrapperRef}
            error={error}
          />

          {/* FETCHING NEW DATA */}
          {searchFetch &&
            searchCovers &&
            searchCovers.length > 0 && (
              <FetchMoreLoader />
            )}
        </>
      )}
    </>
  )
}
