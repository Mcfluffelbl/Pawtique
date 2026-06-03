import "../styles/Footer.css";

import { Link } from 'react-router-dom'

import {
  Instagram,
  Facebook,
  Twitter,
  Pinterest,
} from "react-bootstrap-icons";

function Footer() {
  return (
     <footer className="footer">
      <div className="footer-container">

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

        <div className="footer-section">
          <h4>Quick Links</h4>

          <Link to="/">Home</Link>
          <Link to="/cats">Cats</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-section">
          <h4>Help & Support</h4>

          <Link to="/faq">FAQ</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>

          <p>hello@pawtique.com</p>
          <p>+1 (555) 123-4567</p>
          <p>123 Main Street, City, State 12345</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Pawtique. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer