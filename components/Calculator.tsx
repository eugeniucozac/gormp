import { ChangeEvent, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { CalculatorFormType, CalculatorType, ErrorType } from '@/types';

const Calculator = ({ formData, onSubmit, onChangeFormData }: CalculatorFormType) => {
  const [errors, setErrors] = useState<ErrorType>({});
  
  useEffect(() => {
    let newErrors: ErrorType = {};
    if (!formData.propertyPrice || formData.propertyPrice <= 0) {
      newErrors.propertyPrice = 'Property price is required and must be greater than 0';
    }
    if (!formData.deposit || formData.deposit < 0) {
      newErrors.deposit = 'Deposit must be greater than or equal to 0';
    }
    if (!formData.mortgageTermInYears || formData.mortgageTermInYears <= 0) {
      newErrors.mortgageTermInYears = 'Term must be greater than 0';
    }
    if (!formData.annualInterestRate || formData.annualInterestRate <= 0) {
      newErrors.annualInterestRate = 'Interest rate must be greater than 0';
    }

    setErrors(newErrors);
  }, [formData]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    onChangeFormData((prevFormData: CalculatorType) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
      <>
          <Form>
            <Form.Label htmlFor='propertyPrice'>Property Price</Form.Label>
            <InputGroup className='mb-3'>
              <InputGroup.Text>£</InputGroup.Text>
              <Form.Control
                id='propertyPrice'
                name='propertyPrice'
                type='number'
                className='no-spinner'
                step='any'
                value={formData.propertyPrice}
                onChange={handleChange}
                isInvalid={!!errors.propertyPrice}
              />
            </InputGroup>
            <Form.Label htmlFor='deposit'>Deposit</Form.Label>
            <InputGroup className='mb-3'>
              <InputGroup.Text>£</InputGroup.Text>
              <Form.Control
                id='deposit'
                name='deposit'
                type='number'
                className='no-spinner'
                step='any'
                value={formData.deposit}
                onChange={handleChange}
                isInvalid={!!errors.deposit}
              />
            </InputGroup>
            <Form.Label htmlFor='mortgageTermInYears'>Mortgage Term</Form.Label>
            <InputGroup className='mb-3'>
              <Form.Control
                id='mortgageTermInYears'
                name='mortgageTermInYears'
                type='number'
                step='any'
                value={formData.mortgageTermInYears}
                onChange={handleChange}
                isInvalid={!!errors.mortgageTermInYears}
              />
              <InputGroup.Text>years</InputGroup.Text>
            </InputGroup>
            <Form.Label htmlFor='annualInterestRate'>Interest rate</Form.Label>
            <InputGroup className='mb-3'>
              <Form.Control
                id='annualInterestRate'
                name='annualInterestRate'
                type='number'
                step='any'
                className='no-spinner'
                value={formData.annualInterestRate}
                onChange={handleChange}
                isInvalid={!!errors.annualInterestRate}
              />
              <InputGroup.Text>%</InputGroup.Text>
            </InputGroup>
            <Button onClick={onSubmit} className='w-full' variant='primary' type='submit'>
              Calculate
            </Button>
          </Form>
      </>
  );
}

export default Calculator