import React from "react";

const Category = ({ title, data }) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {data.map((el) => (
          <li key={el}>
            <a href={`/search/${el}`}>{el}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
