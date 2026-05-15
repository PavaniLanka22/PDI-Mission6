import {
  useEffect,
  useState,
} from "react";

import ProductCard from "../components/ProductCard";

const Shop = () => {
  const [products, setProducts] = useState(
    []
  );

  const [loading, setLoading] =
    useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            "Failed to fetch products"
          );
        }

        return res.json();
      })
      .then((data) => {
        setProducts(data.products);

        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);

        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <h2 className="loading-text">
        Loading products...
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
      <h1 className="section-title">
        Trending Products
      </h1>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;