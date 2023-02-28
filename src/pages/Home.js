import React, { useEffect, useState } from "react";
import Gif from "../components/Gif";
import fetchGif from "../services/fetchGif";

const Home = () => {
  const [gifs, setGifs] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    fetchGif().then((res) => setGifs(res));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setKeyword(e.target.value);
  };
  return (
    <div>
      <h1>Gif</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Busca tu gif aqui"
          onChange={handleChange}
        ></input>
      </form>
      {gifs.map(({ id, title, url }) => (
        <Gif key={id} id={id} title={title} url={url}></Gif>
      ))}
    </div>
  );
};

export default Home;
