import React from "react";
import { Link } from "react-router-dom";
import { useGlobalUser } from "../hook/useGlobalUser";
import "./Nav.css";

const Nav = () => {
  const { isLoggedIn } = useGlobalUser();
  const { logout } = useGlobalUser();

  const handleClick = (e) => {
    e.preventDefault();
    logout();
  };
  return (
    <nav className="gf-header">
      {isLoggedIn ? (
        <Link onClick={handleClick} to="#">
          Logout
        </Link>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
};

export default Nav;
