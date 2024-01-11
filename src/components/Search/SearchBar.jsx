import React from "react";
import "./SearchBar.css"

let SearchBar = ({ onChangeSearchBar, onClickButton, searchedValue }) => {
  return (
    <div className="search-bar-container">
      <form onSubmit={onChangeSearchBar} >
        <input
          type="text"
          placeholder="Search here!"
          onChange={onChangeSearchBar}
          value={searchedValue}
          className="search-input-container"
        ></input>
        <button type="Submit" onClick={onClickButton} className="search-button-container">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
