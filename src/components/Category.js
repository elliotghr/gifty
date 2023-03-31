import React from "react";
import { TrendsContentUl, TrendsContentLink } from "./CategoryStyle";

const Category = ({ title, data }) => {
  return (
    <div className="mb-2">
      <h2 className="mb-2">{title}</h2>
      <TrendsContentUl>
        {data.map((el, index) => (
          <li key={el}>
            <TrendsContentLink index={index} to={`/search/${el}`}>
              {el}
            </TrendsContentLink>
          </li>
        ))}
      </TrendsContentUl>
    </div>
  );
};

export default Category;
