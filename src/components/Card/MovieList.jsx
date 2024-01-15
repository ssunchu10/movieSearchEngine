import React from "react";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";
import "./Card.css"

const MovieList = () => {
  const searchState = useSelector((state) => state.searchState);
  const moviesSearchResult = searchState.searchResults;

  return (
    <div className="movieList-container">
      {moviesSearchResult.map((movie) => {
        return (
          <MovieCard
            key={movie.id}
            popularity={movie.popularity}
            title={movie.title}
            overview={movie.overview}
            posterPath={movie.poster_path}
            voteAverage={movie.vote_average}
            voteCount={movie.vote_count}
          />
        );
      })}
    </div>
  );
};

export default MovieList;
