import { useState, useEffect } from "react"
import "../styles/CatsPage.css"

function CatsPage() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    async function fetchCats() {
      try {
        const response = await fetch(
          "https://api.thecatapi.com/v1/breeds?limit=30"
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

  return (
    <div className="cats-page">
      <section className="hero-cats-section">
        <div className="hero-text">
          <h1>Adopt Your <span>New Best Friend</span></h1>
          <p>Browse adorable cats looking for a loving home.</p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1511044568932-338cba0ad803?q=80&w=1200&auto=format&fit=crop"
          alt="Cute cat"
        />
      </section>

      <section className="top-controls">
        <div className="search-bar">
          <input type="text" placeholder="Search for cats..." />
          <button>Search</button>
        </div>
      </section>

      <section className="cats-list-section">
        {cats.map((cat) => (
          <div className="cat-card" key={cat.id}>
            {cat.reference_image_id && (
              <img
                src={`https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`}
                alt={cat.name}
              />
            )}
            <div className="cat-info">
              <h3>{cat.name}</h3>
              <p>
                Origin: {cat.origin}
                <br />
                Temperament: {cat.temperament}
              </p>
              <button>Meet Me</button>
              <button>Adopt Me</button>
            </div>
          </div>
        ))}

      </section>
        <div className="page">
          <button>Last Page</button>
          <h5>Page 1 of 10</h5>
          <button>Next Page</button>
        </div>
      <section className="adoption-commercial-section">    
        <h2>Give a cat a home, and they'll give you love forever.</h2>
        <button>Start Adopting Now</button>
      </section>
    </div>
  )
}

export default CatsPage;