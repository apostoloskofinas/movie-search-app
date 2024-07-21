const API_KEY = process.env.REACT_APP_OMDB_APP_API_KEY;

/**
 * Συνάρτηση για την αναζήτηση ταινιών μέσω της API
 * @param {string} query - Το ερώτημα αναζήτησης
 * @returns {Promise<Object>} - Η απάντηση της API
 */
export const fetchMovies = async (query) => {
  if (!query) {
    return { movies: [], error: null }; // Επιστρέφουμε κενή λίστα και κανένα σφάλμα
  }

  try {
    const response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
    const data = await response.json();
    if (data.Response === 'True') {
      return { movies: data.Search, error: null }; // Επιστρέφουμε τις ταινίες και κανένα σφάλμα
    } else {
      return { movies: [], error: null }; // Επιστρέφουμε κενή λίστα και κανένα σφάλμα
    }
  } catch (error) {
    return { movies: [], error: 'Error fetching movies. Please try again.' }; // Επιστρέφουμε κενή λίστα και το σφάλμα
  }
};
