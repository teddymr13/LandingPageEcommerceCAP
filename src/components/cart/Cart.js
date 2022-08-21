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
              <p>Exlusive Sofa Color Grey</p>
              <span>Price: $800</span> <br />
              <Link to="#">remove</Link>
            </div>
          </div>
        </td>
        <td><input type="number" min="0" value="1"/></td>
        <td>$800</td>
      </tr>
      <tr>
        <td>
          <div className="cart-info">
            <img src={img2} alt="" />
            <div>
              <p>Exlusive CUPBOARD White</p>
              <span>Price: $150</span> <br />
              <Link to="#">remove</Link>
            </div>
          </div>
        </td>
        <td><input type="number" value="1" min="1" /></td>
        <td>$150</td>
      </tr>
      <tr>
        <td>
          <div className="cart-info">
            <img src={img3} alt="" />
            <div>
              <p>Chair Solid White and Black</p>
              <span>Price: $900</span> <br />
              <Link to="#">remove</Link>
            </div>
          </div>
        </td>
        <td><input type="number" value="1" min="1" /></td>
        <td>$900</td>
      </tr>
      <tr>
        <td>
          <div className="cart-info">
            <img src={img4} alt="" />
            <div>
              <p>Chair Solid Grey Modern </p>
              <span>Price: $500</span> <br />
              <Link to="#">remove</Link>
            </div>
          </div>
        </td>
        <td><input type="number" value="1" min="1" /></td>
        <td>$500</td>
      </tr>
      <tr>
        <td>
          <div className="cart-info">
            <img src={img5} alt="" />
            <div>
              <p>Lamp Concepts Solid Color Gold</p>
              <span>Price: $500</span> <br />
              <Link to="#">remove</Link>
            </div>
          </div>
        </td>
        <td><input type="number" value="1" min="1" /></td>
        <td>$500</td>
      </tr>
    </table>
    <div className="total-price">
      <table>
        <tr>
          <td>Subtotal</td>
          <td>$2.800</td>
        </tr>
        <tr>
          <td>Tax</td>
          <td>$100</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>$2.900</td>
        </tr>
      </table>
      <Link to="#" className="checkout btn">Proceed To Checkout</Link>
    </div>
  </div>
  )
}

export default Cart