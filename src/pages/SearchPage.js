import React, { useCallback, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import Form from "../components/Form";
import ListOfGifs from "../components/ListOfGifs";
import useGif from "../hook/useGif";
import useIntersection from "../hook/useIntersection";

const SearchPage = () => {
  let params = useParams();
  const { keyword, rating } = params;
  const { gifs, setPage } = useGif({ keyword, rating });
  const length = gifs.length;
  const { target, isNearVisible } = useIntersection({ once: false });

  const getNextGifs = useCallback(
    () => setPage((prevPage) => prevPage + 1),
    [setPage]
  );

  useEffect(() => {
    if (isNearVisible) getNextGifs();
  }, [getNextGifs, isNearVisible]);

  return (
    <div>
      <Helmet>
        <title>{`${length} gifs de '${keyword}' || Gifty`}</title>
      </Helmet>
      <article className="form-container mb-5">
        <Form initialKeyword={keyword} initialRating={rating}></Form>
      </article>
      <h2>
        Resultados de la busqueda: '{keyword}'{" "}
        {rating ? `con clasificación '${rating}'` : null}
      </h2>
      <ListOfGifs gifs={gifs}></ListOfGifs>
      <div ref={target}></div>
      {/* <button onClick={getNextGifs} className="intersection">
        Click
      </button> */}
    </div>
  );
};

export default SearchPage;
