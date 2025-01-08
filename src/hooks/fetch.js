import { useQuery, QueryCache } from "react-query";
import axios from "axios";

const apiKey = process.env.REACT_APP_AIRTABLE_ACCESS_TOKEN;
const apiBase = process.env.REACT_APP_AIRTABLE_API_BASE;

const config = {
  headers: { Authorization: `Bearer ${apiKey}` },
};
const queryCache = new QueryCache();
// FETCH ALL COVERS
export const useFetchAllCovers = (offset, pageSize, searchTerm) => {
  const fetchAllCover = async () => {
    try {
      const { data } = await axios.get(
        `https://api.airtable.com/v0/${apiBase}/Covers?pageSize=${pageSize}&view=All%20Covers&filterByFormula=SEARCH(%22${searchTerm}%22%2C%7BAlbum%7D)&sort%5B0%5D%5Bfield%5D=Last%20Modified&sort%5B0%5D%5Bdirection%5D=desc&offset=${offset}`,
        config
      );
      if (!data) {
        throw new Error('No data received from server');
      }
      return data;
    } catch (error) {
      if (error.response) {
        throw new Error(`Server error: ${error.response.status}`);
      } else if (error.request) {
        throw new Error('Network error: Could not connect to server');
      } else {
        throw error;
      }
    }
  };

  return useQuery(
    ["allCovers", searchTerm, offset],
    fetchAllCover,
    {
      refetchOnWindowFocus: true,
      refetchOnMount: true,
      keepPreviousData: true,
      retry: 2, // Retry failed requests up to 2 times
      cache: queryCache,
      staleTime: 1 * 60 * 1000,
      cacheTime: 5 * 60 * 1000,
    }
  );
};

// FETCH ALL ARTISTS AND DESIGNERS
export const useFetchArtists = (title, searchTerm) => {
  const arr = [];
  const fetchArtists = async () => {
    try {
      const { data } = await axios.get(
        `https://api.airtable.com/v0/${apiBase}/${title}?view=All%20${title}&filterByFormula=SEARCH(%22${searchTerm}%22%2C%7BName%7D)`,
        config
      );

      data?.records.map((artist) => {
        return arr.push({
          value: artist.fields.Name.toLowerCase(),
          label: artist.fields.Name,
        });
      });

      return arr;
    } catch (error) {
      console.log({ error: error.response || error });
    }
  };

  const { status, data, isFetching, refetch } = useQuery(
    ["allArtists", title, searchTerm],
    () => fetchArtists(),
    {
      refetchOnWindowFocus: true,
      refetchOnMount: true,
      keepPreviousData: true,
    }
  );
  return { status, data, isFetching, refetch };
};

// FETCH ALL GENRE
export const useFetchGenre = (searchTerm) => {
  const genreArray = [];

  const fetchGenre = async () => {
    try {
      const { data } = await axios.get(
        `https://api.airtable.com/v0/${apiBase}/Covers?view=All%20Covers&fields%5B%5D=Genre`,
        config
      );

      data?.records.map((genre) => {
        return genreArray.push({
          value: genre.fields.Genre.toString(),
          label: genre.fields.Genre.toString(),
        });
      });

      return genreArray;
    } catch (error) {
      console.log({ error: error.response || error });
    }
  };

  const { status, data, isFetching, refetch } = useQuery(
    ["allGenre", searchTerm],
    () => fetchGenre(),
    {
      refetchOnWindowFocus: true,
      refetchOnMount: true,
      keepPreviousData: true,
    }
  );
  return { status, data, isFetching, refetch };
};

// SEARCH TERM
export const useFetchSearch = (offset, searchTerm, selectedOptions) => {
  const { artist, designer, year, genre } = selectedOptions;

  const designerOption = designer ? designer.replace("&", "%26") : "";
  const artistOption = artist ? artist.replace("&", "%26") : "";
  const genreOption = genre ? genre.replace("&", "%26") : "";

  const url = `https://api.airtable.com/v0/${apiBase}/Covers`;

  // Search parameters
  const searchAlbum = `SEARCH("${searchTerm}", {Album})`;
  const searchArtist = `SEARCH("${searchTerm}", {Music Artist})`;
  const searchDesigner = `SEARCH("${searchTerm}", {Cover Artist})`;

  // Filter parameters (only include if values are present)
  const filterArtist = artistOption
    ? `SEARCH("${artistOption}", {Music Artist})`
    : "";
  const filterDesigner = designerOption
    ? `SEARCH("${designerOption}", {Cover Artist})`
    : "";
  const filterGenre = genreOption ? `SEARCH("${genreOption}", {Genre})` : "";
  const filterYear = year ? `{Year} = "${year}"` : "";

  // Combine search conditions
  const searchConditions = `OR(${searchArtist}, ${searchAlbum}, ${searchDesigner})`;

  // Combine filter conditions only if they exist
  const filterConditions = [
    filterArtist,
    filterDesigner,
    filterGenre,
    filterYear,
  ]
    .filter(Boolean) // This removes empty filters
    .join(", ");

  // Final query construction
  const query = filterConditions
    ? `?filterByFormula=AND(${searchConditions}, ${filterConditions})`
    : `?filterByFormula=${searchConditions}`;

  const link = `${url}${query}`;

  const fetchSearch = async () => {
    try {
      const { data } = await axios.get(link, config);
      if (!data) {
        throw new Error('No data received from server');
      }
      return data;
    } catch (error) {
      if (error.response) {
        throw new Error(`Server error: ${error.response.status}`);
      } else if (error.request) {
        throw new Error('Network error: Could not connect to server');
      } else {
        throw error;
      }
    }
  };

  return useQuery(
    ["allSearches", searchTerm, offset, selectedOptions],
    fetchSearch,
    {
      refetchOnWindowFocus: true,
      refetchOnMount: true,
      keepPreviousData: true,
      retry: 2, // Retry failed requests up to 2 times
    }
  );
};
