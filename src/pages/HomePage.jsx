import { Link } from "react-router-dom";
import "../styles/HomePage.css";
import { ArrowRight, Handbag, Newspaper } from "react-bootstrap-icons";

function HomePage() {
  return (
    <div className="home-page">

      <section className="hero-section">

        <div className="hero-text">
          <h1>
            Find your <span>purrfect</span> companion
          </h1>

          <p>
            Adopt a cat or shop everything your cat needs
            to live happily.
          </p>

          <div className="hero-buttons">
            <Link to="/cats">
              <button className="primary-btn">
                🐾 Adopt a Cat
              </button>
            </Link>
            <Link to="/shop">
              <button className="secondary-btn">
              Browse Shop
              </button>
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1511044568932-338cba0ad803?q=80&w=1200&auto=format&fit=crop"
            alt="Cute cat"
          />
        </div>

      </section>

      <section className="content-section">

        <div className="section-header">
          <h2>🐾 Featured Cats</h2>

          <Link to="/cats">
            <h4>
              View all cats <ArrowRight />
            </h4>
          </Link>
        </div>

        <div className="card-grid">

          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=600&auto=format&fit=crop"
              alt="cat"
            />

            <h3>Luna</h3>
            <p>Female • Persian</p>

            <button>Meet Me</button>
          </div>

          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=600&auto=format&fit=crop"
              alt="cat"
            />

            <h3>Milo</h3>
            <p>Male • Tabby</p>

            <button>Meet Me</button>
          </div>

          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=600&auto=format&fit=crop"
              alt="cat"
            />

            <h3>Oliver</h3>
            <p>Male • British Shorthair</p>

            <button>Meet Me</button>
          </div>

        </div>
      </section>

      <section className="content-section">

        <div className="section-header">
          <h2>
            <Handbag /> Shop Popular Picks
          </h2>

          <h4>
            View all products <ArrowRight />
          </h4>
        </div>

        <div className="card-grid">

          <div className="product-card">
            <img
              src="https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?q=80&w=600&auto=format&fit=crop"
              alt="cat food"
            />

            <h3>Whisker Crunch Food</h3>

            <p>$24.99</p>

            <button>Add to Cart</button>
          </div>

          <div className="product-card">
            <img
              src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=600&auto=format&fit=crop"
              alt="toy"
            />

            <h3>Feather Play Toy</h3>

            <p>$8.99</p>

            <button>Add to Cart</button>
          </div>

        </div>
      </section>

      <section className="content-section">

        <div className="section-header">
          <h2>
            <Newspaper /> Cat Care Tips
          </h2>

          <h4>
            Read all articles <ArrowRight />
          </h4>
        </div>

        <div className="tips-grid">

          <div className="tip-card">
            <img
              src="https://images.unsplash.com/photo-1511044568932-338cba0ad803?q=80&w=600&auto=format&fit=crop"
              alt="tips"
            />

            <div>
              <h3>How to Feed Kittens</h3>

              <p>
                A complete guide to healthy eating habits.
              </p>
            </div>
          </div>

          <div className="tip-card">
            <img
              src="https://images.unsplash.com/photo-1495360010541-f48722b34f7d?q=80&w=600&auto=format&fit=crop"
              alt="tips"
            />

            <div>
              <h3>Indoor Cat Safety</h3>

              <p>
                Keep your indoor cat safe and happy.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}

export default HomePage