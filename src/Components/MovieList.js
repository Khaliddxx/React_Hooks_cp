import React from "react";
import MovieCard from "./MovieCard";

const MovieList = () => {
  return (
    <div>
      <MovieCard />
      <button onClick={MovieCard.handleClick}>Click Me</button>
    </div>
  );
};

export default MovieList;
