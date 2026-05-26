import { ArrowLeft } from 'react-bootstrap-icons'
import { Cart, Lock, ShieldLockFill, Recycle, EmojiSmileFill } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

function CartPage() {
  return (
  <div>
    <h1>Youre Cart <Cart /></h1>

    <div style={{ border: '1px solid black', padding: '10px', margin: '10px 0' }}>
      <h3>Product</h3>
      <h3>Quantity: 1</h3>
      <h3>Total: 1</h3>
      <Link to="/cats">
        <button><ArrowLeft /> Continue Shopping</button>
      </Link>
    </div>

    <div style={{ border: '1px solid black', padding: '10px', margin: '10px 0' }}>
      <h3>Order Summary</h3>
      <br />

      <h4>Items: 3</h4>
      <h4>Shipping: Free</h4>
      <h4>Total: $100</h4>
      <Link to="/checkout">
        <button><Lock /> Checkout</button>
      </Link>
    </div>

    <div style={{ border: '1px solid black', padding: '10px', margin: '10px 0' }}>
      <h3><ShieldLockFill /> Secure Payment</h3>
      <h3><Recycle /> Easy Returns</h3>
      <h3><EmojiSmileFill /> 100% Happy Pets</h3>
    </div>

  </div>
  )
}

export default CartPage