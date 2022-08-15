import React from 'react'
import imgpromo from '../../assets/images/bennernew.png'

function Promotion() {
  return (
      <section className="section banner">
        <div className="left">
          <span className="trend">Trend Design</span>
          <h1>New Collection 2022</h1>
          <p>New Collection <span className="color">Sale 50% OFF</span> Limited Time Offer</p>
          <a href="{#}" className="btn btn-1">Discover Now</a>
        </div>
        <div className="right">
          <img src={imgpromo} alt=""/>
        </div>
      </section>
  )
}

export default Promotion