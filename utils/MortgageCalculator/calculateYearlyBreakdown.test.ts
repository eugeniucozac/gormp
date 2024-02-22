import { calculateYearlyBreakdown } from './calculateYearlyBreakdown';

describe('calculateYearlyBreakdown', () => {
  test('should calculate the correct remaining balance for each year', () => {
    const principal = 240000;
    const annualInterestRate = 3.5;
    const mortgageTermInYears = 30;
    const monthlyPayment = 1077.71;
    const result = calculateYearlyBreakdown(principal, annualInterestRate, mortgageTermInYears, monthlyPayment);

    expect(result[1].remainingBalance).toBeLessThan(principal);
    expect(result[mortgageTermInYears].remainingBalance).toBe(0);
    expect(result[10].remainingBalance).toBeLessThan(result[1].remainingBalance);
    expect(result[20].remainingBalance).toBeLessThan(result[10].remainingBalance);
  });

  test('should calculate the remaining balance as 0 after the term is complete', () => {
    const principal = 240000;
    const annualInterestRate = 3.5;
    const mortgageTermInYears = 30;
    const monthlyPayment = 1077.71;
    const result = calculateYearlyBreakdown(principal, annualInterestRate, mortgageTermInYears, monthlyPayment);

    expect(result[mortgageTermInYears].remainingBalance).toBe(0);
  });

  test('should include a year 0 with the full principal amount', () => {
    const principal = 240000;
    const annualInterestRate = 3.5;
    const mortgageTermInYears = 30;
    const monthlyPayment = 1077.71;
    const result = calculateYearlyBreakdown(principal, annualInterestRate, mortgageTermInYears, monthlyPayment);

    expect(result[0]).toEqual({ year: 0, remainingBalance: principal });
  });
});
