import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {image} from '../../../image'
import {useFurniture} from '../../../hooks/useFurniture'
import { Link as Scroll } from "react-scroll";

function LatestProductCart() {
  const data = useFurniture();
  const furnitures = data.APIData
  const [dataFurnitures, setDataFurnitures] = useState([]) 

  useEffect(()=>{
    const filterProductHapening = productHapening => {
      // console.log(category)
      if(productHapening === ""){
        setDataFurnitures(furnitures)
      }else{
        setDataFurnitures(furnitures.filter(f => f.productHapening))
      } 
    }

    if(!data.loading){
      setDataFurnitures(dataFurnitures)
    }
    filterProductHapening()
  },[data.loading, furnitures, dataFurnitures])

  return (
    <section className="section featured">
       <div className="top container">
       <h1>Latest Product</h1>
        <Link to="/product" class="view-more">View more</Link>
       </div>
 
       <div className="product-center container">
       {dataFurnitures.map((latestproduct, index ) => (
         <div className="product-item" key={index}>
         <Link to={"/product/" + latestproduct.id}>
           <div className="overlay">
            <Scroll to="sectiondetail" spy={true} smooth={true} offset={-100} duration={40} className="product-thumb">
              <img src={image[latestproduct.urlImage]} alt="" />
            </Scroll>
             {latestproduct.discount ? (<span className="discount"> {latestproduct.discount}%</span>) : ""}
           </div>
           <div className="product-info">
              <span>{latestproduct.category}</span>
              <div>{latestproduct.title}</div>
              <h4>{latestproduct.price ? "$" : ""}{latestproduct.price}</h4>
           </div>
           </Link>
         </div>
         ))}
        </div>
     </section>
  )
}
export default LatestProductCart