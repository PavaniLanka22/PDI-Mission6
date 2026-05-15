import { useContext } from "react";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const location = useLocation();

  const from =
    location.state?.from?.pathname || "/";

  const handleLogin = () => {
    login();

    navigate(from, { replace: true });
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Login</h2>

        <p>Login required to continue.</p>

        <button
          className="login-btn"
          onClick={handleLogin}
        >
          Login as Guest
        </button>
      </div>
    </div>
  );
};

export default Login;