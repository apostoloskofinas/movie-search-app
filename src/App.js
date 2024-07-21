import React, { useState } from 'react';
import SearchBar from './components1/SearchBar';
import MovieList from './components1/MovieList';
import { fetchMovies } from './api/movieAPI'; // Import fetchMovies function
import IncrementButton from './components1/IncrementButton'; // Import IncrementButton component
import './App.css';

function App() {
  const [movies, setMovies] = useState([]); // State for storing movie list
  const [loading, setLoading] = useState(false); // State for loading indication
  const [error, setError] = useState(null); // State for storing any errors

  const handleSearch = async (query) => {
    setLoading(true); // Set loading state to true
    setError(null); // Clear any previous errors

    const { movies: fetchedMovies, error: fetchError } = await fetchMovies(query);
    
    setMovies(fetchedMovies); // Update movie list
    setError(fetchError); // Update error state
    setLoading(false); // Set loading state to false
  };

  return (
    <div className="App">
      <h1>Movie Search App</h1>
      <SearchBar onSearch={handleSearch} />
      <IncrementButton /> {/* Add IncrementButton component here */}
      {loading && <p>Loading...</p>} {/* Display loading message if loading is true */}
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message if there is an error */}
      <MovieList movies={movies} /> {/* Pass movie list as prop to MovieList component */}
    </div>
  );
}

export default App;
