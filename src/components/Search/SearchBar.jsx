import React from "react";
import "./SearchBar.css";
import { useDispatch, useSelector } from "react-redux";
import { getUpdatedTotalPageArray } from "../Page/PageSlice";
import { updateSearchInput, getUpdatedResults } from "./SearchSlice";

let SearchBar = () => {
  const searchState = useSelector((state) => state.searchState);

  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    dispatch(updateSearchInput(event.target.value));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // console.log("Came Here")
    dispatch(getUpdatedResults());
  };

  return (
    <div className="search-bar-container">
      <form>
        <input
          type="text"
          placeholder="Search here!"
          onChange={onChangeHandler}
          value={searchState.searchInput}
          className="search-input-container"
        ></input>
        <button
          type="Submit"
          onClick={onSubmitHandler}
          className="search-button-container"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
