import { useContext, useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();

  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="container">
      <div className="product-details">
        <img
          src={product.thumbnail}
          alt={product.title}
        />

        <div className="details-content">
          <h2>{product.title}</h2>

          <p>{product.description}</p>

          <div className="price">
            ${product.price}
          </div>

          <button
            className="btn add-btn"
            onClick={() => addToCart(product)}
          >
            🛒 Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;