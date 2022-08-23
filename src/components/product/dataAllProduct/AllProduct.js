import React from 'react'
import { Link } from 'react-router-dom'
import {image} from '../../../image'
import {useFurniture} from '../../../hooks/useFurniture'

function AllProduct() {
  const data = useFurniture();
  const furnitures = data.APIData 
  
  return (
    <section className="section all-products" id="products">
      <div className="top container">
        <h1>All Product</h1>
        <form>
          <select>
            <option value="1">Sort Default</option>
            <option value="2">Sort By Price</option>
            <option value="3">Sort By Lamp</option>
            <option value="4">Sort By Chair</option>
            <option value="5">Sort By CupBoard</option>
          </select>
          <span><i className="bx bx-chevron-down"></i></span>
        </form>
      </div>
      <div className="product-center container">
      {furnitures.map((product, index) => (
        <div className="product-item" key={index}>
          <Link to={"/product/" + product.id}>
            <div className="overlay">
                <div className="product-thumb">
                  <img src={image[product.urlImage]} alt="" />
                </div>
                {product.discount ? (<span className="discount"> {product.discount}%</span>) : ""}
            </div>
            <div className="product-info">
              <span>{product.category}</span>
              <div>{product.title}</div>
              <h4>{product.price ? "$" : ""}{product.price}</h4>
            </div>
            </Link>
        </div>
        ))}
      </div>
    </section>
  )
}

export default AllProduct