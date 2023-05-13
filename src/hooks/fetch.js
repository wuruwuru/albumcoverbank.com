import { useQuery,QueryCache } from "react-query";
import axios from "axios";
// import { useState, useEffect } from "react";

const apiKey = process.env.REACT_APP_API_KEY;
const apiBase = process.env.REACT_APP_API_BASE;

const config = {
  headers: { Authorization: `Bearer ${apiKey}` },
};
const queryCache = new QueryCache()
// FETCH ALL COVERS
export const useFetchAllCovers = (offset, pageSize, searchTerm) => {
  const fetchAllCover = async () => {
    try {
      const { data } = await axios.get(
        `https://api.airtable.com/v0/${apiBase}/Covers?pageSize=${pageSize}&view=All%20Covers&filterByFormula=SEARCH(%22${searchTerm}%22%2C%7BAlbum%7D)&offset=${offset}`,
        config
      );
      return data;
    } catch (error) {
      console.log({ error: error.response || error });
    }
  };

  const { status, data, isFetching, refetch } = useQuery(
    ["allCovers", searchTerm, offset],
    () => fetchAllCover(),
    {
      refetchOnWindowFocus: true,
      refetchOnMount: true,
      keepPreviousData: true,
      cache: queryCache
    }
  );
  return { status, data, isFetching, refetch };
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
  const search = `OR(SEARCH("${searchTerm}", {Album}))`;
  const filterArtist = `OR(SEARCH("${artistOption}", {Artist}))`;
  const filterDesigner = `OR(SEARCH("${designerOption}", {Designer}))`;
  const filterGenre = `OR(SEARCH("${genreOption}", {Genre}))`;
  const filterYear = `OR({Year} = '${year}')`;

  // const filterYear = `OR(SEARCH("${yearOption}", {Year}))`;
  // const filterYear = `OR(SEARCH(%22${yearOption}%22%2C+%7BYear%7D))`;

  const query = year
    ? `?filterByFormula=AND(${search}, ${filterDesigner}, ${filterArtist}, ${filterGenre}, ${filterYear})`
    : `?filterByFormula=AND(${search}, ${filterDesigner}, ${filterArtist}, ${filterGenre})`;

  const link = `${url}${query}`;

  const fetchSearch = async () => {
    try {
      const { data } = await axios.get(`${link}`, config);
      return data;
    } catch (error) {
      console.log({ error: error.response || error });
    }
  };

  const { status, data, isFetching, refetch } = useQuery(
    ["allSearches", searchTerm, offset, selectedOptions],
    () => fetchSearch(),
    {
      refetchOnWindowFocus: true,
      refetchOnMount: true,
      keepPreviousData: true,
    }
  );
  return { status, data, isFetching, refetch };
};

// FETCH ALL Designers
// export const useFetchDesigners = (artistFilter) => {
//   const [artistArr, setArtistArr] = useState([]);
//   const arr = [];
//   const [offset, setOffset] = useState("");
//   const fetchDesigners = async () => {
//     try {
//       const { data } = await axios.get(
//         `https://api.airtable.com/v0/${apiBase}/Designers?pageSize=100&view=All%20Designers&fields%5B%5D=Name&offset=${offset}`,
//         config
//       );
//       console.log(data);

//       if (data?.offset !== undefined) {
//         setOffset(data?.offset);
//       }

//       data?.records.map((artist) => {
//         return arr.push({
//           value: artist.fields.Name.toLowerCase(),
//           label: artist.fields.Name,
//         });
//       });
//       setArtistArr([...artistArr, ...arr]);

//       return artistArr;
//     } catch (error) {
//       console.log({ error: error.response || error });
//     }
//   };

//   const { status, data, isFetching, refetch } = useQuery(
//     ["allArtists", artistFilter, offset],
//     () => fetchDesigners(),
//     {
//       refetchOnWindowFocus: true,
//       refetchOnMount: true,
//       keepPreviousData: true,
//     }
//   );
//   return { status, data, isFetching, refetch };
// };
