import React from "react";
import "./SearchBar.css";
import { useDispatch, useSelector } from "react-redux";
import { updateSearchInput, getUpdatedResults } from "./SearchSlice";

const SearchBar = () => {
  const searchInput = useSelector((state) => state.searchState.searchInput);
  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    dispatch(updateSearchInput(event.target.value));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(getUpdatedResults());
  };

  return (
    <div className="search-bar-container">
      <form className="search" onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="Search movies..."
          onChange={onChangeHandler}
          value={searchInput.trimEnd()}
          className="search-input-container"
        />
        <button type="submit" className="search-button-container">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
