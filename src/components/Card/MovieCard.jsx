import React from "react";
import "./Card.css";

const MovieCard = ({ popularity, title, overview, posterPath }) => {
  return (
    <div className="card-container">
      {/* <div className="card-image-container"> */}
      <img
        className="card-photo-container"
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt="Image Unavailable"
      />
      {/* </div> */}
      <div className="card-content-container">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{overview}</p>
        <p className="card-rating">Rating: {popularity}</p>
      </div>
    </div>
  );
};

export default MovieCard;
