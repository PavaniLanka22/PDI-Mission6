import { useState } from "react";

import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] =
    useState(() => {
      return (
        localStorage.getItem("auth") ===
        "true"
      );
    });

  const login = () => {
    setIsLoggedIn(true);

    localStorage.setItem("auth", "true");
  };

  const logout = () => {
    setIsLoggedIn(false);

    localStorage.removeItem("auth");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;