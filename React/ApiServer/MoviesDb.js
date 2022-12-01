import React, { useEffect, useState } from "react";
import { getMovies } from "../../apicalls/movieApi";
import MovieList from "./MovieList";

function MoviesDb() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then((_movies) => setMovies(_movies));
  }, []);

  return (
    <>
      <h2>Welcome to EMovies</h2>
      <MovieList movies={movies} />
    </>
  );
}

export default MoviesDb;
