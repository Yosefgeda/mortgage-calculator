import React from 'react'
import SliderComponent from './common/SliderComponent'

const SliderSelect = ({data, setData}) => {
  console.log(data)
  return (
    <>
        <SliderComponent 
          lable={"Home Value"}
          def={data.homeValue}
          value={data.homeValue}
          min={1000} 
          max={10000}
          step={100} 
          onChange={(e, value) => setData({
            ...data,
            homeValue: value.toFixed(0),
            downPayment: (0.2 * value).toFixed(0),
            loanAmount: (0.8 * value).toFixed(0),
          })}
          unit="$"
          amount={data.homeValue}
        />

        <SliderComponent 
          lable={"Down Payment"}
          def={data.downPayment}
          value={data.downPayment}
          min={0} 
          max={data.homeValue} 
          step={100} 
          onChange={(e, value) => setData({
            ...data,
            downPayment: value.toFixed(0),
            loanAmount: (data.homeValue - value).toFixed(0),
          })}
          unit={"$"}
          amount={data.downPayment}
        />

        <SliderComponent
          lable={"Loan Amount"}
          def={data.loanAmount} 
          value={data.loanAmount}
          min={0} 
          max={data.homeValue} 
          step={100} 
          onChange={(e, value) => setData({
            ...data,
            loanAmount: value.toFixed(0),
            downPayment: (data.homeValue - value).toFixed(0),
          })}
          unit={"$"}
          amount={data.loanAmount}
        />

        <SliderComponent
          lable={"Interest Rate"}
          def={data.interestRate}
          value={data.interestRate}
          min={2} 
          max={18} 
          step={0.5} 
          onChange={(e, value) => setData({
            ...data,
            interestRate: value.toFixed(0)
          })}
          unit={"%"}
          amount={data.interestRate}
        />
    </>
    
  )
}

export default SliderSelect