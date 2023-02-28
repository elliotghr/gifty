import { useEffect, useState } from "react";
import fetchGif from "../services/fetchGif";

const GifResponse = ({ keyword = "random" } = {}) => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    fetchGif().then((res) => setGifs(res));
  }, []);
  return gifs;
};

export default GifResponse;
