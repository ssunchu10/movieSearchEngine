import React from "react";
import "./Header.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Delete from "../Delete/Delete";

const Header = ({ title }) => {
  return (
    <header className="header">
      <h5 className="title">{title}</h5>
      <nav>
        {process.env.REACT_APP_USE_EXPRESS_API === "true" ? (
          <Link to={"/"} className="home-container">
            Home
          </Link>
        ) : null}
        {process.env.REACT_APP_USE_EXPRESS_API === "true" ? (
          <Link to={"/create"} className="create-container">
            Create
          </Link>
        ) : null}
        {process.env.REACT_APP_USE_EXPRESS_API === "true" ? (
          <Link to={"/delete"} className="delete-container">
            Delete
          </Link>
        ) : null}
      </nav>
    </header>
  );
};

export default Header;
