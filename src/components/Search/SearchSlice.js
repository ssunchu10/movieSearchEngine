import { createSlice } from "@reduxjs/toolkit";
import {
  updateTotalPages,
  updateCurrentPage,
  getUpdatedTotalPageArray,
} from "../Page/PageSlice";
import { getMovieResult } from "../../apis/searchMovie";

export const getUpdatedResults = () => async (dispatch, getState) => {
  const appState = getState();
  const { page, searchState } = appState;
  const { searchInput } = searchState;
  const apiResponse = await getMovieResult(searchInput, page.currentPage);
  if (apiResponse && Array.isArray(apiResponse.results)) {
    dispatch(getSearchResponse(apiResponse.results));
    dispatch(updateTotalPages(apiResponse.total_pages || 1));
    dispatch(getUpdatedTotalPageArray(apiResponse.total_pages || 1));
    dispatch(updateTotalResults(apiResponse.total_results || 0));
  } else {
    dispatch(getSearchResponse([]));
    dispatch(updateTotalResults(0));
  }
  
};

export const getUpdatedResultOnPageChange =
  (pageNumber) => async (dispatch, getState) => {
    dispatch(updateCurrentPage(pageNumber));

    const appState = getState();

    const apiResponse = await getMovieResult(
      appState.searchState.searchInput,
      pageNumber
    );

    dispatch(getSearchResponse(apiResponse.results));
    dispatch(updateTotalPages(apiResponse.total_pages));
  };

const SearchSlice = createSlice({
  name: "searchSlice",
  initialState: {
    searchInput: "",
    searchResults: [],
    totalResults: 0,
  },
  reducers: {
    updateSearchInput: (state, action) => {
      // console.log("Updated Action: ", action);

      // console.log("Old State: ", state);
      return {
        ...state,
        searchInput: action.payload,
      };
    },
    getSearchResponse: (state, action) => {
      return {
        ...state,
        searchResults: action.payload,
      };
    },
    updateTotalResults: (state, action) => {
      return {
        ...state,
        totalResults: action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateSearchInput, getSearchResponse, updateTotalResults } =
  SearchSlice.actions;

export default SearchSlice.reducer;
