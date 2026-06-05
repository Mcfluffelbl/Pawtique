import { useState, useEffect } from "react";
import { usePagination } from "../hooks/UsePagination";
import Pagination from "../components/Pagination";

import "../styles/CatApi.css";

function CatApi() {
  const [cats, setCats] = useState([]);

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

  const {
    currentItems,
    currentPage,
    totalPages,
    nextPage,
    previousPage,
  } = usePagination(cats, 6);

  return (
    <div className="catcard-container">
      <h1>Cat Breeds</h1>

      {cats.map((cat) => (
        <div key={cat.id}>
          <h2>{cat.name}</h2>
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