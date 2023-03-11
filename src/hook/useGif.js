import { useEffect, useState } from "react";
import fetchGif from "../services/fetchGif";

const useGif = ({ keyword = null } = {}) => {
  const [gifs, setGifs] = useState([]);

  const keywordToUse = keyword || localStorage.getItem("keyword") || "random";

  useEffect(() => {
    fetchGif({ keywordToUse }).then((res) => setGifs(res));
    if (keyword) localStorage.setItem("keyword", keywordToUse);
  }, [keyword, keywordToUse]);

  return { gifs };
};

export default useGif;
