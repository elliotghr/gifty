import { useContext, useEffect, useState } from "react";
import { GifContext } from "../context/GifContext";
import getSingleGif from "../services/getSingleGif";

const useSingleGif = (id) => {
  const { gifs } = useContext(GifContext);
  const getGifFromState = gifs.filter((el) => el.id === id)[0];

  const [gif, setGif] = useState(getGifFromState);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!gif) {
      setLoading(true);
      getSingleGif(id)
        .then((res) => {
          setGif(res);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
        });
    }
  }, [gif, id]);

  return { gif, loading };
};

export default useSingleGif;
