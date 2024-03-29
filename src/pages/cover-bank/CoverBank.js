import React, { useEffect, useState, useRef } from "react"
import { useFetchAllCovers, useFetchSearch } from "../../hooks/fetch"

// CSS IMPORT
import classes from "./CoverBank.module.scss"

// IMPORT COMPONENTS
import CoverGrid from "./CoverGrid"
import SearchBar from "../../components/searchBar/SearchBar"

import SelectedFilter from "./SelectedFilter"
import SingleCover from "../single-cover/SingleCover"
// IMAGE IMPORT
import Logo from "../../assets/logo.svg"
import { SearchResult } from "../../components/searchResult"
import { HomeResult } from "../../components/homeResult"
import { ScrolltoTop } from "../../components/scrollToTop"

export default function CoverBank() {
  const [covers, setCovers] = useState([])
  const [searchCovers, setSearchCovers] = useState([])
  const [offset, setOffset] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedOptions, setSelectedOptions] = useState({
    artist: "",
    designer: "",
    year: "",
    genre: "",
  })
  const [selectedCover, setSelectedCover] = useState({})
  const [openModal, setOpenModal] = useState(false)
  let pageSize = 15

  // ANIMATION REFS
  const imgRef = useRef()
  const wrapperRef = useRef()

  // FETCH FROM ALL COVERS FROM AIRTABLE
  const {
    status: homeStatus,
    data: allCovers,
    isFetching: homeFetch,
  } = useFetchAllCovers(offset, pageSize, "")

  // FETCH SEARCH RESULTS
  const {
    status: searchStatus,
    data: allSearch,
    isFetching: searchFetch,
  } = useFetchSearch(offset, searchTerm, selectedOptions)

  useEffect(() => {
    // ADD SCROLL EVENT TO WINDOW AND SET OFFSET
    if (homeStatus === "success" && allCovers?.records.length > 1) {
      window.addEventListener("scroll", handleScroll)
      setSearchCovers(allSearch?.records)
      // SET INITIAL COVERS ONCE THE COMPONENT MOUNTS
      if (covers.length === 0) {
        setCovers(allCovers.records)
        setOffset(allCovers.offset)
      }
    }

    // CALLBACK FUNCTION
    return () => window.removeEventListener("scroll", handleScroll)
  }, [homeStatus, allCovers, allSearch])

  // FUNCTION THAT FIRES ONCE THE USER GETS TO THE BOTTOM OF THE SCREEN
  const handleScroll = async () => {
    const isAtBottom =
      window.innerHeight + window.pageYOffset >= document.body.offsetHeight
    if (isAtBottom) {
      setOffset(allCovers.offset)
      setCovers([...covers, ...allCovers.records])
    }
  }

  return (
    <>
      <div
        className={classes.CoverBank}
        ref={wrapperRef}
        style={{
          filter: openModal ? "blur(0.4rem)" : "",
        }}
      >
        <>
          {/* HEADER */}
          <div className={classes.CoverBankHeader}>
            <h2>Explore Nigerian Album Covers</h2>
            {/* <h2> {searchCovers?.length} Covers</h2> */}
            {/* <h2> 5248 Covers</h2> */}
          </div>

          {/* SEARCH BAR */}
          <SearchBar
            setSearchTerm={setSearchTerm}
            setSelectedOptions={setSelectedOptions}
          />

          {/* FILTERING CATEGORIES */}
          {/* {(selectedOptions.designer ||
          selectedOptions.artist ||
          selectedOptions.year ||
          selectedOptions.genre) && ( */}
          <SelectedFilter
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
          />
          {/* )} */}

          {/* COVER GRID */}

          <>
            {!searchTerm &&
            !selectedOptions.designer &&
            !selectedOptions.artist &&
            !selectedOptions.year &&
            !selectedOptions.genre ? (
              <HomeResult
                homeStatus={homeStatus}
                covers={covers}
                searchCovers={searchCovers}
                selectedOptions={selectedOptions}
                setSelectedCover={setSelectedCover}
                wrapperRef={wrapperRef}
                setOpenModal={setOpenModal}
                imgRef={imgRef}
                homeFetch={homeFetch}
              />
            ) : (
              <SearchResult
                searchStatus={searchStatus}
                searchTerm={searchTerm}
                searchCovers={searchCovers}
                selectedOptions={selectedOptions}
                setSelectedCover={setSelectedCover}
                wrapperRef={wrapperRef}
                setOpenModal={setOpenModal}
                imgRef={imgRef}
                searchFetch={searchFetch}
              />
            )}
          </>
        </>
        <ScrolltoTop />
      </div>

      {/* SELECTED COVER */}
      {openModal && (
        <SingleCover cover={selectedCover} setOpenModal={setOpenModal} />
      )}
    </>
  )
}
