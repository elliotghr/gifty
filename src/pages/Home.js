import Form from "../components/Form";
import LazyTrends from "../components/LazyTrends";
import ListOfGifs from "../components/ListOfGifs";
import useGif from "../hook/useGif";
import "./Home.css";

const Home = () => {
  const lsKeyword = localStorage.getItem("keyword");
  const { gifs } = useGif();

  return (
    <div>
      <article className="form-container mb-5">
        <Form></Form>
      </article>
      {lsKeyword ? (
        <h2>Última busqueda: {lsKeyword}</h2>
      ) : (
        <h2>Bienvenido a Gifty</h2>
      )}
      <ListOfGifs gifs={gifs}></ListOfGifs>
      <article className="trends-container">
        <LazyTrends></LazyTrends>
      </article>
    </div>
  );
};

export default Home;
