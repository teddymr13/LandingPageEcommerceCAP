import React from 'react'
import DataLatestProduct from '../dataLatestProduct'
import { Link } from 'react-router-dom'

function LatestProductCart() {
  return (
    <section className="section featured">
       <div className="top container">
       <h1>Latest Products</h1>
        <Link to="/product" class="view-more">View more</Link>
       </div>
 
       <div className="product-center container">
       {DataLatestProduct.map((latestproduct, index ) => (
         <div className="product-item" key={index}>
           <div className="overlay">
             <a href="/productdetail" className="product-thumb">
               <img src={latestproduct.image} alt="" />
             </a>
             <span className="discount">{latestproduct.discount}</span>
           </div>
           <div className="product-info">
             <span>{latestproduct.title}</span>
             <Link to="/productdetail">{latestproduct.desc}</Link>
             <h4>{latestproduct.price}</h4>
           </div>
         </div>
         ))}
        </div>
     </section>
  )
}
export default LatestProductCart