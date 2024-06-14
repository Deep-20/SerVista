import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const storeTokenInLS = (serverToken) => {
    return localStorage.setItem("token", serverToken);
  };

  const isLoggedIn = !!token;

  //Tackiling the logout functionality
  const LogoutUser = () => {
    setToken("");
    localStorage.removeItem("token");
  };
  return (
    <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside the Provider");
  }
  return authContextValue;
};
