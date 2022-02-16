import React from "react";
import { actors } from "../data";

function Actors() {
  const actorItems = actors.map((actor) => {
    return (
        <div key={actor.name}>
        <h4>
          <b>Name: {actor.name}</b>
        </h4>
        <h4>Movies:</h4>
        <ul>
          {actor.movies.map((movie) => (
            <li key={movie}>{movie}</li>
          ))}
        </ul>
      </div>
    );
  });
  return (
    <div>
      <h1>Actors Page</h1>
      {actorItems}
    </div>
  );
}

export default Actors;
