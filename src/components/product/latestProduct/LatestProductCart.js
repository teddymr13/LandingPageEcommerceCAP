import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Link as Scroll } from "react-scroll";
import {image} from '../../../image'
import {useFurniture} from '../../../hooks/useFurniture'

function LatestProductCart() {

  const navigate = useNavigate();
  const data = useFurniture();
  const furnitures = data.APIData
  const [dataFurnitures, setDataFurnitures] = useState([]) 

  useEffect(()=>{
    const filterProductHapening = productHapening => {
      if(productHapening === ""){
        setDataFurnitures(furnitures)
      }else{
        setDataFurnitures(furnitures.filter(f => f.productHapening))
      } 
    }

    if(!data.loading){
      setDataFurnitures()
    }
    filterProductHapening()
  },[data.loading, furnitures])

  const navigateProduct = (id) =>{
      navigate(`/product/${id}`)
  }

  return (
    <section className="section featured">
       <div className="top container">
       <h1>Latest Products</h1>
        <Link to="/product" className="view-more">View more</Link>
       </div>

       <Scroll to="sctdetail" spy={true} smooth={true} offset={-100} duration={30}> 
       <div className="product-center container">
        {dataFurnitures.map((latestproduct, index ) => (
          <div className="product-item" key={index}>
          <button onClick={() => navigateProduct(latestproduct.id)}>
                <div className="overlay">
                  <div className="product-thumb">
                    <img src={image[latestproduct.urlImage]} alt="" />
                  </div>
                  {latestproduct.discount ? (<span className="discount"> {latestproduct.discount}%</span>) : ""}
                </div>
                <div className="product-info">
                    <span>{latestproduct.category}</span>
                    <div>{latestproduct.title}</div>
                    <h4>{latestproduct.price ? "$" : ""}{latestproduct.price}</h4>
                </div>
            </button>
          </div>
          ))}
        </div>
        </Scroll>
     </section>  
  )
}
export default LatestProductCart