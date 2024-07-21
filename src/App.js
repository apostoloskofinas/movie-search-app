import React, { useState } from 'react';
import SearchBar from './components/SearchBar'; 
import MovieList from './components/MovieList'; 
import './App.css'; 

const API_KEY = process.env.REACT_APP_OMDB_APP_API_KEY;

// Το App component είναι το κύριο component της εφαρμογής
function App() {
  // Δημιουργία των state variables χρησιμοποιώντας useState hook
  const [movies, setMovies] = useState([]); // State για αποθήκευση της λίστας ταινιών
  const [loading, setLoading] = useState(false); // State για την ένδειξη φόρτωσης
  const [error, setError] = useState(null); // State για την αποθήκευση τυχόν σφαλμάτων

  // Συνάρτηση για την αναζήτηση ταινιών από την API
  const fetchMovies = async (query) => {
    if (!query) {
      setMovies([]); // Εάν δεν υπάρχει query, καθαρίζουμε τη λίστα ταινιών
      return;
    }
  
    setLoading(true); 
    setError(null); 
    
    try {
      const response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
      const data = await response.json(); 
      if (data.Response === 'True') {
        setMovies(data.Search); // Εάν η απάντηση είναι επιτυχής, αποθηκεύουμε τις ταινίες
      } else {
        setMovies([]); // Εάν η απάντηση δεν είναι επιτυχής, καθαρίζουμε τη λίστα ταινιών
      }
    } catch (error) {
      // Εάν υπάρχει σφάλμα κατά την αίτηση, αποθηκεύουμε το σφάλμα στο state
      setError('Error fetching movies. Please try again.');
    } finally {
      setLoading(false); // Ανεξαρτήτως της έκβασης, ορίζουμε την κατάσταση φόρτωσης σε false
    }
  };  

  return (
    <div className="App">
      <h1>Movie Search App</h1>
      {/* Παρέχουμε τη συνάρτηση fetchMovies ως prop στο SearchBar component */}
      <SearchBar onSearch={fetchMovies} />
      {loading && <p>Loading...</p>} {/* Εμφάνιση μηνύματος φόρτωσης εάν το state loading είναι true */}
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Εμφάνιση μηνύματος σφάλματος εάν υπάρχει */}
      {/* Παρέχουμε τη λίστα ταινιών ως prop στο MovieList component */}
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
