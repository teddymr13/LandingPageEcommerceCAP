import React from 'react'
import DataPromotion from './dataPromotion'

function Promotion() {
  return (
    <section className="section banner">
      {DataPromotion.map((promotion) => (
        <>
        <div className="left">
            <span className="trend">{promotion.title}</span>
            <h1>{promotion.judul}</h1>
            <p>{promotion.desc} <span className="color">{promotion.desc_mid}</span> {promotion.desc2_last}</p>
            <a href="{#}" className="btn btn-1">Discover Now</a>
        </div>
        <div className="right">
            <img src={promotion.image} alt=""/>
        </div>
        </>
        ))}
        
  </section>
  )
}

export default Promotion