import React from "react";

const Gif = ({ id, title, url }) => {
  return (
    <div key={id}>
      <p>{title}</p>
      <img src={url} alt={title}></img>
    </div>
  );
};

export default Gif;
