import React from 'react';
// import DataProduct from './dataProduct';
import { Link} from 'react-router-dom';
import {image} from '../../image'
import {useFurniture} from '../../hooks/useFurniture'

function Product() {

  const data = useFurniture();
  const furnitures = data.APIData 
//   console.log(furnitures) 


  return (
    <section className="section new-arrival">
        <div className="title">
            <h1>NEW PRODUCT</h1>
            <p>All the latest picked from designer of our product</p>
        </div>

        <div className="product-center">
            {furnitures.map((product, index) => (
                <div className="product-item" key={index}>
                <Link to={"/product/" + product.id}>
                    <div className="overlay">
                        <div className="product-thumb">
                            <img src={image[product.urlImage]} alt="testS" />
                        </div>
                        <span className="discount">{product.discount ? "%" : ""} {product.discount}</span>
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

export default Product