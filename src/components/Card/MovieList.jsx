import React from "react";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";
import "./Card.css";

const MovieList = () => {
  const searchState = useSelector((state) => state.searchState);
  const moviesSearchResult = searchState.searchResults;

  return (
    <div className="movieList-container">
      {moviesSearchResult.map((movie) => {
        // const year = movie.release_date.slice(0, 4)
        const year = movie.release_date;
        return (
          <MovieCard
            key={movie.id}
            popularity={movie.popularity}
            title={movie.title}
            overview={movie.overview}
            releaseDate={year}
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
