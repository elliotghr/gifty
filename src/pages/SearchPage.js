import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ListOfGifs from "../components/ListOfGifs";
import fetchGif from "../services/fetchGif";

const SearchPage = () => {
  const [gifs, setGifs] = useState([]);
  let params = useParams();
  const { keyword } = params;

  useEffect(() => {
    fetchGif({ keyword }).then((res) => setGifs(res));
  }, [keyword]);

  return (
    <div>
      <ListOfGifs gifs={gifs}></ListOfGifs>
    </div>
  );
};

export default SearchPage;
