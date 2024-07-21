import React from 'react';
import styled from 'styled-components';

// Στυλ για το container του MovieList
const MovieListWrapper = styled.div`
  padding: 20px; // Προσθήκη padding γύρω από τη λίστα ταινιών
`;

// Στυλ για τη λίστα ταινιών
const MovieListItems = styled.ul`
  list-style-type: none; // Αφαίρεση της προεπιλεγμένης μορφοποίησης της λίστας (bullet points)
  padding: 0; // Αφαίρεση του padding
  margin: 0; // Αφαίρεση του margin
  display: grid; // Χρήση grid layout για την οργάνωση των στοιχείων της λίστας
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); // Δημιουργία στήλων που προσαρμόζονται αυτόματα στο διαθέσιμο χώρο
  gap: 15px; // Απόσταση μεταξύ των στοιχείων της λίστας
`;

// Στυλ για κάθε στοιχείο της λίστας ταινιών
const MovieListItem = styled.li`
  border: 1px solid #ddd; // Εξωτερικό περίγραμμα για το στοιχείο της λίστας
  border-radius: 8px; // Στρογγυλεμένες γωνίες
  overflow: hidden; // Απόκρυψη περιεχομένου που ξεφεύγει από τα όρια του στοιχείου
  display: flex; // Χρήση flex layout για την τοποθέτηση του περιεχομένου
  flex-direction: column; // Στοίχιση των παιδιών στοιχείων σε στήλη
  background: #fff; // Λευκό φόντο
  padding: 10px; // Padding γύρω από το περιεχόμενο
`;

// Στυλ για την αφίσα της ταινίας
const MoviePoster = styled.img`
  width: 100%; // Το πλάτος της αφίσας καλύπτει όλο το διαθέσιμο χώρο του στοιχείου της λίστας
  height: auto; // Το ύψος της αφίσας προσαρμόζεται αυτόματα
  border-bottom: 1px solid #ddd; // Περίγραμμα κάτω από την αφίσα
`;

// Στυλ για το container των λεπτομερειών της ταινίας
const MovieDetails = styled.div`
  display: flex; // Χρήση flex layout
  flex-direction: column; // Στοίχιση των στοιχείων σε στήλη
  padding: 10px; // Padding γύρω από το περιεχόμενο
`;

// Στυλ για τον τίτλο της ταινίας
const MovieTitle = styled.h2`
  font-size: 1.2em; // Μέγεθος γραμματοσειράς
  margin: 0; // Αφαίρεση του περιθωρίου
`;

// Στυλ για το έτος της ταινίας
const MovieYear = styled.p`
  margin: 0; // Αφαίρεση του περιθωρίου
  font-size: 0.9em; // Μέγεθος γραμματοσειράς
  color: #555; // Χρώμα γραμματοσειράς
`;

// Στυλ για τον τύπο της ταινίας
const MovieType = styled.p`
  margin: 0; // Αφαίρεση του περιθωρίου
  font-size: 0.9em; // Μέγεθος γραμματοσειράς
  color: #555; // Χρώμα γραμματοσειράς
`;

// Το MovieList component δέχεται το prop movies
function MovieList({ movies }) {
  // Χρησιμοποιείς το prop movies για να εμφανίσεις ταινίες
  return (
    <MovieListWrapper>
      {movies.length > 0 ? (
        // Εάν υπάρχουν ταινίες, εμφάνισέ τις σε grid μορφή
        <MovieListItems>
          {movies.map((movie) => (
            <MovieListItem key={movie.imdbID}>
              <MoviePoster src={movie.Poster} alt={movie.Title} />
              <MovieDetails>
                <MovieTitle>{movie.Title}</MovieTitle>
                <MovieYear>{movie.Year}</MovieYear>
                <MovieType>Type: {movie.Type}</MovieType>
              </MovieDetails>
            </MovieListItem>
          ))}
        </MovieListItems>
      ) : (
        // Εάν δεν υπάρχουν ταινίες, εμφάνισε μήνυμα
        <p>No movies found.</p>
      )}
    </MovieListWrapper>
  );
}

export default MovieList;
