import { createSlice } from "@reduxjs/toolkit";

const PageSlice = createSlice({
  name: "pageSlice",
  initialState: {
    totalPages: 0,
    totalResults: 0,
    currentPage: 1,
  },
  reducers: {
    updateTotalPages: (state, action) => {
      return { ...state, totalPages: action.payload };
    }
  },
});

export const {updateTotalPages} = PageSlice.actions;

export default PageSlice.reducer;