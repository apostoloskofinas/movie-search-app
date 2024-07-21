import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import './App.css';

const API_KEY = process.env.REACT_APP_OMDB_APP_API_KEY;

function App() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async (query) => {
    if (!query) {
      setMovies([]);
      return;
    }
  
    try {
      const response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
      const data = await response.json();
      if (data.Response === 'True') {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
      setMovies([]); // Clear the movie list on error
    }
  };  

  return (
    <div className="App">
      <h1>Movie Search App</h1>
      <SearchBar onSearch={fetchMovies} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
