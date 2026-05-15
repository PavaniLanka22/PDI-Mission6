import {
  useContext,
  useEffect,
  useState,
} from "react";

import { useParams } from "react-router-dom";

import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();

  const { addToCart } =
    useContext(CartContext);

  const [product, setProduct] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    fetch(
      `https://dummyjson.com/products/${id}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            "Failed to fetch product"
          );
        }

        return res.json();
      })
      .then((data) => {
        setProduct(data);

        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);

        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <h2 className="loading-text">
        Loading product...
      </h2>
    );
  }

  if (error) {
    return (
      <h2 className="loading-text">
        {error}
      </h2>
    );
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
            onClick={() =>
              addToCart(product)
            }
          >
            🛒 Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;