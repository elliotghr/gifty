import React from "react";
import useSingleGif from "../hook/useSingleGif";
import Button from "./Button";
import Gif from "./Gif";
import Spinner from "./Spinner";
import {
  AccessDeniedContainer,
  AccessDeniedButtonContainer,
} from "./AccessDeniedStyle";

const AccessDenied = () => {
  const { gif, loading } = useSingleGif("rUl6Wy5h0QzU0KpzLB");
  if (!gif) return;
  if (loading) return <Spinner></Spinner>;

  const { id, title, url } = gif;
  return (
    <AccessDeniedContainer>
      <h2>Acceso Denegado</h2>
      <Gif id={id} title={title} url={url}></Gif>
      <AccessDeniedButtonContainer>
        <Button href={"/"}>Go to home</Button>
        <Button href={"/login"}>Go to login</Button>
      </AccessDeniedButtonContainer>
    </AccessDeniedContainer>
  );
};

export default AccessDenied;
