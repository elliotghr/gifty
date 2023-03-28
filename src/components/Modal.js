import React from "react";
import "./Modal.css";
import ReactDOM from "react-dom";

const Modal = ({ children, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="btn-modal" onClick={onClose}>
          ❌
        </button>
        {children}
      </div>
    </div>
  );
};
export default function ModalPortal({ children, onClose }) {
  return ReactDOM.createPortal(
    <Modal onClose={onClose}>{children}</Modal>,
    document.getElementById("modal-root")
  );
}
