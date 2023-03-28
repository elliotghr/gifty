import React, { useState } from "react";
import { useGlobalUser } from "../hook/useGlobalUser";
import "./Fav.css";
import Login from "./Login";
import Modal from "./Modal";

const Fav = () => {
  const [modal, setModal] = useState(false);
  const { isLoggedIn } = useGlobalUser();
  const handleClick = (e) => {
    if (!isLoggedIn) {
      return setModal(true);
    }

    alert("hi");
  };

  const handleClose = () => {
    setModal(false);
  };
  return (
    <>
      <button className="button-fav" onClick={handleClick}>
        <span aria-label="Fav-Gif" role="img">
          ❤
        </span>
      </button>
      {modal && (
        <Modal onClose={handleClose}>
          <Login></Login>
        </Modal>
      )}
    </>
  );
};

export default Fav;
