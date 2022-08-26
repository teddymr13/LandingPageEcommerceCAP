import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import {image} from '../../../src/image'
import { removeProductToCart } from '../../redux/card-product/action';

function Cart() {
  const dispatch = useDispatch();
  const { data } = useSelector(state => state.productOrder);
  const subTotalPrice = data.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );
  const tax = ((10 / 100) * subTotalPrice).toFixed(2);
  const totalPrice = (subTotalPrice + parseFloat(tax)).toFixed(2);

  return (
  <div className="container cart">
    <table>
     <thead>
      <tr>
        <th>Product</th>
        <th>Quantity</th>
        <th>Subtotal</th>
      </tr>
      </thead>
      {data.map((item, idx) => (
      <tbody key={idx}>  
      <tr>
        <td>
          <div className="cart-info">
            <img src={image[item.urlImage]} alt="" />
            <div>
              <p>{item.title}</p>
              <span>Price: {item.price}</span> <br />
              <Link to="#" onClick={() => dispatch(removeProductToCart(item))}>remove</Link>
            </div>
          </div>
        </td>
        <td><input type="number" min="0" defaultValue={item.quantity}/></td>
        <td>${subTotalPrice}</td>
      </tr>
      </tbody>
      ))}
    </table>
    <div className="total-price">
      <table>
        <thead>
        <tr>
          <td>Subtotal</td>
          <td>${subTotalPrice}</td>
        </tr>
        <tr>
          <td>Tax</td>
          <td>${tax}</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>${totalPrice}</td>
        </tr>
        </thead>
      </table>
      <Link to="#" className="checkout btn">Proceed To Checkout</Link>
    </div>
  </div>
  )
}

export default Cart