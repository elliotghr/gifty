import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Gif from "../components/Gif";
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
      {gifs.map(({ id, title, url }) => (
        <Gif key={id} id={id} title={title} url={url}></Gif>
      ))}
    </div>
  );
};

export default SearchPage;
