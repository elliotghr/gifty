// Hacemos que emotion se encargue de la creación del elemento jsx para que pueda manejar sus estilos
/** @jsxImportSource @emotion/react */

import React from "react";
import useSingleGif from "../hook/useSingleGif";
import Spinner from "../components/Spinner";
import Form from "../components/Form";
import "./Error404.css";
import { css } from "@emotion/react";
import { Helmet } from "react-helmet";
import Button from "../components/Button";

// Tag template
// Hace un post procesado dentro de un stringg
const pageErroStyles = css`
  min-height: calc(100vh - var(--header-height));
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const codeErroStyles = css({
  color: "whitesmoke",
  "&:hover": {
    color: "gray",
  },
});

const Error404 = () => {
  const { gif, loading } = useSingleGif("14uQ3cOFteDaU");

  if (loading) return <Spinner></Spinner>;
  if (!gif) return;

  const { title, url } = gif;

  return (
    <>
      <Helmet>
        <title>Error 404 || Gifty</title>
      </Helmet>
      <div css={pageErroStyles}>
        <Form></Form>
        <h2>
          <i>404</i>
        </h2>
        <p css={codeErroStyles}>Sometimes gettings lost isn´t that bad</p>
        <img src={url} alt={title}></img>
        <Button href={"./"}>Go back home</Button>
      </div>
    </>
  );
};

export default Error404;
