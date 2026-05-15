import { useContext } from "react";

import { Link } from "react-router-dom";

import { CartContext } from "../context/CartContext";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
  } = useContext(CartContext);

  const total = cartItems.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container">
      <h1 className="section-title">
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty</h2>

          <Link to="/shop">
            <button className="add-btn">
              Continue Shopping
            </button>
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-container">
            {cartItems.map((item) => (
              <div
                className="cart-item"
                key={item.id}
              >
                <div className="cart-left">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                  />

                  <div className="cart-info">
                    <h3>{item.title}</h3>

                    <div className="cart-price">
                      $
                      {(
                        item.price *
                        item.quantity
                      ).toFixed(2)}
                    </div>

                    <p>
                      Quantity: {item.quantity}
                    </p>
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
            <h2>
              Total: ${total.toFixed(2)}
            </h2>

            <Link to="/checkout">
              <button className="add-btn">
                Proceed To Checkout
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;