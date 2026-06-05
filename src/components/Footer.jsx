// Import CSS For styling of footer
import "../styles/Footer.css";

// React Router for intern links
import { Link } from 'react-router-dom'

// Import bootsraps addon-icons
import {
  Instagram,
  Facebook,
  Twitter,
  Pinterest,
} from "react-bootstrap-icons";

// Footer komponent
function Footer() {
  return (
     <footer className="footer">
      <div className="footer-container">

        {/* Logo + Description + Social Icons */}
        <div className="footer-section">
          <h2 className="footer-logo">🐾 Pawtique</h2>

          <p className="footer-text">
            Making cats happy and helping them find loving homes.
          </p>
          
          <div className="social-icons">
            <Facebook />
            <Instagram />
            <Twitter />
            <Pinterest />
          </div>
        </div>

        {/* Navigation / Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>

          <Link to="/">Home</Link>
          <Link to="/cats">Cats</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/article">Article</Link>
          <Link to="/owners">Owners</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Support / Help */}
        <div className="footer-section">
          <h4>Help & Support</h4>

          <Link to="/faq">FAQ</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4>Contact Us</h4>

          <p>hello@pawtique.com</p>
          <p>+1 (555) 123-4567</p>
          <p>123 Main Street, City, State 12345</p>
        </div>
      </div>

      {/* COPYRIGHT Row */}
      <div className="footer-bottom">
        <p>© 2026 Pawtique. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer