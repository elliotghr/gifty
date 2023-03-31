import { Helmet } from "react-helmet";
import Form from "../components/Form";
import LazyTrends from "../components/LazyTrends";
import ListOfGifs from "../components/ListOfGifs";
import useGif from "../hook/useGif";
import "./Home.css";

const Home = () => {
  const lsKeyword = localStorage.getItem("keyword");
  const { gifs } = useGif();

  return (
    <>
      <Helmet>
        <title>Home || Gifty</title>
      </Helmet>
      <section>
        <article className="form-container mb-2">
          <Form></Form>
        </article>
        <div className="gifs-n-trends-container">
          <div>
            {lsKeyword ? (
              <h2> 🔎 Última busqueda: {lsKeyword}</h2>
            ) : (
              <h2>Bienvenido a Gifty</h2>
            )}
            <ListOfGifs gifs={gifs}></ListOfGifs>
          </div>
          <article className="trends-container">
            <LazyTrends></LazyTrends>
          </article>
        </div>
      </section>
    </>
  );
};

export default Home;
