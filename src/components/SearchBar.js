import React, { useState } from 'react';

// Το SearchBar component δέχεται ένα prop `onSearch` από το App component.
function SearchBar({ onSearch }) {
  // Το useState δημιουργεί μια τοπική κατάσταση για την αναζήτηση με αρχική τιμή 'Batman'
  const [query, setQuery] = useState('Batman');

  // Η συνάρτηση handleChange ενημερώνει το state με την τρέχουσα τιμή του input πεδίου
  const handleChange = (event) => {
    setQuery(event.target.value); // Ενημέρωση του state με την τιμή του input πεδίου
  };

  // Η συνάρτηση handleSubmit αποτρέπει την προεπιλεγμένη συμπεριφορά της φόρμας και καλεί την onSearch με την τρέχουσα τιμή της αναζήτησης
  const handleSubmit = (event) => {
    event.preventDefault(); // Αποτροπή της προεπιλεγμένης συμπεριφοράς της φόρμας (ανανεώνει τη σελίδα)
    onSearch(query); // Καλεί τη συνάρτηση onSearch (προέρχεται από το App component) με την τρέχουσα τιμή της αναζήτησης
  };

  return (
    <form onSubmit={handleSubmit}> {/* Καθορίζει ότι η συνάρτηση handleSubmit καλείται κατά την υποβολή της φόρμας */}
      <input
        type="text" // Πεδίο κειμένου για την είσοδο της αναζήτησης
        value={query} // Το πεδίο κειμένου θα έχει την τρέχουσα τιμή του query
        onChange={handleChange} // Καλεί τη συνάρτηση handleChange κάθε φορά που η τιμή του πεδίου αλλάζει
        placeholder="Search for movies..." // Κείμενο που εμφανίζεται όταν το πεδίο είναι κενό
      />
      <button type="submit">Search</button> {/* Κουμπί για την υποβολή της φόρμας */}
    </form>
  );
}

export default SearchBar;
