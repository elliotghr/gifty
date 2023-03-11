import React from "react";
import { useParams } from "react-router-dom";
import ListOfGifs from "../components/ListOfGifs";
import useGif from "../hook/useGif";

const SearchPage = () => {
  let params = useParams();
  const { keyword } = params;

  const { gifs } = useGif({ keyword });

  return (
    <div>
      <ListOfGifs gifs={gifs}></ListOfGifs>
    </div>
  );
};

export default SearchPage;
