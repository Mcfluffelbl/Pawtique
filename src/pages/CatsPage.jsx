import { useState, useEffect } from "react"
import Pagination from "../components/Pagination";
import { usePagination } from "../hooks/UsePagination";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Search } from "react-bootstrap-icons";

import CatImage from "../components/CatImage";
import "../styles/CatsPage.css"

function CatsPage() {
  // Stores all cats fetched from API
  const [cats, setCats] = useState([]);
  // Search input state (filters cats by name)
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  // Cart functions from context
  const { cart, addToCart, removeFromCart } = useCart();

  // Fetch cats once when page loads
  useEffect(() => {
    async function fetchCats() {
      try {
        const response = await fetch(
          "https://api.thecatapi.com/v1/breeds?limit=200"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch cats");
        }

        const data = await response.json();
        setCats(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchCats();
  }, []);

  // Filter cats based on search input
  const filteredCats = cats.filter((cat) =>
    cat.name.toLowerCase().includes(search.toLowerCase())
  );
  
  // Pagination runs on filtered results
  const {
    currentItems,
    currentPage,
    totalPages,
    nextPage,
    previousPage,
  } = usePagination(filteredCats, 10);

  return (
  <div className="cats-page">
    
    {/* HERO SECTION */}
    <section className="hero-cats-section">
      <div className="hero-text">
        <h1>
          Adopt Your <span>New Best Friend</span>
        </h1>
        <p>Browse adorable cats looking for a loving home.</p>
      </div>

      <img
        src="https://cdn.royalcanin-weshare-online.io/yj8HdHUBRYZmsWpckZgn/v1/ec9h-how-to-care-for-a-kitten-or-cat-hero-new-resized"
        alt="Cute cat"
      />
    </section>

     {/* SEARCH BAR */}
     <section className="top-controls">
        <div className="search-Cat-bar">
          <Search className="search-icon"/>
          {/* Controlled input connected to search state */}
          <input
            type="text"
            placeholder="Search for cats..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </section>

    {/* CAT GRID */}
    <section className="cats-list-section">
      {currentItems.map((cat) => {
        const isInCart = cart.some((item) => item.id === cat.id);

        return (
        <div className="cat-card" key={cat.id}>
          {/* Cat image component with fallback handling */}
          <CatImage
            src={`https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`}
            alt={cat.name}
          />

        <div className="cat-info">
          <h3>{cat.name}</h3>
          <p>
            Origin: {cat.origin}
            <br />
            Temperament: {cat.temperament}
          </p>

          {/* Navigate to details page */}
          <button onClick={() => navigate(`/catDetailPage/${cat.id}`)}>
            Meet Me
          </button>

          {/* Add/Remove from cart toggle button */}
          <button
            className={isInCart ? "in-cart-btn" : "adopt-btn"}
            onClick={() => {
              if (isInCart) {
                removeFromCart(cat.id);
              } else {
                addToCart(cat);
              }
            }}
          >
            {isInCart ? " Remove from Cart" : "Adopt Me"}
          </button>
        </div>
      </div>
    );
     })}
    </section>

    {/* PAGINATION CONTROLS */}
    <div className="page">
      <button onClick={previousPage} disabled={currentPage === 1}>
        Previous Page
      </button>

      <h5>
        Page {currentPage} of {totalPages}
      </h5>

      <button
        onClick={nextPage} disabled={currentPage === totalPages} > Next Page
      </button>
    </div>

    <section className="adoption-commercial-section">
      <h2>
        Give a cat a home, and they'll give you love forever.
      </h2>
        <button>Start Adopting Now</button>
      </section>
    </div>
  )
}

export default CatsPage;