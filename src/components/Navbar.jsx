import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom'
import { Cart } from 'react-bootstrap-icons'

// Import CSS for navbar
import "../styles/NavBar.css";

// Navbar component
function Navbar() {
  const { cart } = useCart();
  const catCount = cart.length;

  return (
    <nav className="navbar">

       {/* Navbar Logo */}
      <div className="logo">
        <Link to="/">🐾Pawtique</Link>
      </div>

       {/* Navbar Links */}
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/cats">Cats</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/article">Article</Link>
        <Link to="/owners">Owners</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
      </div>

      {/* Navbar Cart Link */}
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