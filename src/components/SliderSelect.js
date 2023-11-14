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
            homeValue: value
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
            downPayment: value
          })}
          unit={"$"}
          amount={data.homeValue}
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
            loanAmount: value
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
          step={1} 
          onChange={(e, value) => setData({
            ...data,
            interestRate: value
          })}
          unit={"%"}
          amount={data.interestRate}
        />
    </>
    
  )
}

export default SliderSelect