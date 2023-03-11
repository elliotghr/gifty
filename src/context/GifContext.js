import { createContext, useState } from "react";

const GifContext = createContext();

const GifProvider = ({ chidlren }) => {
  const [gifs, setGifs] = useState([]);

  const data = {
    gifs,
    setGifs,
  };
  return <GifContext.Provider value={data}>{chidlren}</GifContext.Provider>;
};

export { GifProvider };
export { GifContext };
