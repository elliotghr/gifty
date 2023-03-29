import { useContext } from "react";
import { FavsContext } from "../context/FavsContext";

const useGlobalFavs = () => {
  const { favs, setFavs } = useContext(FavsContext);

  const saveFav = ({ data }) => {
    const save = [...favs, data];
    setFavs(save);
    localStorage.setItem("favs", JSON.stringify(save));
  };

  const handleDeleteFav = ({ id }) => {
    const deleteFav = favs.filter((el) => el.id !== id);
    setFavs(deleteFav);
    localStorage.setItem("favs", JSON.stringify(deleteFav));
  };
  return { favs, saveFav, handleDeleteFav };
};

export default useGlobalFavs;
