import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="nav-container">
      <NavLink to="/">
        <h1>Gifty</h1>
      </NavLink>
    </div>
  );
};

export default Header;
