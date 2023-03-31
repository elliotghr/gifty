import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../logo.png";
import { createPortal } from "react-dom";

const Header = () => {
  return createPortal(
    <div className="nav-container">
      <NavLink to="/">
        <img className="logo" src={logo} alt="logo"></img>
      </NavLink>
    </div>,
    document.getElementById("header-root")
  );
};

export default Header;
