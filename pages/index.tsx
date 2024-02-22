'use client'
import { useState, FormEvent } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breakdown from '@/components/Breakdown';
import Results from '@/components/Results';
import Calculator from '@/components/Calculator';
import { calculateMonthlyPayment } from '@/utils/MortgageCalculator/calculateRepayment';
import { calculateYearlyBreakdown } from '@/utils/MortgageCalculator/calculateYearlyBreakdown';
import { CalculatorType, ResultsType } from '@/types';

const MortgageCalculator = () => {
  const [formData, setFormData] = useState<CalculatorType>({
    propertyPrice: 100000,
    deposit: 5000,
    mortgageTermInYears: 15,
    annualInterestRate: 5.25,
  });

  const [results, setResults] = useState<ResultsType>({
    monthly: 0,
    total: 0,
    capital: 0,
    interest: 0,
    affordability: 0,
  });

  const handleCalculate = (event?: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    const { propertyPrice, deposit, annualInterestRate, mortgageTermInYears } = formData;
    const monthlyPayment = calculateMonthlyPayment(propertyPrice, deposit, annualInterestRate, mortgageTermInYears);
    const monthlyPaymentAffordability = calculateMonthlyPayment(propertyPrice, deposit, Number(annualInterestRate) + 3, mortgageTermInYears);
    const capital = propertyPrice - deposit;
    const total = monthlyPayment * mortgageTermInYears * 12;

    const yearlyBreakdown = calculateYearlyBreakdown(
      capital,
      formData.annualInterestRate,
      formData.mortgageTermInYears,
      monthlyPayment
    );

    setResults({
      ...results,
      monthly: monthlyPayment,
      total,
      capital,
      interest: total - capital,
      affordability: monthlyPaymentAffordability,
      yearlyBreakdown
    })
  };

  return (
    <Container>
      <title>Mortgage Calculator Test</title>
      <Row className='gap-x-10 pt-3'>
        <Col className='border-r' md='auto'>
          <Calculator
            formData={formData}
            onChangeFormData={setFormData}
            onSubmit={handleCalculate}
          />
        </Col>
        <Col md='auto'>
          <Results results={results} />
        </Col>
        <Col md='auto'>
          <Breakdown debts={results} />
        </Col>
      </Row>
    </Container>
  );
}

export default MortgageCalculator