import "../styles/CatsPage.css";

function CatsPage() {
  return (
    <div className="cats-page">

      <section className="hero-cats-section">

        <div className="hero-text">
          <h1>
            Adopt Your <span>New Best Friend</span>
          </h1>

          <p>
            Browse adorable cats looking for a loving home.
          </p>
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

        <div className="cat-card">
          <img
            src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=600&auto=format&fit=crop"
            alt="Whiskers"
          />

          <div className="cat-info">
            <h3>Whiskers</h3>

            <p>Male • Domestic Shorthair • Greece</p>

            <button>Meet Me</button>
          </div>
        </div>

        <div className="cat-card">
          <img
            src="https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=600&auto=format&fit=crop"
            alt="Milo"
          />

          <div className="cat-info">
            <h3>Milo</h3>

            <p>Male • Tabby • Bulgerian</p>

            <button>Meet Me</button>
          </div>
        </div>

        <div className="cat-card">
          <img
            src="https://images.unsplash.com/photo-1495360010541-f48722b34f7d?q=80&w=600&auto=format&fit=crop"
            alt="Daisy"
          />

          <div className="cat-info">
            <h3>Daisy</h3>

            <p>Female • Calico • Sweden</p>

            <button>Meet Me</button>
          </div>
        </div>

        <div className="cat-card">
          <img
            src="https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=600&auto=format&fit=crop"
            alt="Luna"
          />

          <div className="cat-info">
            <h3>Luna</h3>

            <p>Female • Persian • USA</p>

            <button>Meet Me</button>
          </div>
        </div>

      </section>

       <div classname="page">
          <button>last page</button>
          <h5>Page 1 of 10</h5>
          <button>next page</button>
        </div>

      <section className="adoption-commercial-section">

        <h2>
          Give a cat a home, and they’ll give you love forever.
        </h2>

        <button>Start Adopting Now</button>

      </section>

    </div>
  );
}

export default CatsPage;