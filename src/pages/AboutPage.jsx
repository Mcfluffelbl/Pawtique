import "../styles/AboutPage.css";

function AboutPage() {
  return (
    <div className="about-page">

      <section className="about-hero">

        <div className="about-text">

          <h3>ABOUT US 🐾</h3>

          <h1>
            We're here for <span>cats</span> and the
            people who love them.
          </h1>

          <p>
            Pawtique was founded with one simple mission:
            to make cats happy and help them find loving homes.
          </p>

        </div>

        <img
          src="https://images.unsplash.com/photo-1511044568932-338cba0ad803?q=80&w=1200&auto=format&fit=crop"
          alt="Cute cat"
        />

      </section>

      <section className="mission-section">

        <img
          src="https://images.unsplash.com/photo-1517451330947-7809dead78d5?q=80&w=1200&auto=format&fit=crop"
          alt="Woman holding cat"
        />

        <div className="mission-content">

          <h3>OUR MISSION 🐾</h3>

          <h1>
            Better lives for cats,
            happier homes for all.
          </h1>

          <p>
            We work with compassion and dedication to improve
            the lives of cats and their families.
          </p>

          <div className="missions-grid">

            <div className="mission-card">
              <h4>❤️ Adopt</h4>

              <p>
                Help cats find loving forever homes.
              </p>
            </div>

            <div className="mission-card">
              <h4>🛍️ Shop</h4>

              <p>
                Curated products for your feline friends.
              </p>
            </div>

            <div className="mission-card">
              <h4>📚 Educate</h4>

              <p>
                Provide resources and information to cat owners.
              </p>
            </div>

          </div>

        </div>

      </section>

      <section className="stats-section">

        <div className="stat-card">
          <h2>0</h2>
          <h4>Cats Adopted</h4>
          <p>Since our beginning</p>
        </div>

        <div className="stat-card">
          <h2>0</h2>
          <h4>Products Loved</h4>
          <p>By cats everywhere</p>
        </div>

        <div className="stat-card">
          <h2>0</h2>
          <h4>Happy Families</h4>
          <p>And counting</p>
        </div>

        <div className="stat-card">
          <h2>100%</h2>
          <h4>Commitment</h4>
          <p>To cat wellbeing</p>
        </div>

      </section>

    </div>
  );
}

export default AboutPage;