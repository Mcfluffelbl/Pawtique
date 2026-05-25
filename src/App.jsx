import { Routes, Route, Link } from 'react-router-dom'

import HomePage from './pages/HomePage'
import CatsPage from './pages/CatsPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import CartPage from './pages/CartPage'

import Navbar from './components/Navbar'

function App() {
  return (
    <div>

      <Navbar />

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