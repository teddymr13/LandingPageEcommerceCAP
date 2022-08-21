import React from 'react';
import DataProduct from './dataProduct';


function Product() { 
  return (
    <section className="section new-arrival">
        <div className="title">
            <h1>NEW PRODUCT</h1>
            <p>All the latest picked from designer of our product</p>
        </div>

        <div className="product-center">
            {DataProduct.map((product, index) => (
            <div className="product-item" key={index}>
                <div className="overlay">
                    <a href="/productdetail" className="product-thumb">
                        <img src={product.image} alt="" />
                    </a>
                    <span className="discount">{product.discount}</span>
                </div>
                <div className="product-info">
                    <span>{product.title}</span>
                    <a href="/productdetail">{product.desc}</a>
                    <h4>{product.price}</h4>
                </div>
            </div>
            ))}
        </div>
    </section>
  )
}

export default Product