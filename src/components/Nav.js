import React, { memo } from "react";
import { Link, NavLink, useMatch, useNavigate } from "react-router-dom";
import { useGlobalUser } from "../hook/useGlobalUser";
import "./Nav.css";

const Nav = () => {
  const { logout, isLoggedIn } = useGlobalUser();
  const navigate = useNavigate();

  const match = useMatch("/login");
  const matchFav = useMatch("/favs");

  const handleClick = (e) => {
    e.preventDefault();
    logout();
    navigate("/");
  };
  const Logged = ({ isLoggedIn }) => {
    return isLoggedIn ? (
      <Link onClick={handleClick} to="/">
        Logout
      </Link>
    ) : (
      <Link to="/login">Login</Link>
    );
  };

  const Fav =
    isLoggedIn && !matchFav ? <NavLink to="/favs">Favoritos</NavLink> : null;

  const content = match ? null : Logged({ isLoggedIn });
  return (
    <nav className="gf-header mb-2">
      {content}
      {Fav}
    </nav>
  );
};

export default memo(Nav);
