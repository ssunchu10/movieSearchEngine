import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "searchSlice",
  initialState: {
    searchInput: "",
  },
  reducers: {
    updateSearchInput: (state, action) => {
      return {
        ...state,
        searchInput: action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {updateSearchInput} = SearchSlice.actions;

export default SearchSlice.reducer;
