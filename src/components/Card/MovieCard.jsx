import React from "react";
import "./Card.css";

const MovieCard = ({ popularity, title, overview, posterPath }) => {
  return (
    <div className="card-container">
      <img
        className="card-photo-container"
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt={"Image Unavailable"}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzEnIvoqFQz-_nzodrgFhq7y6eN4yJoQVZ4g&usqp=CAU";
          currentTarget.className = "card-photo-unavailable-container";
        }}
      />
      <div className="card-content-container">
        <div className="card-title">{title}</div>
        <div className="card-description">{overview}</div>
        <p className="card-rating">Rating: {popularity}</p>
      </div>
    </div>
  );
};

export default MovieCard;
