import React from "react";
import { Helmet } from "react-helmet";
import Login from "../components/Login";

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Login || Gifty</title>
      </Helmet>
      <article className="login-container">
        <h2 className="mb-2">Incia Sesión</h2>
        <Login></Login>
      </article>
    </>
  );
};

export default LoginPage;
