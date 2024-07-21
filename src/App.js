import React, { useState } from 'react';
import SearchBar from './components/SearchBar'
import MovieList from './components/MovieList'
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async (query) => {
    const response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=`);
    const data = await response.json();
    if (data.Response === 'True') {
      setMovies(data.Search);
    } else {
      setMovies([]);
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
