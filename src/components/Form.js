import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RATINGS = ["g", "pg", "pg-13", "r"];

const Form = ({ initialKeyword = "", initialRating }) => {
  const [keyword, setKeyword] = useState(initialKeyword);
  const [rating, setRating] = useState(initialRating);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${keyword}/${rating}`);
  };

  const handleChangeRating = (e) => {
    setRating(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Buscar</label>
      <input
        type="search"
        placeholder="Escribe tu gif aqui..."
        onChange={handleChange}
        value={keyword}
      ></input>
      <select onChange={handleChangeRating} value={rating}>
        {RATINGS.map((el) => (
          <option key={el}>{el}</option>
        ))}
      </select>
    </form>
  );
};

export default Form;
