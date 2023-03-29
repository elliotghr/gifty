import React from "react";
import { Helmet } from "react-helmet";
import ListOfGifs from "../components/ListOfGifs";
import useGlobalFavs from "../hook/useGlobalFavs";

const Favs = () => {
  const { favs } = useGlobalFavs();
  if (!favs) return;

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

export default Favs;
