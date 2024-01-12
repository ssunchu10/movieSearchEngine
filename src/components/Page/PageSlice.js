import { createSlice } from "@reduxjs/toolkit";

const PageSlice = createSlice({
  name: "pageSlice",
  initialState: {
    totalPages: 0,
    currentPage: 1,
    totalPagesArray: [],
    currentIndexOfTotalPagesArray: 0
  },
  reducers: {
    updateTotalPages: (state, action) => {
      console.log("in Update Total Pages:", action.payload);
      return { ...state, totalPages: action.payload };
    },
    updateCurrentPage: (state, action) => {
      return{
        ...state, currentPage: action.payload
      };
    },
    updateTotalPageArray: (state, action) => {
      return{
         ...state, totalPagesArray: action.payload
      };
    },
    updatecurrentIndexOfTotalPagesArray: (state, action) => {
      return {
        ...state, currentIndexOfTotalPagesArray: action.payload
      }
    }
  },
});

export const { updateTotalPages, updateCurrentPage, updateTotalPageArray, updatecurrentIndexOfTotalPagesArray } = PageSlice.actions;

export default PageSlice.reducer;
