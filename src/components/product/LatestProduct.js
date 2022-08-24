import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Link as Scroll } from "react-scroll";
import {image} from '../../image'
import {useFurniture} from '../../hooks/useFurniture'


function LatestProduct() {
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
    <section className="section new-arrival">
       <div className="title">
         <h1>Latest Furniture</h1>
         <p>All the latest picked furniture from design in indonesian</p>
       </div>
       <Scroll to="sctdetail" spy={true} smooth={true} offset={-100} duration={30}>  
        <div className="product-center">
        {dataFurnitures.map((latestproduct, index ) => (
          <div className="product-item" key={index}>
          <Link to={"/product/" + latestproduct.id}>
            <div className="overlay">
              <a href="/productdetail" className="product-thumb">
                <img src={image[latestproduct.urlImage]} alt="" />
              </a>
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
        </Scroll>
     </section>
  )
}
export default LatestProduct