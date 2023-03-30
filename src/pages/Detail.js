import React from "react";
import "./Detail.css";
import { useParams } from "react-router-dom";
import Gif from "../components/Gif";
import Spinner from "../components/Spinner";
import useSingleGif from "../hook/useSingleGif";
import { Helmet } from "react-helmet";

const Detail = () => {
  let { id: key } = useParams();
  const { gif, loading } = useSingleGif(key);

  if (loading) {
    return <Spinner></Spinner>;
  }

  if (!gif) return;
  return (
    <div className="detail-container">
      <Helmet>
        <title>{`${gif.title} || Gifty`}</title>
        <meta name="description" content={`Gif ${gif.title} || Gifty`} />
      </Helmet>
      <Gif id={gif.id} title={gif.title} url={gif.url}></Gif>
    </div>
  );
};

export default Detail;
