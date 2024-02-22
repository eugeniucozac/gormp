import { formatCurrency } from './formatCurrency';

describe('formatCurrency', () => {
  test('should format the given amount with default decimal places', () => {
    const amount = 1234.56;
    const expected = '£1,234.56';
    const result = formatCurrency(amount);

    expect(result).toEqual(expected);
  });

  test('should format the given amount with specified decimal places', () => {
    const amount = 1234.5678;
    const decimalPlaces = 3;
    const expected = '£1,234.568';
    const result = formatCurrency(amount, decimalPlaces);

    expect(result).toEqual(expected);
  });

  test('should format the given amount with zero decimal places', () => {
    const amount = 1234.56;
    const decimalPlaces = 0;
    const expected = '£1,235';
    const result = formatCurrency(amount, decimalPlaces);

    expect(result).toEqual(expected);
  });

  test('should format negative amounts correctly', () => {
    const amount = -1234.56;
    const expected = '-£1,234.56';
    const result = formatCurrency(amount);

    expect(result).toEqual(expected);
  });
});
