import { createContext, useState } from "react";

const FavsContext = createContext();

const ls = JSON.parse(localStorage.getItem("favs")) ?? [];

const FavProvider = ({ children }) => {
  const [favs, setFavs] = useState(ls);

  const data = { favs, setFavs };
  return <FavsContext.Provider value={data}>{children}</FavsContext.Provider>;
};

export { FavProvider };
export { FavsContext };
