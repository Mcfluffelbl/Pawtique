import { Routes, Route, Link } from 'react-router-dom'

import HomePage from './pages/HomePage'
import CatsPage from './pages/CatsPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import CartPage from './pages/CartPage'

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
        <Route path="/" element={<HomePage />} />
        <Route path="/cats" element={<CatsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage />} />

        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>

    </div>
  )
}

export default App