import { createContext, useState } from "react";

const GifContext = createContext();

const GifProvider = ({ children }) => {
  const [gifs, setGifs] = useState([]);

  const data = {
    gifs,
    setGifs,
  };
  return <GifContext.Provider value={data}>{children}</GifContext.Provider>;
};

export { GifProvider };
export { GifContext };
