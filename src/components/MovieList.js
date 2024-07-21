// src/components/MovieList.js
import React from 'react';
import styled from 'styled-components';

const MovieListWrapper = styled.div`
  padding: 20px;
`;

const MovieListItems = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 15px;
`;

const MovieListItem = styled.li`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 10px;
`;

const MoviePoster = styled.img`
  width: 100%;
  height: auto;
  border-bottom: 1px solid #ddd;
`;

const MovieDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const MovieTitle = styled.h2`
  font-size: 1.2em;
  margin: 0;
`;

const MovieYear = styled.p`
  margin: 0;
  font-size: 0.9em;
  color: #555;
`;

const MovieType = styled.p`
  margin: 0;
  font-size: 0.9em;
  color: #555;
`;

// Το MovieList component δέχεται το prop movies
function MovieList({ movies }) {
  return (
    <MovieListWrapper>
      {movies.length > 0 ? (
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
        <p>No movies found.</p>
      )}
    </MovieListWrapper>
  );
}

export default MovieList;
