import { createSlice } from "@reduxjs/toolkit";

const DeleteSlice = createSlice({
  name: "deleteSlice",
  initialState: {
    deletedMovies: {
      movieID: 0,
    },
  },
  reducers: {
    updateDeletedMovies: (state, action) => {
      return {
        ...state,
        deletedMovies: action.payload,
      };
    },
  },
});

export const {updateDeletedMovies} = DeleteSlice.actions;

export default DeleteSlice.reducer;