import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import Fav from "./Fav";
import "./Gif.css";
const Gif = ({ id, title, url }) => {
  return (
    <div className="Gif" key={id}>
      <div className="Gif-buttons">
        <Fav id={id} title={title} url={url}></Fav>
      </div>
      <NavLink to={`/gif/${id}`} className="Gif-link">
        <h4>{title}</h4>
        <img src={url} alt={title}></img>
      </NavLink>
    </div>
  );
};

export default memo(Gif);
