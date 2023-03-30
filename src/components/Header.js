import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../logo.png";

const Header = () => {
  return (
    <div className="nav-container">
      <NavLink to="/">
        <img className="logo" src={logo} alt="logo"></img>
        {/* <h1>Gifty</h1> */}
      </NavLink>
    </div>
  );
};

export default Header;
