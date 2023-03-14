import React, { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import ListOfGifs from "../components/ListOfGifs";
import useGif from "../hook/useGif";
import useIntersection from "../hook/useIntersection";

const SearchPage = () => {
  let params = useParams();
  const { keyword } = params;

  const { gifs, setPage } = useGif({ keyword });

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
      <h2>Resultados de la busqueda: {keyword}</h2>
      <ListOfGifs gifs={gifs}></ListOfGifs>
      <div ref={target}></div>
      {/* <button onClick={getNextGifs} className="intersection">
        Click
      </button> */}
    </div>
  );
};

export default SearchPage;
