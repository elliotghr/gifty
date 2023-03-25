import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalUser } from "../hook/useGlobalUser";
import "./Login.css"

const initialForm = {
  username: "",
  password: "",
};

const Login = () => {
  const [form, setForm] = useState(initialForm);
  const navigate = useNavigate();
  const { login, isLoggedIn } = useGlobalUser();

  useEffect(() => {
    if (isLoggedIn) navigate("/");
  }, [isLoggedIn, navigate]);

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
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Inicia Sesión</h2>
      <input
        placeholder="username"
        onChange={handleChange}
        name="username"
        value={form.username}
      ></input>
      <input
        type="password"
        placeholder="password"
        onChange={handleChange}
        name="password"
        value={form.password}
      ></input>
      <button>Login</button>
    </form>
  );
};

export default Login;
