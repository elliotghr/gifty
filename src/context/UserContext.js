import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [jwt, setJwt] = useState(null);
  const data = {
    jwt,
    setJwt,
  };
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export { UserProvider };
export { UserContext };
