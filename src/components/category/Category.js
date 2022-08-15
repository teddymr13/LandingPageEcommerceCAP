import React from 'react'
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
          <div className="cat">
            <img src={ImageCategoryleft} alt="" />
            <div className="btn-category">
              <p>CHAIR</p>
            </div>
          </div>
          <div className="cat">
            <img src={ImageCategory} alt="" />
            <div className="btn-category">
              <p>CUPBOARD</p>
            </div>
          </div>
          <div className="cat">
            <img src={ImageCategoryright} alt="" />
            <div className="btn-category">
              <p>SOFA</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Category