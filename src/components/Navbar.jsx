import { useCart } from '../context/CartContext';

import "../styles/NavBar.css";

import { Link } from 'react-router-dom'

import { Cart } from 'react-bootstrap-icons'

function Navbar() {
  const { cart } = useCart();
  const catCount = cart.length;

  return (
    <nav className="navbar">

      <div className="logo">
        <Link to="/">🐾Pawtique</Link>
      </div>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/cats">Cats</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/article">Article</Link>
        <Link to="/owners">Owners</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="linkleft">
        <Link to="/cart" className="cart-link">
          <Cart className="cart-icon" />
          {catCount > 0 && (
            <span className="cart-count">
              {catCount}
            </span>
          )}
        </Link>
      </div>

    </nav>
  )
}

export default Navbar