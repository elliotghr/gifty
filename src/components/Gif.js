import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import Fav from "./Fav";
import "./Gif.css";
const Gif = ({ id, title, url }) => {
  return (
    <div className="gif-container" key={id}>
      <Fav id={id} title={title} url={url}></Fav>
      <p className="title">{title}</p>
      <NavLink to={`/gif/${id}`}>
        <img src={url} alt={title}></img>
      </NavLink>
    </div>
  );
};

export default memo(Gif);
