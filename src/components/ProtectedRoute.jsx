import { useContext } from "react";

import {
  Navigate,
  useLocation,
} from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } =
    useContext(AuthContext);

  const location = useLocation();

  // DEBUG (you can remove later)
  console.log("ProtectedRoute isLoggedIn:", isLoggedIn);

  if (!isLoggedIn) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location }}
      />
    );
  }

  return children;
};

export default ProtectedRoute;