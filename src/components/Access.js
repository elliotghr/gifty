import React from "react";
import { Helmet } from "react-helmet";
import ListOfGifs from "./ListOfGifs";

const Access = ({ favs }) => {
  return (
    <>
      <Helmet>
        <title>Favoritos || Gifty</title>
      </Helmet>
      <h2>Gifs favoritos</h2>
      <ListOfGifs gifs={favs}></ListOfGifs>
    </>
  );
};

export default Access;
