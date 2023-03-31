import React from "react";
import { Link } from "./ButtonStyled";

const Button = ({ children, href }) => {
  return <Link to={href}>{children}</Link>;
};

export default Button;
