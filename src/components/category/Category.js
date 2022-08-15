import React from 'react'
import ImageCategory from  '../../assets/images/sofa1.png';

function Category() {
  return (
        <section className="section category">
        <div className="title">
          <h1>CATEGORY</h1>
          <p>Chose Category</p>
        </div>
        <div className="cat-center">
          <div className="cat">
            <img src={ImageCategory} alt="" />
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
            <img src={ImageCategory} alt="" />
            <div className="btn-category">
              <p>SOFA</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Category