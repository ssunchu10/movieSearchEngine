import React from "react";
import MovieCard from "./MovieCard";
// import { useEffect, useState } from "react";
// import SearchBar from "./SearchBar";

const MovieList = (props) => {
  const moviesSearchResult = props.movieResult;

  return (
    <div>
      {moviesSearchResult.map((movie) => {
        return (
          <MovieCard
            key={movie.id}
            popularity={movie.popularity}
            title={movie.title}
            overview={movie.overview}
            posterPath={movie.poster_path}
          />
        );
      })}
    </div>
  );
};

export default MovieList;
