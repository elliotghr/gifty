import React, { memo } from "react";
import { Link, useMatch } from "react-router-dom";
import { useGlobalUser } from "../hook/useGlobalUser";
import "./Nav.css";

const Nav = () => {
  const { isLoggedIn } = useGlobalUser();
  const { logout } = useGlobalUser();

  const match = useMatch("/login");

  const handleClick = (e) => {
    e.preventDefault();
    logout();
  };
  const Logged = ({ isLoggedIn }) => {
    return isLoggedIn ? (
      <Link onClick={handleClick} to="#">
        Logout
      </Link>
    ) : (
      <Link to="/login">Login</Link>
    );
  };

  const content = match ? null : Logged({isLoggedIn});
  return <nav className="gf-header">{content}</nav>;
};

export default memo(Nav);
