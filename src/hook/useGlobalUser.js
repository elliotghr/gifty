import { useCallback, useContext } from "react";
import { UserContext } from "../context/UserContext";
import access from "../json/access.json";

export const useGlobalUser = () => {
  const { jwt, setJwt } = useContext(UserContext);
  //   Método para hacer login

  const login = useCallback(
    ({ form }) => {
      // Simulación de login
      // Idealmente se debe enviar un post al servidor, el cual nos devolverá el JWT
      if (
        form.username === access.username &&
        form.password === access.password
      ) {
        setJwt(access.jwt);
      } else alert("error");
    },
    [setJwt]
  );

  const logout = useCallback(() => {
    setJwt(null);
  }, [setJwt]);

  return {
    isLoggedIn: Boolean(jwt),
    login,
    logout,
  };
};
