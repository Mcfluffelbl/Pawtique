import { useState, useEffect } from "react";
// Hook for pagination logic (splits the list into pages)
import { usePagination } from "../hooks/UsePagination";
// Pagination component 
import Pagination from "../components/Pagination";

// CSS for the catcards
import "../styles/CatApi.css";

function CatApi() {
  // State that stores all the cats from the cat API
  const [cats, setCats] = useState([]);

  // Fetches data from the cat API
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

  // Pagination logic
  const {
    currentItems,
    currentPage,
    totalPages,
    nextPage,
    previousPage,
  } = usePagination(cats, 10);

  return (
    <div className="catcard-container">
      <h1>Cat Breeds</h1>

      {/* Render all the cats */}
      {currentItems.map((cat) => (
        <div key={cat.id}>
          <h2>{cat.name}</h2>
          {/* Cat img with fallback */}
          <img
            src={
              cat.reference_image_id
                ? `https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`
                : catSilhouette
            }
            alt={cat.name}
            width="200"
            onError={(e) => {
              e.target.src = catSilhouette;
            }}
          />
          <p>{cat.origin}</p>
          <p>{cat.temperament}</p>
        </div>
      ))}
      
      {/* Pagination controls */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onNext={nextPage}
        onPrevious={previousPage}
      />

    </div>
  )
}

export default CatApi