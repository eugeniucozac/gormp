import React from 'react';
import { render, screen } from '@testing-library/react';
import Results from './Results';
import { formatCurrency } from '../utils/formatCurrency';
import '@testing-library/jest-dom';

jest.mock('../utils/formatCurrency', () => ({
  formatCurrency: jest.fn((value) => `£${value.toFixed(2)}`),
}));

describe('Results component', () => {
  const mockResults = {
    monthly: 1000,
    total: 300000,
    capital: 250000,
    interest: 50000,
    affordability: 1200,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('displays the correct results', () => {
    render(<Results results={mockResults} />);

    expect(formatCurrency).toHaveBeenCalledWith(mockResults.monthly);
    expect(formatCurrency).toHaveBeenCalledWith(mockResults.total);
    expect(formatCurrency).toHaveBeenCalledWith(mockResults.capital);
    expect(formatCurrency).toHaveBeenCalledWith(mockResults.interest);
    expect(formatCurrency).toHaveBeenCalledWith(mockResults.affordability);

    expect(screen.getByText(`£${mockResults.monthly.toFixed(2)}`)).toBeInTheDocument();
    expect(screen.getByText(`£${mockResults.total.toFixed(2)}`)).toBeInTheDocument();
    expect(screen.getByText(`£${mockResults.capital.toFixed(2)}`)).toBeInTheDocument();
    expect(screen.getByText(`£${mockResults.interest.toFixed(2)}`)).toBeInTheDocument();
    expect(screen.getByText(`£${mockResults.affordability.toFixed(2)}`)).toBeInTheDocument();
  });
});
