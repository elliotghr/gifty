import React from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalUser } from "../hook/useGlobalUser";
import "./Fav.css";

const Fav = () => {
  const { isLoggedIn } = useGlobalUser();
  const navigate = useNavigate();
  const handleClick = (e) => {
    if (!isLoggedIn) {
      return navigate("/login");
    }

    alert("hi");
  };
  return (
    <button className="button-fav" onClick={handleClick}>
      <span aria-label="Fav-Gif" role="img">
        ❤
      </span>
    </button>
  );
};

export default Fav;
