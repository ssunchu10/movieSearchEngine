import { createSlice } from "@reduxjs/toolkit";
import { updateTotalPages, updateCurrentPage } from "../Page/PageSlice";
import { getMovieResult } from "../../apis/searchMovie";

export const getUpdatedResults = () => async (dispatch, getState) => {
  const appState = getState();
  const { page, searchState } = appState;
  const { searchInput } = searchState;
  const apiResponse = await getMovieResult(searchInput, page.currentPage);
  dispatch(getSearchResponse(apiResponse.results));
  dispatch(updateTotalPages(apiResponse.total_pages));
  dispatch(updateTotalResults(apiResponse.total_results));
};

export const getUpdatedResultOnPageChange = (pageNumber) => async (dispatch, getState) => {
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
export const { updateSearchInput, getSearchResponse, updateTotalResults } = SearchSlice.actions;

export default SearchSlice.reducer;
