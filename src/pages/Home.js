import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ListOfGifs from "../components/ListOfGifs";
import SearchTrends from "../components/SearchTrends";
import fetchGif from "../services/fetchGif";

const Home = () => {
  const [gifs, setGifs] = useState([]);
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    fetchGif().then((res) => setGifs(res));
  }, []);

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
      <ListOfGifs gifs={gifs}></ListOfGifs>
      <SearchTrends></SearchTrends>
    </div>
  );
};

export default Home;
