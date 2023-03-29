import React from "react";
import ListOfGifs from "../components/ListOfGifs";
import useGlobalFavs from "../hook/useGlobalFavs";

const Favs = () => {
  const { favs } = useGlobalFavs();
  if (!favs) return;

  return (
    <>
      <h2>Gifs favoritos</h2>
      <ListOfGifs gifs={favs}></ListOfGifs>
    </>
  );
};

export default Favs;
