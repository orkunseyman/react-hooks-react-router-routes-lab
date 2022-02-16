import React from "react";
import { movies } from "../data";

function Movies() {
  const movieItems = movies.map((movie) => {
    return (
      <div key={movie.title}>
        <h4>
          <b> Name: {movie.title}</b>
        </h4>
        <h5>Time:{movie.time}</h5>
        <h4>Genres</h4>
        <ul>
          {movie.genres.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
      </div>
    );
  });
  return (
    <div>
      <h1>Movies Page</h1>
      {movieItems}
    </div>
  );
}

export default Movies;
