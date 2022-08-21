import React from 'react'
import img7 from '../../assets/images/product-7.jpg'
import { Link } from 'react-router-dom'

function Cart() {
  return (
  <div className="container cart">
    <table>
      <tr>
        <th>Product</th>
        <th>Quantity</th>
        <th>Subtotal</th>
      </tr>
      <tr>
        <td>
          <div className="cart-info">
            <img src={img7} alt="" />
            <div>
              <p>Concepts Solid White and Red</p>
              <span>Price: $500</span> <br />
              <Link to="#">remove</Link>
            </div>
          </div>
        </td>
        <td><input type="number" min="0" value="1"/></td>
        <td>$500</td>
      </tr>
    </table>
    <div className="total-price">
      <table>
        <tr>
          <td>Subtotal</td>
          <td>$500</td>
        </tr>
        <tr>
          <td>Tax</td>
          <td>$100</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>$600</td>
        </tr>
      </table>
      <Link to="#" className="checkout btn">Proceed To Checkout</Link>
    </div>
  </div>
  )
}

export default Cart