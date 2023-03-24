import React from "react";
import { NavLink } from "react-router-dom";
import useSingleGif from "../hook/useSingleGif";
import "./Error404.css";
import Spinner from "./Spinner";
const Error404 = () => {
  const { gif, loading } = useSingleGif("14uQ3cOFteDaU");

  if (loading) {
    return <Spinner></Spinner>;
  }
  if (!gif) return;

  const { title, url } = gif;

  return (
    <div className="error-container">
      <h2 className="mb-2">Error404</h2>
      <img className="mb-2" src={url} alt={title}></img>
      <NavLink className="error-home" to={"/"}>
        Regresar a Home
      </NavLink>
    </div>
  );
};

export default Error404;
