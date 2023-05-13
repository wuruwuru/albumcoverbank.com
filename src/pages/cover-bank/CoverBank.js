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
  const [isLoading, setIsLoading] = useState(false)
  let pageSize = 15

  // ANIMATION REFS
  const imgRef = useRef()
  const wrapperRef = useRef()

  // FETCH FROM ALL COVERS FROM AIRTABLE
  const { status, data: allCovers } = useFetchAllCovers(offset, pageSize, "")

  // FETCH SEARCH RESULTS
  const { data: allSearch } = useFetchSearch(
    offset,
    searchTerm,
    selectedOptions
  )

  useEffect(() => {
    // ADD SCROLL EVENT TO WINDOW AND SET OFFSET
    if (status === "success" && allCovers?.records.length > 1) {
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
  }, [status, allCovers, allSearch])

  // FUNCTION THAT FIRES ONCE THE USER GETS TO THE BOTTOM OF THE SCREEN
  const handleScroll = async () => {
    const isAtBottom =
      window.innerHeight + window.pageYOffset >= document.body.offsetHeight
    if (isAtBottom) {
      setIsLoading(true)
      setOffset(allCovers.offset)
      setCovers([...covers, ...allCovers.records])
      setIsLoading(false)
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
            <p>Explore Nigerian Album Covers</p>
            <h2>{searchCovers?.length} Covers</h2>
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
          {isLoading && <div>Fetching...</div>}
          {/* COVER GRID */}
          {status === "success" ? (
            <>
              {!searchTerm &&
                !selectedOptions.designer &&
                !selectedOptions.artist &&
                !selectedOptions.year &&
                !selectedOptions.genre && (
                  <CoverGrid
                    covers={covers}
                    setSelectedCover={setSelectedCover}
                    selectedCover={selectedCover}
                    setOpenModal={setOpenModal}
                    imgRef={imgRef}
                    wrapperRef={wrapperRef}
                  />
                )}

              {/* FOR SEARCHING */}
              {(searchTerm ||
                selectedOptions.designer ||
                selectedOptions.artist ||
                selectedOptions.year ||
                selectedOptions.genre) && (
                <CoverGrid
                  covers={searchCovers}
                  setSelectedCover={setSelectedCover}
                  setOpenModal={setOpenModal}
                  imgRef={imgRef}
                  wrapperRef={wrapperRef}
                />
              )}
            </>
          ) : (
            <div className={classes.LogoWrapper}>
              <img src={Logo} alt="cover bank logo" />
            </div>
          )}
        </>
      </div>

      {/* SELECTED COVER */}
      {openModal && (
        <SingleCover cover={selectedCover} setOpenModal={setOpenModal} />
      )}
    </>
  )
}
