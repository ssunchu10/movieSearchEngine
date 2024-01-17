import React, { useState } from "react";
import "./Create.css";
import axios from "axios";
import moment from "moment";

const Create = () => {
  const [state, setState] = useState({
    movieTitle: "",
    movieOverview: "",
    moviePopularity: 0,
    moviePosterPath: "",
    movieVoteCount: 0,
    movieReleaseDate: 0,
    movieVoteAverage: 0.0,
  });

  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

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
    } = state;

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
    // console.log("Movies which is created", movies);

    try {
      const response = await axios.post("http://localhost:8000/create", {
        movieList: movies,
      });

      // console.log("API Response from Create API =>", response);
    } catch (error) {
      console.error("Error adding movie:", error);
    }
  };

  const enabled = state.movieTitle.length > 0 && state.movieOverview.length > 0;

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
