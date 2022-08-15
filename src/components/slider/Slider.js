import React, {useState, useEffect} from 'react'
import DataSlider from './data'
import SliderImage from './SliderImage'

function Slider() {
  
  const [dataSlider] = useState(DataSlider);
  const [index, setIndex] = useState(0);
  
  useEffect(()=>{
    const lastIndex = dataSlider.length -1
    if (index < 0) {
        setIndex(lastIndex)
    }
    if (index > lastIndex) {
        setIndex(0)
    }
  }, [index, dataSlider])

  useEffect(()=>{
    let slider = setInterval(() => {
        setIndex(index + 1)
      }, 5000);
      return () => clearInterval(slider)
  }, [index])
    
  return (
    <div className="hero">
       <div className="slides-container">
            {dataSlider.map((slider, sliderIndex) => {
            return <SliderImage key={slider.id} {...slider} personIndex={sliderIndex} index={index} />
            })}
      </div>
      <div id="slide-next" className="bx bx-chevron-right" onClick={() => setIndex(index + 1)}></div>
      <div id="slide-prev" className="bx bx-chevron-left" onClick={() => setIndex(index - 1)}></div>
  </div>
  )
}

export default Slider