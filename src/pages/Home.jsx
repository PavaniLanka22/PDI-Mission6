import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="hero-wrapper">
      <div className="hero">
        <div className="hero-content">
          <h1>
            Upgrade Your Lifestyle With
            Premium Shopping
          </h1>

          <p>
            Discover cutting-edge products,
            exclusive collections, and the best
            shopping experience online.
          </p>

          <button
            className="hero-btn"
            onClick={() => navigate("/shop")}
          >
            Explore Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;