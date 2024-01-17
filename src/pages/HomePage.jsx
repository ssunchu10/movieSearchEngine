import React from "react";
import SearchBar from "../components/Search/SearchBar";
import Page from "../components/Page/Page";
import MovieList from "../components/Card/MovieList";

export const HomePage = () => {
  return (
    <div>
      <SearchBar />
      <Page />
      <MovieList />
      <Page />
    </div>
  );
};
