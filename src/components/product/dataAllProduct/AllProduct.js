import React from 'react'
import { Link } from 'react-router-dom'

import DataAllProduct from '../dataAllProduct/dataAllProduct'

function AllProduct() {
  return (
    <section className="section all-products" id="products">
      <div className="top container">
        <h1>All Products</h1>
        <form>
          <select>
            <option value="1">Defualt Sorting</option>
            <option value="2">Sort By Price</option>
            <option value="3">Sort By Popularity</option>
            <option value="4">Sort By Sale</option>
            <option value="5">Sort By Rating</option>
          </select>
          <span><i className="bx bx-chevron-down"></i></span>
        </form>
      </div>
      <div className="product-center container">
      {DataAllProduct.map((allproduct, index) => (
        <div className="product-item" key={index}>
          <div className="overlay">
            <Link to="/productdetail" className="product-thumb">
              <img src={allproduct.image} alt="" />
            </Link>
            <span className="discount">{allproduct.discount}</span>
          </div>
          <div className="product-info">
            <span>{allproduct.title}</span>
            <Link to="/productdetail">{allproduct.desc}</Link>
            <h4>{allproduct.price}</h4>
          </div>
          <ul className="icons">
            <li><i className="bx bx-heart"></i></li>
            <li><i className="bx bx-search"></i></li>
            <li><i className="bx bx-cart"></i></li>
          </ul>
        </div>
        ))}
      </div>
    </section>
  )
}

export default AllProduct