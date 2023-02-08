import { useQuery } from "react-query";
import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;
const apiBase = process.env.REACT_APP_API_BASE;

const config = {
  headers: { Authorization: `Bearer ${apiKey}` },
};

// FETCH ALL games
export const useFetchAllCovers = (offset, pageSize) => {
  const fetchAllCover = async () => {
    try {
      const { data } = await axios.get(
        `https://api.airtable.com/v0/${apiBase}/Covers?pageSize=${pageSize}&view=All%20Covers&offset=${offset}`,
        config
      );
      return data;
    } catch (error) {
      console.log({ error: error.response || error });
    }
  };

  const { status, data, isFetching, refetch } = useQuery(
    "allCovers",
    () => fetchAllCover(),
    {
      refetchOnWindowFocus: true,
      refetchOnMount: true,
    }
  );
  return { status, data, isFetching, refetch };
};
