import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = ({ title }) => {
  return (
    <header className="header">
      <div className="header-inner">
        <h1 className="title">{title}</h1>
        <nav className="navbar">
          <NavLink to="/" className="nav-link" end>
            Home
          </NavLink>
          <NavLink to="/create" className="nav-link">
            Create
          </NavLink>
          <NavLink to="/delete" className="nav-link">
            Delete
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
