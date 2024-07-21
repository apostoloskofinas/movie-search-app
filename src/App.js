// src/App.js
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import { fetchMovies } from './api/movieAPI'; // Εισαγωγή της συνάρτησης fetchMovies
import './App.css';

function App() {
  // Δημιουργία των state variables χρησιμοποιώντας useState hook
  const [movies, setMovies] = useState([]); // State για αποθήκευση της λίστας ταινιών
  const [loading, setLoading] = useState(false); // State για την ένδειξη φόρτωσης
  const [error, setError] = useState(null); // State για την αποθήκευση τυχόν σφαλμάτων

  // Συνάρτηση για την αναζήτηση ταινιών από την API
  const handleSearch = async (query) => {
    setLoading(true); // Ορίζουμε την κατάσταση φόρτωσης σε true
    setError(null); // Καθαρίζουμε τυχόν προηγούμενα σφάλματα

    const { movies: fetchedMovies, error: fetchError } = await fetchMovies(query);
    
    setMovies(fetchedMovies); // Ενημερώνουμε τη λίστα ταινιών
    setError(fetchError); // Ενημερώνουμε το state με τυχόν σφάλματα
    setLoading(false); // Ορίζουμε την κατάσταση φόρτωσης σε false
  };

  return (
    <div className="App">
      <h1>Movie Search App</h1>
      {/* Παρέχουμε τη συνάρτηση handleSearch ως prop στο SearchBar component */}
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading...</p>} {/* Εμφάνιση μηνύματος φόρτωσης εάν το state loading είναι true */}
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Εμφάνιση μηνύματος σφάλματος εάν υπάρχει */}
      {/* Παρέχουμε τη λίστα ταινιών ως prop στο MovieList component */}
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
