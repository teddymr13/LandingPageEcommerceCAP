import React from 'react'
import img1 from '../../assets/images/product-2.jpg'
import img2 from '../../assets/images/product-3.jpg'
import img3 from '../../assets/images/product-4.jpg'
import img4 from '../../assets/images/product-5.jpg'
import img5 from '../../assets/images/product-6.jpg'
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
            <img src={img1} alt="" />
            <div>
              <p>Boy’s T-Shirt</p>
              <span>Price: $50.00</span> <br />
              <Link to="#">remove</Link>
            </div>
          </div>
        </td>
        <td><input type="number" value="1" min="1" /></td>
        <td>$50.00</td>
      </tr>
      <tr>
        <td>
          <div className="cart-info">
            <img src={img2} alt="" />
            <div>
              <p>Boy’s T-Shirt</p>
              <span>Price: $90.00</span> <br />
              <Link to="#">remove</Link>
            </div>
          </div>
        </td>
        <td><input type="number" value="1" min="1" /></td>
        <td>$90.00</td>
      </tr>
      <tr>
        <td>
          <div className="cart-info">
            <img src={img3} alt="" />
            <div>
              <p>Boy’s T-Shirt</p>
              <span>Price: $60.00</span> <br />
              <Link to="#">remove</Link>
            </div>
          </div>
        </td>
        <td><input type="number" value="1" min="1" /></td>
        <td>$60.00</td>
      </tr>
      <tr>
        <td>
          <div className="cart-info">
            <img src={img4} alt="" />
            <div>
              <p>Boy’s T-Shirt</p>
              <span>Price: $60.00</span> <br />
              <Link to="#">remove</Link>
            </div>
          </div>
        </td>
        <td><input type="number" value="1" min="1" /></td>
        <td>$60.00</td>
      </tr>
      <tr>
        <td>
          <div className="cart-info">
            <img src={img5} alt="" />
            <div>
              <p>Boy’s T-Shirt</p>
              <span>Price: $60.00</span> <br />
              <Link to="#">remove</Link>
            </div>
          </div>
        </td>
        <td><input type="number" value="1" min="1" /></td>
        <td>$60.00</td>
      </tr>
    </table>
    <div className="total-price">
      <table>
        <tr>
          <td>Subtotal</td>
          <td>$200</td>
        </tr>
        <tr>
          <td>Tax</td>
          <td>$50</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>$250</td>
        </tr>
      </table>
      <Link to="#" className="checkout btn">Proceed To Checkout</Link>
    </div>
  </div>
  )
}

export default Cart