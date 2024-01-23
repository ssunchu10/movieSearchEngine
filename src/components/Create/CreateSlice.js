import { createSlice } from "@reduxjs/toolkit";

const CreateSlice = createSlice({
  name: "createSlice",
  initialState: {
    createdMovies: {
      movieTitle: "",
      movieOverview: "",
      moviePopularity: 0,
      moviePosterPath: "",
      movieVoteCount: 0,
      movieReleaseDate: 0,
      movieVoteAverage: 0.0,
    },
  },
  reducers: {
    updateCreatedMovies: (state, action) => {
      return {
        ...state,
        createdMovies: action.payload,
      };
    },
  },
});

export const {updateCreatedMovies} = CreateSlice.actions;

export default CreateSlice.reducer;