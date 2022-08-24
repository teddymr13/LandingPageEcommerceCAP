import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {image} from '../../../image'
import {useFurniture} from '../../../hooks/useFurniture'

function AllProduct() {
  const data = useFurniture();
  const furnitures = data.APIData
  const [dataFurnitures, setDataFurnitures] = useState([]) 
  // const furnituresFilter = data.APIData

  const filterProduct = category => {
      console.log(category)
      if(category === ""){
        setDataFurnitures(furnitures)
      }else{
        setDataFurnitures(furnitures.filter(f => f.category === category ))
      } 
  }

  useEffect(()=>{
    if(!data.loading){
      setDataFurnitures(furnitures)
    }
  },[data.loading, furnitures, dataFurnitures])


  
  return (
    <section className="section all-products" id="products">
      <div className="top container">
        <h1>All Product</h1>
        <form>
          <select onChange={(e) => filterProduct(e.target.value)}>
            <option value="" >Default FILTER</option>
            <option value="SOFA">FILTER SOFA</option>
            <option value="LAMP">FILTER LAMP</option>
            <option value="CHAIR">FILTER CHAIR</option>
            <option value="CUPBOARD">FILTER CupBoard</option>
          </select>
          <span><i className="bx bx-chevron-down"></i></span>
        </form>
      </div>
      <div className="product-center container">
      {dataFurnitures.map((product, index) => (
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