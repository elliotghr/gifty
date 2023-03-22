import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const NavGif = () => {
  return (
    <div className="nav-container">
      <NavLink to="/">
        <h1>Gifty</h1>
      </NavLink>
    </div>
  );
};

export default NavGif;
