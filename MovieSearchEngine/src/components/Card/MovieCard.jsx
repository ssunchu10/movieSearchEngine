import React from "react";

const MovieCard = ({ popularity, title, overview, posterPath }) => {
  return (
    <div>
      <img src={posterPath} alt="Image Unavailable" />
      <h3>{title}</h3>
      <p>{overview}</p>
      <p>Rating: {popularity}</p>
    </div>
  );
};

export default MovieCard;
