import React from "react";
import Gif from "./Gif";

const ListOfGifs = ({ gifs }) => {
  if (!gifs) return;
  return (
    <article className="gifs-container">
      {gifs.map(({ id, title, url }) => (
        <Gif key={id} id={id} title={title} url={url}></Gif>
      ))}
    </article>
  );
};

export default ListOfGifs;
