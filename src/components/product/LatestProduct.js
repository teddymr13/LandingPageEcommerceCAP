import React from 'react'
import DataLatestProduct from './dataLatestProduct'

function LatestProduct() {
  return (
    <section className="section new-arrival">
       <div className="title">
         <h1>Latest Furniture</h1>
         <p>All the latest picked furniture from design in indonesian</p>
       </div>
 
       <div className="product-center">
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
             <a href="/productdetail">{latestproduct.desc}</a>
             <h4>{latestproduct.price}</h4>
           </div>
         </div>
         ))}
        </div>
     </section>
  )
}
export default LatestProduct