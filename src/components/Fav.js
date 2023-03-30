import React, { useState } from "react";
import useActiveSuccess from "../hook/useActiveSuccess";
import useGlobalFavs from "../hook/useGlobalFavs";
import { useGlobalUser } from "../hook/useGlobalUser";
import "./Fav.css";
import Login from "./Login";
import Modal from "./Modal";
import Success from "./Success";

const Fav = ({ id, title, url }) => {
  const [modal, setModal] = useState(false);
  const { isLoggedIn } = useGlobalUser();
  const { favs, saveFav, handleDeleteFav } = useGlobalFavs();
  const { active, activeSuccess } = useActiveSuccess();
  
  const isFav = favs.some((el) => el.id === id);
  const emojiFav = !isFav ? "❤" : "✖";

  const handleClick = (e) => {
    if (!isLoggedIn) {
      return setModal(true);
    }
    if (emojiFav === "❤") {
      const data = { id, title, url };
      saveFav({ data });
      activeSuccess();
    } else {
      const isDelete = window.confirm(
        `Estás seguro de eliminar el gif "${title}" de tus favoritos?`
      );
      if (isDelete) {
        handleDeleteFav({ id });
      }
    }
  };

  const handleClose = () => {
    setModal(false);
  };

  const handleLogin = () => {
    setModal(false);
  };

  return (
    <>
      <button className="button-fav" onClick={handleClick}>
        <span aria-label="Fav-Gif" role="img">
          {emojiFav}
        </span>
      </button>
      <Success active={active}></Success>
      {modal && (
        <Modal onClose={handleClose}>
          <h2>Inicia sesión</h2>
          <Login onLogin={handleLogin}></Login>
        </Modal>
      )}
    </>
  );
};

export default Fav;
