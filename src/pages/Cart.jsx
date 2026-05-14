import { useContext } from "react";

import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart } =
    useContext(CartContext);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div className="container">
      <h1 className="section-title">
        Shopping Cart
      </h1>

      <div className="cart-container">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <div className="cart-left">
              <img
                src={item.thumbnail}
                alt={item.title}
              />

              <div className="cart-info">
                <h3>{item.title}</h3>

                <div className="cart-price">
                  ${item.price}
                </div>
              </div>
            </div>

            <button
              className="delete-btn"
              onClick={() =>
                removeFromCart(item.id)
              }
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="total-box">
        <h2>Total: ${total}</h2>
      </div>
    </div>
  );
};

export default Cart;