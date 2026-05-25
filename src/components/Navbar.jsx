import { Link } from 'react-router-dom'

import { Cart } from 'react-bootstrap-icons'

function Navbar() {
  return (
    <nav className="navbar">

      <h2>🐾Pawtique</h2>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/cats">Cats</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart"><Cart /></Link>
      </div>

    </nav>
  )
}

export default Navbar