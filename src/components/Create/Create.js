import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCreatedMovies } from "./CreateSlice";
import "./Create.css";
import axios from "axios";
import moment from "moment";

const Create = () => {

  const createState = useSelector((state) => state.createState);
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    dispatch(updateCreatedMovies({
      ...createState.createdMovies,
      [event.target.name]: event.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      movieTitle,
      movieOverview,
      moviePopularity,
      moviePosterPath,
      movieVoteCount,
      movieReleaseDate,
      movieVoteAverage,
    } = createState.createdMovies;

    const covertedTS = moment(movieReleaseDate).unix();

    const movies = [
      {
        movieTitle,
        movieOverview,
        moviePopularity,
        moviePosterPath,
        movieVoteCount,
        movieReleaseDate: covertedTS,
        movieVoteAverage,
      },
    ];

    try {
      const response = await axios.post("http://localhost:8000/create", {
        movieList: movies,
      }).then((response) => {
        console.log("Response: ", response.status);
        if(response.status){
          alert('Movie added successfully');
        }
      });
    } catch (error) {
      console.error("Error adding movie:", error);
    }
  };

  const enabled = createState.createdMovies.movieTitle.length > 0 && createState.createdMovies.movieOverview.length > 0;

  return (
    <div className="create-container">
      <h3 className="create-title">Create Movie </h3>
      <br />
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="input-description-container">Title*:</label>
            <input
              type="text"
              className="form-control"
              name="movieTitle"
              placeholder="type the movie title"
              onChange={handleInputChange}
            />
          </div>
          <br />
          <div className="form-group">
            <label className="input-description-container">Description*:</label>
            <input
              type="text"
              className="form-control"
              name="movieOverview"
              placeholder="type the movie description"
              onChange={handleInputChange}
            />
          </div>
          <br />
          <div className="form-group">
            <label className="input-description-container">Popularity:</label>
            <input
              type="number"
              min={0}
              className="form-control"
              name="moviePopularity"
              placeholder="type the movie popularity"
              onChange={handleInputChange}
            />
          </div>
          <br />
          <div className="form-group">
            <label className="input-description-container">Image Path:</label>
            <input
              type="text"
              className="form-control"
              name="moviePosterPath"
              placeholder="type the movie image-path"
              onChange={handleInputChange}
            />
          </div>
          <br />
          <div className="form-group">
            <label className="input-description-container">Vote Count:</label>
            <input
              type="number"
              min={0}
              className="form-control"
              name="movieVoteCount"
              placeholder="type the movie vote count"
              onChange={handleInputChange}
            />
          </div>
          <br />
          <div className="form-group">
            <label className="input-description-container">Release Date:</label>
            <input
              type="date"
              className="form-control"
              name="movieReleaseDate"
              placeholder="type the movie release date"
              onChange={handleInputChange}
            />
          </div>
          <br />
          <div className="form-group">
            <label className="input-description-container">Vote Average:</label>
            <input
              type="number"
              min={0}
              className="form-control"
              name="movieVoteAverage"
              placeholder="type the movie vote average"
              onChange={handleInputChange}
            />
          </div>
          <br />
          <div className="button-group">
            <button
              className="create-button-container"
              type="submit"
              disabled={!enabled}
              onClick={handleSubmit}
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
