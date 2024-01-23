import React from "react";
import MovieCard from "./MovieCard";
import moment from "moment";
import { useSelector } from "react-redux";
import "./Card.css";

const MovieList = () => {
  const searchState = useSelector((state) => state.searchState);
  const moviesSearchResult = searchState.searchResults;

  return (
    <div className="movieList-container">
      {moviesSearchResult.map((movie) => {
        const formattedDate = moment(movie.release_date).format("MM/DD/YYYY");
        return (
          <MovieCard
            key={movie.id}
            popularity={movie.popularity}
            title={movie.title}
            overview={movie.overview}
            releaseDate={formattedDate}
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
