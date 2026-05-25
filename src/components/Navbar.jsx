import "../styles/NavBar.css";

import { Link } from 'react-router-dom'

import { Cart } from 'react-bootstrap-icons'

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <Link to="/">🐾Pawtique</Link>
      </div>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/cats">Cats</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="linkleft">
        <Link to="/cart"><Cart /></Link>
      </div>

    </nav>
  )
}

export default Navbar