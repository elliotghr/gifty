import React, { useEffect, useState } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import { useGlobalUser } from "../hook/useGlobalUser";
import "./Login.css";

const initialForm = {
  username: "",
  password: "",
};

const Login = ({ onLogin }) => {
  const [form, setForm] = useState(initialForm);
  const navigate = useNavigate();
  const { login, isLoggedIn } = useGlobalUser();

  const match = useMatch("/login");

  useEffect(() => {
    if (isLoggedIn && match) navigate("/");
    if (isLoggedIn  && !match) onLogin();
  }, [isLoggedIn, navigate, match, onLogin]);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ form });
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="form-login-container" onSubmit={handleSubmit}>
      <label>User name</label>
      <input
        placeholder="Introduce tu username"
        onChange={handleChange}
        name="username"
        value={form.username}
      ></input>
      <label>Password</label>
      <input
        type="password"
        placeholder="Escribe aqui tu password"
        onChange={handleChange}
        name="password"
        value={form.password}
      ></input>
      <button className="btn">Login</button>
    </form>
  );
};

export default Login;
