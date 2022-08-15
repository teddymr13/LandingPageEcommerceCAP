import React from 'react'
import DataProductDetail from './dataProductDetail'

function productDetail() {
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
            <form>
              <div>
                <select>
                  <option value="Select Size" selected>
                    Select Size
                  </option>
                  <option value="1">32</option>
                  <option value="2">42</option>
                  <option value="3">52</option>
                  <option value="4">62</option>
                </select>
                <span><i className="bx bx-chevron-down"></i></span>
              </div>
            </form>
            <form className="form">
              <input type="text" placeholder="1" />
              <a href="cart.html" className="addCart">Add To Cart</a>
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

export default productDetail