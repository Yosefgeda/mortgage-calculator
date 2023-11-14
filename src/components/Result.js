import React from 'react'

const Result = ({data}) => {
  const { homeValue, downPayment, loanAmount, loanTerm, interestRate } = data
  
  const totalLoanMonths = loanTerm * 12;
  const interestPerMonth = interestRate / 100 / 12;

  const monthlyPayment = (
    loanAmount * interestPerMonth *
    (1 + interestPerMonth) ** totalLoanMonths
  ) / 
  (
    (1 + interestPerMonth) ** totalLoanMonths - 1
  );

  const totalInterestGenerated = monthlyPayment + totalLoanMonths + loanAmount;
  
  return (
    <div>Result</div>
  )
}

export default Result