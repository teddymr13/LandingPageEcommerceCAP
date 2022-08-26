import React, {useEffect, useState} from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { auth } from '../../../firebase/configFirebase';
import { useAuthState} from 'react-firebase-hooks/auth';
import {image} from '../../../image'
import {useDispatch} from 'react-redux'
import { useFurnitureById } from '../../../hooks/useFurniture'

function ProductDetail() {
  const {productId} = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [user] = useAuthState(auth); 
  const data = useFurnitureById(productId);
  const furnitureById = data.APIData
  // console.log(furnitureById)
  useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	}, [furnitureById]);

  const [detailOrder, setDetailOrder] = useState({
    quantity: 0
  });

  const handleAddToCart = () => {
    const { id, urlImage, title, price, stock, description} = furnitureById;
    const { quantity } = detailOrder;
      const data = { id, urlImage, title, price, stock, description, quantity };
      if (quantity === 0) {
        alert('Please fill all field');
        console.log(quantity)
      } else {
        dispatch({
          type: 'ADD_TO_CART',
          value: data
        });
        navigate("/cart");
        alert('Added to cart');
      }
  };
  
  return (
    <section className="section product-detail" id="sctdetail">
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
              <input className="boxFromProduct" type="number" min="1" defaultValue={"0"} 
                onChange={e =>
                setDetailOrder({ ...detailOrder, quantity: Number(e.target.value) })
              }
              />
              {user ? (
                <button className="addCart"  onClick={handleAddToCart} >Add To Cart</button>
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