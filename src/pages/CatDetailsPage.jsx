import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/CatDetailsPage.css"

function CatDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
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

    <button className="cat-details-back-btn" onClick={() => navigate("/cats")}
      >
            &larr; Back to Cats
    </button>
    
    <section className="cat-hero">
      
      <div className="cat-hero-text">
        <h1>
          Meet <span>{cat.name}</span>
        </h1>

        <p>
          {cat.description}
        </p>
      </div>

      <img
        src={
          cat.reference_image_id
            ? `https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`
            : ""
        }
        alt={cat.name}
      />
    </section>

    <section className="cat-details-info">
      <h3>Breed Info</h3>

      <p><span>Origin:</span> {cat.origin}</p>
      <p><span>Temperament:</span> {cat.temperament}</p>
      <p><span>Life Span:</span> {cat.life_span} years</p>
      <p><span>Weight:</span> {cat.weight.metric} kg</p>

      <div className="cat-details-ratings">
        <div>
          <h4>Intelligence</h4>
          <p>{cat.intelligence}</p>
        </div>

        <div>
          <h4>Affection</h4>
          <p>{cat.affection_level}</p>
        </div>

        <div>
          <h4>Energy</h4>
          <p>{cat.energy_level}</p>
        </div>

        <div>
          <h4>Dog Friendly</h4>
          <p>{cat.dog_friendly}</p>
        </div>

        <div>
          <h4>Child Friendly</h4>
          <p>{cat.child_friendly}</p>
        </div>

        <div>
          <h4>Grooming</h4>
          <p>{cat.grooming}</p>
        </div>

        <div>
          <h4>Health Issues</h4>
          <p>{cat.health_issues}</p>
        </div>

        <div>
          <h4>Social Needs</h4>
          <p>{cat.social_needs}</p>
        </div>

        <div>
          <h4>Stranger Friendly</h4>
          <p>{cat.stranger_friendly}</p>
        </div>

        <div>
          <h4>Vocalisation</h4>
          <p>{cat.vocalisation}</p>
        </div>

        <div>
          <h4>Shedding Level</h4>
          <p>{cat.shedding_level}</p>
        </div>

        <div>
          <h4>Adaptability</h4>
          <p>{cat.adaptability}</p>
        </div>

      </div>

      <button className="adopt-btn">Adopt Me</button>
    </section>

  </div>
  )
}

export default CatDetailsPage;