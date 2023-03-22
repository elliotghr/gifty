import React from "react";
import { useParams } from "react-router-dom";
import Gif from "../components/Gif";
import Spinner from "../components/Spinner";
import useSingleGif from "../hook/useSingleGif";

const Detail = () => {
  let { id: key } = useParams();
  const { gif, loading } = useSingleGif(key);

  if (loading) {
    return <Spinner></Spinner>;
  }

  if (!gif) return;
  return (
    <div>
      <Gif id={gif.id} title={gif.title} url={gif.url}></Gif>
    </div>
  );
};

export default Detail;
