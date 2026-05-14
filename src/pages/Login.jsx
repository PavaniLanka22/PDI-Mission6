import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);

  return (
    <div>
      <h2>Login</h2>

      <button onClick={login}>
        Login as Guest
      </button>
    </div>
  );
};

export default Login;