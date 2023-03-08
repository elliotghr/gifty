import React from "react";
import Gif from "./Gif";

const ListOfGifs = ({ gifs }) => {
  if (!gifs) return;

  return gifs.map(({ id, title, url }) => (
    <Gif key={id} id={id} title={title} url={url}></Gif>
  ));
};

export default ListOfGifs;
