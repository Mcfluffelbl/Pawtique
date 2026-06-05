import { useCart } from "../context/CartContext";
import { useState } from "react";
import { Link } from "react-router-dom";

import CatImage from "../components/CatImage";
import "../styles/CartPage.css";


// Icons from react-bootstrap-icons
import {
  ArrowLeft,
  Cart,
  Lock,
  ShieldLockFill,
  Recycle,
  EmojiSmileFill,
  Trash,
} from "react-bootstrap-icons";

/*
  CartPage component
  - Displays all cats added to cart
  - Handles checkout modal + order form
  - Calculates subtotal, shipping, and total
*/
function CartPage() {
  // Get cart data and functions from context
  const { cart, removeFromCart, clearCart } = useCart();
  // Derived state
  const isEmpty = cart.length === 0;
  const catCount = cart.length;
  // Pricing logic
  const subtotal = cart.length * 10;
   // Create a string of all cat breed names in cart
  const breeds = cart.map((cat) => cat.name).join(", ");

  // Shipping logic
  let shipping = 0;

  if (subtotal > 0 && subtotal < 49) {
  shipping = 4.99;
  } else if (subtotal >= 50) {
  shipping = 0;
  }

  // Final total price
  const total = subtotal + shipping;

  // Modal state (checkout popup)
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form state for checkout
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  // Handles input changes in checkout form
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  // Handles form submission (checkout)
  function handleSubmit(e) {
    e.preventDefault();

    if (isEmpty) {
      alert("Your cart is empty!");
      return;
    }

    alert(
      `Order confirmed!\n\nName: ${formData.name}\nEmail: ${formData.email}\nAddress: ${formData.address}\n\nTotal: $${total.toFixed(2)}\nCat breeds adopted: ${breeds} \nCats adopted: ${catCount}\n\nThank you for adopting a cat from Pawtique!`
    );

    // Clear cart after successful order
    clearCart();

    // Close modal
    setIsModalOpen(false);

    // Reset form fields
    setFormData({
      name: "",
      email: "",
      address: "",
    });
  }

  return (
    <div className="cart-page">

      {/* PAGE HEADER */}
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
            <CatImage
              src={`https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`}
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

          {/* Continue shopping button */}
          <Link to="/cats">
            <button className="continue-btn">
              <ArrowLeft />
              Continue Shopping
            </button>
          </Link>

        </div>

        {/* RIGHT SIDE - ORDER SUMMARY */}
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

          <button className="checkout-btn" onClick={() => {
            if (isEmpty) {
              alert("Your cart is empty! Add items before checkout.");
              return;
              }

              setIsModalOpen(true);
            }}
          >
            <Lock />
            Proceed to Checkout
          </button>
          
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

      {/* CHECKOUT MODAL */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="cancel-button" onClick={() => setIsModalOpen(false)}>
                Cancel
            </button>

            <h2>Checkout</h2>

            <form onSubmit={handleSubmit}>
              <h4>Name:</h4>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <h4>Email:</h4>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <h4>Address:</h4>
              <textarea
                name="address"
                placeholder="Delivery address"
                value={formData.address}
                onChange={handleChange}
                required
              />

              <button type="submit" className="checkout-btn">Place Order</button>
            </form>
          </div>
        </div>
      )} 

    </div>
  )
}

export default CartPage;