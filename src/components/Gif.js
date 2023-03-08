import React from "react";
import { NavLink } from "react-router-dom";

const Gif = ({ id, title, url }) => {
  return (
    <div key={id}>
      <p>{title}</p>
      <NavLink to={`/gif/${id}`}>
        <img src={url} alt={title}></img>
      </NavLink>
    </div>
  );
};

export default Gif;
