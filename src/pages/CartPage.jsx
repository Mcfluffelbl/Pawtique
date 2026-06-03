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
  const subtotal = cart.length;
  const shipping = cart.length > 0 ? 1 : 0;
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
            <p>{subtotal.toFixed(2)}</p>
          </div>

          <div className="summary-line">
            <p>Shipping</p>
            <p>{shipping.toFixed(2)}</p>
          </div>

          <hr />

          <div className="summary-total">
            <h3>Total</h3>
            <h3>{total}</h3>
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