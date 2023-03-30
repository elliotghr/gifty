import React from "react";
import "./Success.css";

const Success = ({active}) => {
  return (
    <div className={`success-container ${active && "active"}`}>
      <p>Gif añadido a favoritos correctamente</p>
    </div>
  );
};

export default Success;
