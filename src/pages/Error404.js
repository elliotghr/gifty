import React from "react";
import { NavLink } from "react-router-dom";
import useSingleGif from "../hook/useSingleGif";
import "./Error404.css";
import Spinner from "../components/Spinner";
import Form from "../components/Form";
const Error404 = () => {
  const { gif, loading } = useSingleGif("14uQ3cOFteDaU");

  if (loading) {
    return <Spinner></Spinner>;
  }
  if (!gif) return;

  const { title, url } = gif;

  return (
    <div className="error-container">
      <Form></Form>
      <h2>
        <i>404</i>
      </h2>
      <p>Sometimes gettings lost isn´t that bad</p>
      <img className="mb-2" src={url} alt={title}></img>
      <NavLink className="btn" to={"/"}>
        Regresar a Home
      </NavLink>
    </div>
  );
};

export default Error404;
