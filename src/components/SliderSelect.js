import React from 'react'
import SliderComponent from './common/SliderComponent'

const SliderSelect = () => {
  return (
    <>
        <SliderComponent def={70} min={0} max={100} step={5} onChange={(e) => console.log(e.target.value)}/>
    </>
    
  )
}

export default SliderSelect