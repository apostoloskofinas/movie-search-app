// src/api/movieAPI.js
const API_KEY = process.env.REACT_APP_OMDB_APP_API_KEY;

export const fetchMovies = async (query) => {
  if (!query) {
    return { movies: [], error: null };
  }

  try {
    const response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
    const data = await response.json();
    if (data.Response === 'True') {
      return { movies: data.Search, error: null };
    } else {
      return { movies: [], error: null };
    }
  } catch (error) {
    return { movies: [], error: 'Error fetching movies. Please try again.' };
  }
};
