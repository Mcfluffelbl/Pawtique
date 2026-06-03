import { link } from "react-router-dom";
import { useCart } from "../context/CartContext";

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
  const { cart, removeFromCart } = useCart();
  const isEmpty = cart.length === 0;
  const catCount = cart.length;
  const subtotal = cart.length * 10;

  let shipping = 0;

  if (subtotal > 0 && subtotal < 49) {
  shipping = 4.99;
  } else if (subtotal >= 50) {
  shipping = 0;
  }

  const total = subtotal + shipping;

  return (
    <div className="cart-page">

      <div className="cart-header">
        <h1>
          Your Cart <Cart />
        </h1>
      </div>

      <div className="cart-container">

        <div className="cart-items">

          {isEmpty ? (
          <div className="empty-cart">
            <h2>Your cart is empty</h2>
            <p>Browse our adorable cats and add them to your cart!</p>
          </div>
        ) : null}

          {cart.map((cat) => (
          <div className="cart-item" key={cat.id}>
            <img src={`https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`}
                 alt={cat.name}
             />

            <div className="item-details">
              <h2>{cat.name}</h2>
              <p>{cat.origin}</p>
            </div>

            <div className="item-quantity">
              <span>1</span>
            </div>

            <Trash className="delete-icon" onClick={() => removeFromCart(cat.id)}/>
          </div>
))}

          <Link to="/cats">
            <button className="continue-btn">
              <ArrowLeft />
              Continue Shopping
            </button>
          </Link>

        </div>

        <div className="order-summary">

          <h2>Order Summary</h2>

          <div className="summary-line">
            <p>Items ({catCount})</p>
            <p>{subtotal.toFixed(2)}</p>
          </div>

          <div className="summary-line">
            <p>Shipping</p>
            <p>{shipping === 0 ? "Free" : `${shipping}`}</p>
          </div>

          {subtotal < 49 && subtotal > 0 && (
          <p>Add ${(49 - subtotal).toFixed(2)} more for free shipping!</p>
          )}

          <hr />

          <div className="summary-total">
            <h3>Total</h3>
            <h3>{total.toFixed(2)}</h3>
          </div>

          {isEmpty ? (
            <button className="checkout-btn" onClick={() => alert("Your cart is empty! Browse our cats to add some.")}>
              <Lock />
              Proceed to Checkout
            </button>
          ) : (
            <Link to="/checkout">
              <button className="checkout-btn"><Lock />Proceed to Checkout</button>
            </Link>
          )}
          
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