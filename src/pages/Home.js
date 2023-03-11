import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ListOfGifs from "../components/ListOfGifs";
import SearchTrends from "../components/SearchTrends";
import useGif from "../hook/useGif";

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
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Busca tu gif aqui"
          onChange={handleChange}
        ></input>
      </form>
      {ls ? <h2>Última busqueda: {ls}</h2> : <h2>Bienvenido a Gifty</h2>}
      <ListOfGifs gifs={gifs}></ListOfGifs>
      <SearchTrends></SearchTrends>
    </div>
  );
};

export default Home;
