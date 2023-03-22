import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [keyword, setKeyword] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${keyword}`);
  };
  const handleChange = (e) => {
    setKeyword(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Busca un gif</label>
      <input
        type="search"
        placeholder="Escribe aqui..."
        onChange={handleChange}
      ></input>
    </form>
  );
};

export default Form;
