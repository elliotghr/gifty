import React, { memo } from "react";
import { Link, NavLink, useMatch, useNavigate } from "react-router-dom";
import { useGlobalUser } from "../hook/useGlobalUser";
import "./Nav.css";

const Nav = () => {
  const { isLoggedIn } = useGlobalUser();
  const { logout } = useGlobalUser();
  const navigate = useNavigate();

  const match = useMatch("/login");

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

  const Fav = ({ isLoggedIn }) => {
    if (isLoggedIn) {
      return <NavLink to="/favs">Favs</NavLink>;
    } else {
      return null;
    }
  };

  const content = match ? null : Logged({ isLoggedIn });
  return (
    <nav className="gf-header">
      {Fav({ isLoggedIn })}
      {content}
    </nav>
  );
};

export default memo(Nav);
