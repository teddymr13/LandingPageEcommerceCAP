import React from 'react'
import { Link } from 'react-router-dom'
import ImageCategory from  '../../assets/images/bennerboard.png';
import ImageCategoryright from  '../../assets/images/bennerSofa.jpg';
import ImageCategoryleft from '../../assets/images/chairbanners.jpg'

function Category() {
  return (
      <section className="section category">
        <div className="title">
          <h1>CATEGORY</h1>
          <p>Chose Category</p>
        </div>
        <div className="cat-center">
          <Link to="/product" className="cat">
            <img src={ImageCategoryleft} alt="" />
            <div className="btn-category">
              <p>CHAIR</p>
            </div>
          </Link>
          <Link to="/product" className="cat">
            <img src={ImageCategory} alt="" />
            <div className="btn-category">
              <p>CUPBOARD</p>
            </div>
          </Link>
          <Link to="/product" className="cat">
            <img src={ImageCategoryright} alt="" />
            <div className="btn-category">
              <p>SOFA</p>
            </div>
          </Link>
        </div>
      </section>
  )
}

export default Category