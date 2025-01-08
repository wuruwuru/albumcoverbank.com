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
      <CoverGrid
        covers={searchCovers}
        setSelectedCover={setSelectedCover}
        setOpenModal={setOpenModal}
        imgRef={imgRef}
        wrapperRef={wrapperRef}
        error={error}
        isError={searchStatus === "error"}
      />
      {searchFetch && searchCovers?.length > 0 && <FetchMoreLoader />}
    </>
  )
}
