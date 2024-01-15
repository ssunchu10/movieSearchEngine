import React, { useState } from "react";
import axios from "axios";

const Delete = () => {
  const [state, setState] = useState({
    movieID: "",
    movieTitle: "",
    movieOverview: "",
  });

  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { movieID, movieTitle, movieOverview } = state;

    const movies = {
      movieID,
      movieTitle,
      movieOverview,
    };

    axios
      .delete("http://localhost:8080/create", movies)
      .then(() => console.log("Movie Deleted"))
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <br />
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div style={{ width: "30%" }} className="form-group">
            <input
              type="text"
              className="form-control"
              name="movieID"
              placeholder="Movie ID"
              onChange={handleInputChange}
            />
          </div>
          <br />
          <div style={{ width: "30%" }}>
            <button className="button-container" type="submit" onClick={handleSubmit}>
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Delete;
