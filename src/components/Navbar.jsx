import { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <nav className="navbar">
      <h1 className="logo">
        Shop<span>Zone</span>
      </h1>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/shop">Shop</Link>

        <Link to="/contact">Contact</Link>

        <Link to="/cart">
          Cart
          <span className="cart-badge">
            {cartItems.length}
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;