import React from 'react'
import DataProductDetail from './dataProductDetail'
import { Link } from 'react-router-dom'
import { auth } from '../../../firebase/configFirebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function ProductDetail() {
  
  const [user] = useAuthState(auth);

  return (
    <section className="section product-detail">
     {DataProductDetail.map((productdetail, index ) => (
        <div className="details container" key={index}>
          <div className="left image-container">
            <div className="main">
              <img src={productdetail.image} id="zoom" alt="" />
            </div>
          </div>
          <div className="right">
            <span>Home/Sofa</span>
            <h1>{productdetail.title}</h1>
            <div className="price">{productdetail.price}</div>
            <form className="form">
              <input type="number" min="0" value="1" />
              {user ? (
                <Link to="/cart" className="addCart">Add To Cart</Link>
              ):(
                <Link to="/signin" className="addCart">Add To Cart</Link>
              )}
             
            </form>
            <h3>Product Detail</h3>
            <p>
             {productdetail.desc}
            </p>
          </div>
        </div>
        ))}
      </section>
  )
}

export default ProductDetail