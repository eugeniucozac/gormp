import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from './Calculator';
import '@testing-library/jest-dom';

describe('Calculator Component', () => {
  const mockFormData = {
    propertyPrice: 0,
    deposit: 0,
    mortgageTermInYears: 0,
    annualInterestRate: 0
  };
  const mockOnSubmit = jest.fn();
  const mockOnChangeFormData = jest.fn();

  test('renders correctly with initial props', () => {
    render(
      <Calculator
        formData={mockFormData}
        onSubmit={mockOnSubmit}
        onChangeFormData={mockOnChangeFormData}
      />
    );

    expect(screen.getByLabelText(/property price/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/deposit/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/mortgage term/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/interest rate/i)).toBeInTheDocument();
  });

  test('calls onChangeFormData when inputs change', () => {
    render(
      <Calculator
        formData={mockFormData}
        onSubmit={mockOnSubmit}
        onChangeFormData={mockOnChangeFormData}
      />
    );

    const propertyPriceInput = screen.getByLabelText(/property price/i);
    fireEvent.change(propertyPriceInput, { target: { value: '300000' } });

    expect(mockOnChangeFormData).toHaveBeenCalled();
  });
});
