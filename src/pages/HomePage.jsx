import { ArrowRight } from 'react-bootstrap-icons'

function HomePage() {
  return (
  <div className="home-page">
    <div className="home-image">
      <h1>Find your purrfect companion</h1>
      <h4>Adopt a cat or shop everything you cat needs to live happily.</h4>
      <button>Adopt a Cat</button>
      <button>Browse Shop</button>
    </div>
    <div className="featured-content">
      <br />
      <h2>Featured Cats</h2>
      <h4>View all cats <ArrowRight /></h4>
      <br />
    </div>
    <div className="popular-content">
      <h2>Shop Popular Picks</h2>
      <h4>View all products <ArrowRight /></h4>
      <br />
    </div>
    <div className="catcare-content">
      <h2>Cat Care Tips</h2>
      <h4>Read all articles <ArrowRight /></h4>
      <br />
    </div>
  </div>
  )
}

export default HomePage