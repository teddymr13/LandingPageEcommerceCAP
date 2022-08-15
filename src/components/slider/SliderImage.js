import React from 'react';
import DataSlider from './data'

const SliderImage = ({id, title, judul, desc, buttom, image, personIndex, index}) => {
    
    let position = "slides-container";
    if(personIndex === index){
       position = 'slide'
    }
    if(personIndex === index - 1 || (index === 0 && personIndex === DataSlider.length - 1)){
       position = 'active';
    }  
    return(
        <div className={position} key={id}> 
           <div className="slide active">
               <div className="content">
                  <span>{title}</span>
                  <h3>{judul}</h3>
                  <p>{desc}</p>
                  <a href="{#}" className="hero-btn">{buttom}</a>
                </div>
                <div className="image">
                  <img src={image} alt="" />
                </div>
           </div>
        </div>
    )
}
export default SliderImage;