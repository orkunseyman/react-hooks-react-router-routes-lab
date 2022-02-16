import React from "react";
import { directors } from "../data";

function Directors() {
  const directorItems = directors.map((director) => {
    return (
      <div key={director.name}>
        <h4>
          <b>Name: {director.name}</b>
        </h4>
        <h4>Movies:</h4>
        <ul>
          {director.movies.map((movie) => (
            <li key={movie}>{movie}</li>
          ))}
        </ul>
      </div>
    );
  });
  return (
    <div>
      <h1>Directors Page</h1>
      {directorItems}
    </div>
  );
}

export default Directors;
