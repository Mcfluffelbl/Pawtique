import { Routes, Route, Link } from 'react-router-dom'

function Home() {
  return <h1>Home Page</h1>
}

function Cats() {
  return (
    <div>
      <h1>Cats Page</h1>
      <h2>Here you can find all the cats we have for sale!</h2>
    </div>
  )
}

function AboutPage() {
  return <h1>About Page</h1>
}

function ContactPage() {
  return <h1>Contact Page</h1>
}

function Cart() {
  return <h1>Cart Page</h1>
}

function App() {
  return (
    <div>

      <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="/cats">Cats</Link>
        <br />
        <Link to="/about">About</Link>
        <br />
        <Link to="/contact">Contact</Link>
        <br />
        <Link to="/cart">Cart</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cats" element={<Cats />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

    </div>
  )
}

export default App