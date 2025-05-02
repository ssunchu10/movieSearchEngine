import React from "react";
import "./Card.css";
import { Rating } from "react-simple-star-rating";

const MovieCard = ({
  popularity,
  title,
  overview,
  releaseDate,
  posterPath,
  voteAverage,
  voteCount,
}) => {
  return (
    <div className="card-container">
      <img
        className="card-photo-container"
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt={title || "Image Unavailable"}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzEnIvoqFQz-_nzodrgFhq7y6eN4yJoQVZ4g&usqp=CAU";
          currentTarget.className = "card-photo-unavailable-container";
        }}
      />
      <div className="card-content-container">
        <div className="card-title">{title}</div>
        <div className="card-description">
          {overview?.length > 150
            ? `${overview.slice(0, 150)}...`
            : overview || "No description available."}
        </div>

        {releaseDate ? (
          <p className="card-date">Released on: ({releaseDate})</p>
        ) : null}
        <p className="card-rating">Popularity: {popularity}</p>
        <div className="vote-container">
          <Rating
            className="star-container"
            size={20}
            initialValue={Math.round(voteAverage / 2)}
            readonly={true}
          />
          <p className="vote-count-container">({voteCount})</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
