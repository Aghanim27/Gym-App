export const exerciseOptions = {
  method: "GET",
  // params: { limit: "10" },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_EXERCISEDB_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const URL = "https://exercisedb.p.rapidapi.com/exercises";

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_YTSEARCH_API_KEY,
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  // console.log("Fetching data from:", url);

  try {
    const response = await fetch(url, options);
    // console.log("Response status code:", response.status);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error to propagate it to the caller
  }
};
