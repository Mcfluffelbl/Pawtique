import { ArrowLeft } from 'react-bootstrap-icons'
import { Cart } from 'react-bootstrap-icons'
import { Lock } from 'react-bootstrap-icons'

function CartPage() {
  return (
  <div>
    <h1>Cart Page</h1>
    <Cart />

    <div style={{ border: '1px solid black', padding: '10px', margin: '10px 0' }}>
      <h3>Product</h3>
      <h3>Quantity: 1</h3>
      <h3>Total: 1</h3>
      <button><ArrowLeft /> Continue Shopping</button>
    </div>

    <div style={{ border: '1px solid black', padding: '10px', margin: '10px 0' }}>
      <h3>Order Summary</h3>
      <br />

      <h4>Items: 3</h4>
      <h4>Shipping: Free</h4>
      <h4>Total: $100</h4>
      <button><Lock /> Checkout</button>
    </div>

    <div style={{ border: '1px solid black', padding: '10px', margin: '10px 0' }}>
      <h3>Secure Payment</h3>
      <h3>Easy Returns</h3>
      <h3>100% Happy Pets</h3>
    </div>

  </div>
  )
}

export default CartPage