import React from "react";
import "./Header.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Create from "../Create/Create";
import Delete from "../Delete/Delete";

const Header = ({ title }) => {
  return (
    <header className="header">
      <BrowserRouter>
        <h5 className="title">{title}</h5>
        <nav>
          {process.env.REACT_APP_USE_EXPRESS_API === "true" ? (
            <Link to={"/"} className="home-container">
              Home
            </Link>
          ) : null}
          {process.env.REACT_APP_USE_EXPRESS_API === "true" ? (
            <Link to={"/create"} className="create-container">
              <Routes>
                <Route path="/create" element={<Create />} />
              </Routes>
              Create
            </Link>
          ) : null}
          {process.env.REACT_APP_USE_EXPRESS_API === "true" ? (
            <Link to={"/delete"} className="delete-container">
              <Routes>
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/delete" element={<Delete />} />
              </Routes>
              Delete
            </Link>
          ) : null}
        </nav>
      </BrowserRouter>
    </header>
  );
};

export default Header;
