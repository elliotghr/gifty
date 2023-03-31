import styled from "@emotion/styled";
import { Link as LinkReactRouterDom } from "react-router-dom";
// Estilado de botón usando styled components
// usando elementos html
// const LinkStyled = styled.a`
// por función, estilando un componente (en este caso un Link)
export const Link = styled(LinkReactRouterDom)`
  width: auto;
  min-width: 5rem;
  padding: 0.6rem;
  margin-top: 1rem;
  border-radius: 1rem;
  transition: all 0.3s ease-in-out;
  background-color: blueviolet;
  color: whitesmoke;
  border: none;
  &:hover {
    cursor: pointer;
    opacity: 0.6;
    transition: opacity 0.3s ease-in-out;
  }
`;
