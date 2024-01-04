import React from "react";
import { useState, useEffect } from "react";
import Card from "./card";

let SearchBar = () => {
  const [searchInput, updateSearchInputData] = useState("");
  const [result, updateAPIResponseResult] = useState([]);

  const handleChange = (event) => {
    event.preventDefault();
    updateSearchInputData(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const fetchTrending = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchInput}&api_key=210c1a86f52296d71c06efcbac38c0c7&page=1 `
      );
      //   const movies = data.result.filter((result) => result.media_type === 'movie');
      const dataJ = await data.json();
      console.log(dataJ);
      updateAPIResponseResult(dataJ.results);
    };
    fetchTrending();
  };

  useEffect(() => {}, [result]);

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search Here!"
          onChange={handleChange}
          value={searchInput}
        ></input>
        <button type="Submit" onClick={handleSearch}>
          Search
        </button>
      </form>

      <Card movieResult={result} />
    </div>
  );
};

export default SearchBar;
