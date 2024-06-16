import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");

  const storeTokenInLS = (serverToken) => {
    return localStorage.setItem("token", serverToken);
  };

  const isLoggedIn = !!token;

  //Tackiling the logout functionality
  const LogoutUser = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  //JWT Authentication - to get the currently loggedIn user data
  const userAuthentication = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Response ok: ", response.ok);

      if (response.ok) {
        const data = await response.json();
        console.log("User Daata gotten", data.userData);
        setUser(data.userData);
      }
    } catch (error) {
      console.log("Error fetching user data");
    }
  };

  useEffect(() => {
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, storeTokenInLS, LogoutUser, user }}
    >
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
