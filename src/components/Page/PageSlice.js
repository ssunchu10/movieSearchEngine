import { createSlice } from "@reduxjs/toolkit";
import { pageArray } from "../../utils/index";

export const getUpdatedTotalPageArray = (totalPages) => (dispatch) => {
  const noOfPageArray = pageArray(totalPages, 10);
  dispatch(updateTotalPageArray(noOfPageArray));
};

export const displayPage = (value) => (dispatch, getState) => {
  const appState = getState();
  const currentIndexOfTotalPagesArray =
    appState.page.currentIndexOfTotalPagesArray;
  const totalPagesArray = appState.page.totalPagesArray;

  if (value === 'previous' && currentIndexOfTotalPagesArray > 0) {
    dispatch(
      updatecurrentIndexOfTotalPagesArray(currentIndexOfTotalPagesArray - 1)
    );
  }

  if (value === 'next' && currentIndexOfTotalPagesArray < totalPagesArray.length - 1) { 
    dispatch(
      updatecurrentIndexOfTotalPagesArray(currentIndexOfTotalPagesArray + 1)
    );
  }

  // if(currentIndexOfTotalPagesArray > 0 || currentIndexOfTotalPagesArray < totalPagesArray.length - 1){                                                                   
  //   dispatch(updatecurrentIndexOfTotalPagesArray(currentIndexOfTotalPagesArray + value))                                     b
  // }
};

const PageSlice = createSlice({
  name: "pageSlice",
  initialState: {
    totalPages: 0,
    currentPage: 1,
    totalPagesArray: [],
    currentIndexOfTotalPagesArray: 0,
  },
  reducers: {
    updateTotalPages: (state, action) => {
      // console.log("in Update Total Pages:", action);
      return { ...state, totalPages: action.payload };
    },
    updateCurrentPage: (state, action) => {
      return {
        ...state,
        currentPage: action.payload,
      };
    },
    updateTotalPageArray: (state, action) => {
      return {
        ...state,
        totalPagesArray: action.payload,
      };
    },
    updatecurrentIndexOfTotalPagesArray: (state, action) => {
      return {
        ...state,
        currentIndexOfTotalPagesArray: action.payload,
      };
    },
  },
});

export const {
  updateTotalPages,
  updateCurrentPage,
  updateTotalPageArray,
  updatecurrentIndexOfTotalPagesArray,
} = PageSlice.actions;

export default PageSlice.reducer;
