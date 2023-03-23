import { useContext, useEffect, useState } from "react";
import { GifContext } from "../context/GifContext";
import fetchGif from "../services/fetchGif";

const useGif = ({ keyword = null, rating = "g" } = {}) => {
  const INITIAL_PAGE = 0;
  const { gifs, setGifs } = useContext(GifContext);
  const [page, setPage] = useState(INITIAL_PAGE);

  const keywordToUse = keyword || localStorage.getItem("keyword") || "random";

  useEffect(() => {
    fetchGif({ keywordToUse, rating }).then((res) => setGifs(res));
    if (keyword) localStorage.setItem("keyword", keywordToUse);
  }, [keyword, keywordToUse, setGifs, rating]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;

    fetchGif({ keywordToUse, rating, page }).then((res) =>
      setGifs((prevGifs) => [...prevGifs, ...res])
    );
  }, [keywordToUse, page, setGifs, rating]);

  return { gifs, page, setPage };
};

export default useGif;
