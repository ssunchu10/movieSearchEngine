import React, { useState } from "react";
import axios from "axios";
import "./Delete.css"

const Delete = () => {
  const [state, setState] = useState({
    movieID: ""
  });

  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { movieID } = state;

    const movies = {
      movieID
    };
    try{
      axios
      .delete("http://localhost:8080/create", movies)
      .then(() => console.log("Movie Deleted"));
    }catch(error){
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
          <div >
            <button className="delete-button-container" type="submit" onClick={handleSubmit}>
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Delete;
