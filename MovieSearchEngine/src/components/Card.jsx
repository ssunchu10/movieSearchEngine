import React from "react";
// import { useEffect, useState } from "react";
// import SearchBar from "./SearchBar";

const Card = (props) => {
  const moviesSearchResult = props.movieResult;


  return moviesSearchResult?.map((eachMovieInfoObj) => {
    const id = eachMovieInfoObj.id;
    const title = eachMovieInfoObj.title;
    const overview = eachMovieInfoObj.overview;
    return (
      <li key={id}>
        <p>{title}</p>
        <span>{overview}</span>
      </li>
    );
  });
};

export default Card;