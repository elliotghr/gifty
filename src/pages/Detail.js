import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { GifContext } from "../context/GifContext";
import Gif from "../components/Gif";

const Detail = () => {
  let { id } = useParams();
  const { gifs } = useContext(GifContext);
  const getGif = gifs.filter((el) => el.id === id)[0];

  return (
    <div>
      <Gif id={getGif.id} title={getGif.title} url={getGif.url}></Gif>
    </div>
  );
};

export default Detail;
