import "../styles/CartPage.css";

import {
  ArrowLeft,
  Cart,
  Lock,
  ShieldLockFill,
  Recycle,
  EmojiSmileFill,
  Trash,
} from "react-bootstrap-icons";

import { Link } from "react-router-dom";

function CartPage() {
  return (
    <div className="cart-page">

      <div className="cart-header">
        <h1>
          Your Cart <Cart />
        </h1>

        <p>Home / Cart</p>
      </div>

      <div className="cart-container">

        <div className="cart-items">

          <div className="cart-item">

            <img
              src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=600&auto=format&fit=crop"
              alt="tabby cat"
            />

            <div className="item-details">
              <h2>Tabby</h2>
              <p>Norway</p>
            </div>

            <div className="item-price">
              <h3>1</h3>
            </div>

            <div className="item-quantity">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>

            <div className="item-total">
              <h3>1</h3>
            </div>

            <Trash className="delete-icon" />

          </div>

          <div className="cart-item">

            <img
              src="https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=600&auto=format&fit=crop"
              alt="calico cat"
            />

            <div className="item-details">
              <h2>Calico</h2>
              <p>Germany</p>
            </div>

            <div className="item-price">
              <h3>1</h3>
            </div>

            <div className="item-quantity">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>

            <div className="item-total">
              <h3>1</h3>
            </div>

            <Trash className="delete-icon" />

          </div>

          <Link to="/shop">
            <button className="continue-btn">
              <ArrowLeft />
              Continue Shopping
            </button>
          </Link>

        </div>

        <div className="order-summary">

          <h2>Order Summary</h2>

          <div className="summary-line">
            <p>Subtotal</p>
            <p>2</p>
          </div>

          <div className="summary-line">
            <p>Shipping</p>
            <p>$4.99</p>
          </div>

          <hr />

          <div className="summary-total">
            <h3>Total</h3>
            <h3>2</h3>
          </div>

          <Link to="/checkout">
            <button className="checkout-btn">
              <Lock />
              Proceed to Checkout
            </button>
          </Link>

          <div className="cart-features">

            <div>
              <ShieldLockFill />
              <p>Secure Payment</p>
            </div>

            <div>
              <Recycle />
              <p>Easy Returns</p>
            </div>

            <div>
              <EmojiSmileFill />
              <p>100% Happy Pets</p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default CartPage;