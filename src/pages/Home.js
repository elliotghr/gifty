import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ListOfGifs from "../components/ListOfGifs";
import SearchTrends from "../components/SearchTrends";
import useGif from "../hook/useGif";
import "./Home.css";

const Home = () => {
  const ls = localStorage.getItem("keyword");
  const [keyword, setKeyword] = useState(null);
  const navigate = useNavigate();

  const { gifs } = useGif();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${keyword}`);
  };
  const handleChange = (e) => {
    setKeyword(e.target.value);
  };
  return (
    <div>
      <article className="form-container mb-5">
        <form onSubmit={handleSubmit}>
          <label>Busca un gif</label>
          <input
            type="search"
            placeholder="Escribe aqui..."
            onChange={handleChange}
          ></input>
        </form>
      </article>
      {ls ? <h2>Última busqueda: {ls}</h2> : <h2>Bienvenido a Gifty</h2>}
        <ListOfGifs gifs={gifs}></ListOfGifs>
      <article className="trends-container">
        <SearchTrends></SearchTrends>
      </article>
    </div>
  );
};

export default Home;
