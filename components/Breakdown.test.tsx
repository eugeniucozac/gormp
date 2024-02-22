import { render, screen } from '@testing-library/react';
import Breakdown from './Breakdown';
import { formatCurrency } from '../utils/formatCurrency';
import '@testing-library/jest-dom';

jest.mock('../utils/formatCurrency', () => ({
  formatCurrency: jest.fn((value) => `£${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`),
}));

describe('Breakdown', () => {
  test('renders the yearly breakdown table with data', () => {
    const debtsMock = {
      monthly: 930.43,
      total: 212137.55,
      capital: 115000.00,
      interest: 97137.55,
      affordability: 930.63,
      yearlyBreakdown: [
        { year: 1, remainingBalance: 90000 },
        { year: 2, remainingBalance: 80000 },
      ],
    };

    render(<Breakdown debts={debtsMock} />);

    expect(screen.getByText('Year')).toBeInTheDocument();
    expect(screen.getByText('Remaining Debt')).toBeInTheDocument();

    debtsMock.yearlyBreakdown.forEach(({ year, remainingBalance }) => {
      expect(screen.getByText(year)).toBeInTheDocument();
      expect(screen.getByText(formatCurrency(remainingBalance).slice(0, -3))).toBeInTheDocument();
    });
  });

  test('renders no rows if yearlyBreakdown is empty', () => {
    const debtsMock = {
      monthly: 930.43,
      total: 212137.55,
      capital: 115000.00,
      interest: 97137.55,
      affordability: 930.63,
      yearlyBreakdown: [],
    };

    render(<Breakdown debts={debtsMock} />);

    const dataRows = screen.queryAllByRole('cell');
    expect(dataRows.length).toBe(0);
  });
});
