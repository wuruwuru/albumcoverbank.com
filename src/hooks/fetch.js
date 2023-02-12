import { useQuery } from "react-query";
import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;
const apiBase = process.env.REACT_APP_API_BASE;

const config = {
  headers: { Authorization: `Bearer ${apiKey}` },
};

// FETCH ALL COVERS
export const useFetchAllCovers = (offset, pageSize, searchTerm) => {
  const fetchAllCover = async () => {
    console.log(searchTerm, offset);

    try {
      const { data } = await axios.get(
        `https://api.airtable.com/v0/${apiBase}/Covers?pageSize=${pageSize}&view=All%20Covers&filterByFormula=SEARCH(%22${searchTerm}%22%2C%7BAlbum%7D)&offset=${offset}`,
        config
      );
      console.log(data);
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
    }
  );
  return { status, data, isFetching, refetch };
};

// FETCH ALL ARTISTS
export const useFetchArtists = (offset) => {
  const fetchArtists = async () => {
    try {
      const { data } = await axios.get(
        `https://api.airtable.com/v0/${apiBase}/Artists?pageSize=100&view=All%20Artists&fields%5B%5D=Name&filterByFormula=SEARCH(%22Cardinal%22%2C%7BName%7D)`,
        config
      );
      console.log(data);
      return data;
    } catch (error) {
      console.log({ error: error.response || error });
    }
  };

  const { status, data, isFetching, refetch } = useQuery(
    ["allArtists", offset],
    () => fetchArtists(),
    {
      refetchOnWindowFocus: true,
      refetchOnMount: true,
      keepPreviousData: true,
    }
  );
  return { status, data, isFetching, refetch };
};
