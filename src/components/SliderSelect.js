import React from 'react'
import SliderComponent from './common/SliderComponent'

const SliderSelect = () => {
  return (
    <>
        <SliderComponent def={100} min={0} max={300}/>
        <SliderComponent def={70} min={50} max={100}/>
        <SliderComponent def={5} min={0} max={10}/>
    </>
    
  )
}

export default SliderSelect