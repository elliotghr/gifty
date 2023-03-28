import React from "react";
import { NavLink } from "react-router-dom";
import "./Category.css"

const Category = ({ title, data }) => {
  return (
    <div className="trends-content mb-2">
      <h2 className="mb-2">{title}</h2>
      <ul>
        {data.map((el) => (
          <li key={el}>
            <NavLink to={`/search/${el}`}>{el}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
