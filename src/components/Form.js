import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormReducer } from "../hook/useFormReducer";

const RATINGS = ["g", "pg", "pg-13", "r"];

const Form = ({ initialKeyword = "", initialRating = "g" }) => {
  const navigate = useNavigate();

  const { keyword, rating, updateKeyword, updateRating } = useFormReducer({
    initialKeyword,
    initialRating,
  });

  const handleChange = (e) => {
    updateKeyword(e.target.value);
  };

  const handleChangeRating = (e) => {
    updateRating(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!keyword) {
      return;
    }
    navigate(`/search/${keyword}/${rating}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <button className="input-buscar">Buscar</button>
      <input
        className="input-text"
        type="search"
        placeholder="Escribe tu gif aqui..."
        onChange={handleChange}
        value={keyword}
      ></input>
      <select
        className="input-select"
        onChange={handleChangeRating}
        value={rating}
      >
        {RATINGS.map((el) => (
          <option key={el}>{el}</option>
        ))}
      </select>
      {/* <small style={{ color: "whitesmoke" }}>{times}</small> */}
    </form>
  );
};

export default Form;
