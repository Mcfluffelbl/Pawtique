import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function CatDetailsPage() {
  const { id } = useParams();
  const [cat, setCat] = useState(null);

  useEffect(() => {
    async function fetchCat() {
      try {
        const res = await fetch(
          `https://api.thecatapi.com/v1/breeds/${id}`
        );

        if (!res.ok) throw new Error("Failed to fetch cat");

        const data = await res.json();
        setCat(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchCat();
  }, [id]);

  if (!cat) return <p>Loading...</p>;

  return (
    <div className="cat-details-page">
      <section className="cat-details-header">
        <h1>{cat.name}</h1>
      </section>

      <section className="cat-details-content">
        <img
          src={
            cat.reference_image_id
              ? `https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`
              : ""
          }
          alt={cat.name}
        />

        <p>Origin: {cat.origin}</p>
        <p>Temperament: {cat.temperament}</p>
        <p>Description: {cat.description}</p>

        <button>Adopt Me</button>
      </section>
    </div>
  );
}

export default CatDetailsPage;