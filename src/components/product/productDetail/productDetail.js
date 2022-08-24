import React from 'react'
// import DataProductDetail from './dataProductDetail'
import { Link, useParams } from 'react-router-dom'
import { auth } from '../../../firebase/configFirebase';
import { useAuthState} from 'react-firebase-hooks/auth';
import {image} from '../../../image'
import { useFurnitureById } from '../../../hooks/useFurniture'

function ProductDetail() {
  const {productId} = useParams()
  const [user] = useAuthState(auth); 
  const data = useFurnitureById(productId);
  const furnitureById = data.APIData
  console.log(furnitureById)
  return (
    <section className="section product-detail">
        <div className="details container">
          <div className="left image-container">
            <div className="main">
              <img src={image[furnitureById.urlImage]} id="zoom" alt="" />
            </div>
          </div>
          <div className="right">
            <span>Home/Sofa</span>
            <h1>{furnitureById.title}</h1>
            <div className="price">
              {furnitureById.price ? "$" : ""} {furnitureById.price}
            </div>
            <form className="form">
              <input className="boxFromProduct" type="number" min="0" defaultValue={"1"} />
              {user ? (
                <Link to="/cart" className="addCart">Add To Cart</Link>
              ):(
                <Link to="/signin" className="addCart">Add To Cart</Link>
              )}
             
            </form>
            {furnitureById.stock ? (<div className="btnStock"> {furnitureById.stock} In Stock </div>) : ""}
            <h3>Product Detail</h3>
            <p>
             {furnitureById.description}
            </p>
          </div>
        </div>
      </section>
  )
}

export default ProductDetail