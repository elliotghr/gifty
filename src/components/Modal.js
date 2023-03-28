import React from "react";
import "./Modal.css";

const Modal = ({ children, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="btn" onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
