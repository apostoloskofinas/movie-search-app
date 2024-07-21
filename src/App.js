// src/App.js
import React, { useState } from 'react';
import SearchBar from './components1/SearchBar';
import MovieList from './components1/MovieList';
import { fetchMovies } from './api/movieAPI';
import IncrementButton from './components1/IncrementButton'; // Import IncrementButton component
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    setLoading(true);
    setError(null);

    // Split the query into individual search terms
    const searchTerms = query.split(',').map(term => term.trim()).filter(term => term);

    try {
      // Create an array of promises for each search term
      const results = await Promise.all(searchTerms.map(term => fetchMovies(term)));

      // Aggregate results from all search terms
      const allMovies = results.flatMap(result => result.movies);
      setMovies(allMovies);
    } catch (error) {
      setError('Error fetching movies. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Movie Search App</h1>
      <SearchBar onSearch={handleSearch} />
      <IncrementButton /> {/* Add IncrementButton component here */}
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
