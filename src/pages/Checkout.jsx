import { useContext } from "react";

import { CartContext } from "../context/CartContext";

const Checkout = () => {
  const { clearCart } =
    useContext(CartContext);

  const handlePlaceOrder = () => {
    alert("Order placed successfully!");

    clearCart();
  };

  return (
    <div className="container">
      <div className="checkout-card">
        <h1>Checkout</h1>

        <p>
          Your order is ready to be processed.
        </p>

        <button
          className="add-btn"
          onClick={handlePlaceOrder}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;