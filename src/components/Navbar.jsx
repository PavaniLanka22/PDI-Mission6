import { useContext } from "react";

import { Link } from "react-router-dom";

import { CartContext } from "../context/CartContext";

import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  const { isLoggedIn, logout } =
    useContext(AuthContext);

  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Shop<span>Zone</span>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/shop">Shop</Link>

        <Link to="/contact">Contact</Link>

        <Link to="/cart">
          Cart
          <span className="cart-badge">
            {totalItems}
          </span>
        </Link>

        {isLoggedIn ? (
          <button
            className="logout-btn"
            onClick={logout}
          >
            Logout
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;