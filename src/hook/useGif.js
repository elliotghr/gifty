import { useContext, useEffect } from "react";
import { GifContext } from "../context/GifContext";
import fetchGif from "../services/fetchGif";

const useGif = ({ keyword = null } = {}) => {
  const { gifs, setGifs } = useContext(GifContext);

  const keywordToUse = keyword || localStorage.getItem("keyword") || "random";

  useEffect(() => {
    fetchGif({ keywordToUse }).then((res) => setGifs(res));
    if (keyword) localStorage.setItem("keyword", keywordToUse);
  }, [keyword, keywordToUse, setGifs]);

  return { gifs };
};

export default useGif;
