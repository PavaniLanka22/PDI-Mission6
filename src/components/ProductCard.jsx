import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <img
        src={product.thumbnail}
        alt={product.title}
      />

      <div className="product-info">
        <h3>{product.title}</h3>

        <p>${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;