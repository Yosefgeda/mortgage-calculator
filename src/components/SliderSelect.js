import React, { useState } from 'react'
import SliderComponent from './common/SliderComponent'

const SliderSelect = () => {
    const [amount, setAmount] = useState('')
    const valueChange = (e) => {
        setAmount(e.target.value)
    }
  return (
    <>
        <SliderComponent 
            def={70} min={0} 
            max={100} step={5} 
            onChange={(e) => console.log(e.target.value)}
            lable={"Home Value"}
            unit={"$"}
            amount={valueChange}
        />
    </>
    
  )
}

export default SliderSelect