import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateDeletedMovies } from "./DeleteSlice";
import axios from "axios";
import "./Delete.css";

const Delete = () => {

  const deleteState = useSelector((state) => state.deleteState);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    dispatch(updateDeletedMovies({
      ...deleteState.deletedMovies,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { movieID } = deleteState.deletedMovies;

    const movies = [
      {
        movieID,
      },
    ];
    try {
      const response = await axios
        .post("http://localhost:8000/delete", { movieList: movies })
        .then((response) => {
          console.log("Response: ", response.status);
          if (response.status) {
            alert("Movie Deleted successfully");
          }
        });
    } catch (error) {
      console.error("Error deleting movie: ", error);
    }
  };

  return (
    <div>
      <h3 className="delete-title">Delete Movie </h3>
      <br />
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="input-description-container">ID*:</label>
            <input
              type="number"
              min={0}
              className="form-control"
              name="movieID"
              placeholder="Movie ID"
              onChange={handleInputChange}
            />
          </div>
          <br />
          <div>
            <button
              className="delete-button-container"
              type="submit"
              onClick={handleSubmit}
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Delete;
