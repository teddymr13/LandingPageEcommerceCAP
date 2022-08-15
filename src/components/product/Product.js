import React from 'react'
import DataProduct from './dataProduct'


function Product() { 
  return (
    // New Product
    <section className="section new-arrival">
        <div className="title">
            <h1>NEW PRODUCT</h1>
            <p>All the latest picked from designer of our product</p>
        </div>

        <div className="product-center">
            {DataProduct.map((product) => (
            <>
            <div className="product-item">
                <div className="overlay">
                    <a href="productDetails.html" className="product-thumb">
                        <img src={product.image} alt="" />
                    </a>
                    <span class="discount">{product.discount}</span>
                </div>
                <div className="product-info">
                    <span>{product.title}</span>
                    <a href="productDetails.html">{product.desc}</a>
                    <h4>{product.price}</h4>
                </div>
                <ul className="icons">
                    <li><i className="bx bx-heart"></i></li>
                    <li><i className="bx bx-search"></i></li>
                    <li><i className="bx bx-cart"></i></li>
                </ul>
            </div>
            </>
            ))}
        </div>
    </section>
  )
}

export default Product