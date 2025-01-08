import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useFetchAllCovers, useFetchSearch } from "../../hooks/fetch";

import axios from "axios";

// CSS IMPORT
import classes from "./CoverBank.module.scss";

// IMPORT COMPONENTS
import SearchBar from "../../components/searchBar/SearchBar";
import SingleCover from "../single-cover/SingleCover";
import { SearchResult } from "../../components/searchResult";
import { HomeResult } from "../../components/homeResult";
import { ScrolltoTop } from "../../components/scrollToTop";

export default function CoverBank() {
  const [covers, setCovers] = useState([]);
  const [searchCovers, setSearchCovers] = useState([]);
  const [offset, setOffset] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOptions, setSelectedOptions] = useState({
    artist: "",
    designer: "",
    year: "",
    genre: "",
  });
  const [selectedCover, setSelectedCover] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [isLoadingCover, setIsLoadingCover] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  let pageSize = 15;

  // ANIMATION REFS
  const imgRef = useRef();
  const wrapperRef = useRef();

  const baseId = process.env.REACT_APP_AIRTABLE_API_BASE;
  const tableName = "Covers";
  const airtableApiToken = process.env.REACT_APP_AIRTABLE_ACCESS_TOKEN;

  const fetchCoverById = async (coverId) => {
    setIsLoadingCover(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.airtable.com/v0/${baseId}/${tableName}/${coverId}`,
        {
          headers: {
            Authorization: `Bearer ${airtableApiToken}`,
          },
        }
      );
      setSelectedCover(response.data);
      setOpenModal(true);
    } catch (error) {
      setError("Sorry, we couldn't load this cover. Please try again later.");
      console.error("Error fetching cover data:", error);
    } finally {
      setIsLoadingCover(false);
    }
  };

  const {
    status: homeStatus,
    data: allCovers,
    isFetching: homeFetch,
  } = useFetchAllCovers(offset, pageSize, "");
  const {
    status: searchStatus,
    data: allSearch,
    isFetching: searchFetch,
  } = useFetchSearch(offset, searchTerm, selectedOptions);

  useEffect(() => {
    if (homeStatus === "success" && allCovers?.records.length > 1) {
      window.addEventListener("scroll", handleScroll);
      setSearchCovers(allSearch?.records);

      if (covers.length === 0) {
        setCovers(allCovers.records);
        setOffset(allCovers.offset);
      }
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [homeStatus, allCovers, allSearch]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const coverID = params.get("coverId");

    if (coverID) {
      fetchCoverById(coverID);
    }
  }, [location]);

  const handleScroll = async () => {
    const isAtBottom =
      window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
    if (isAtBottom) {
      setOffset(allCovers.offset);
      setCovers([...covers, ...allCovers.records]);
    }
  };

  const handleOpenModal = (cover) => {
    setSelectedCover(cover);
    setOpenModal(true);
    navigate(`?coverId=${cover.id}`);
  };

  const handleCloseModal = () => {
    setSelectedCover(null);
    setOpenModal(false);
    navigate("/");
  };

  return (
    <>
      <div
        className={classes.CoverBank}
        ref={wrapperRef}
        style={{
          filter: openModal ? "blur(0.4rem)" : "",
        }}
      >
        <div className={classes.CoverBankHeader}>
          <h2>Explore Nigerian Album Covers</h2>
        </div>

        <SearchBar
          setSearchTerm={setSearchTerm}
          setSelectedOptions={setSelectedOptions}
        />

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
            setSelectedCover={handleOpenModal}
            wrapperRef={wrapperRef}
            setOpenModal={setOpenModal}
            imgRef={imgRef}
            homeFetch={homeFetch}
            error={error}
          />
        ) : (
          <SearchResult
            searchStatus={searchStatus}
            searchTerm={searchTerm}
            searchCovers={searchCovers}
            selectedOptions={selectedOptions}
            setSelectedCover={handleOpenModal}
            wrapperRef={wrapperRef}
            setOpenModal={setOpenModal}
            imgRef={imgRef}
            searchFetch={searchFetch}
            error={error}
          />
        )}
        <ScrolltoTop />
      </div>

      {openModal && (
        <SingleCover
          cover={selectedCover}
          setOpenModal={handleCloseModal}
          isLoading={isLoadingCover}
        />
      )}
    </>
  );
}
