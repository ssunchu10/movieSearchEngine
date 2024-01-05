import React from "react";

let SearchBar = ({ onChangeSearchBar, onClickButton, searchedValue }) => {
  return (
    <div>
      <form onSubmit={onChangeSearchBar}>
        <input
          type="text"
          placeholder="Search Here!"
          onChange={onChangeSearchBar}
          value={searchedValue}
        ></input>
        <button type="Submit" onClick={onClickButton}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
