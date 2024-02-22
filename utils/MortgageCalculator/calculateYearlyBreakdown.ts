/**
 * Calculates the yearly breakdown.
 *
 * @param principal - The principal price.
 * @param annualInterestRate - The annual interest rate.
 * @param mortgageTermInYears - The mortgage term in years.
 * @param monthlyPayment - The monthly payment.
 * @returns The remaining debt for each year.
 */

export const calculateYearlyBreakdown = (
  principal: number, 
  annualInterestRate: number, 
  mortgageTermInYears: number, 
  monthlyPayment: number
): { year: number; remainingBalance: number }[] => {
  const monthlyInterestRate = annualInterestRate / 100 / 12;
  let remainingBalance = principal;
  let yearlyBreakdown = [{ year: 0, remainingBalance: principal }];

  for (let year = 1; year <= mortgageTermInYears; year++) {
    for (let month = 1; month <= 12; month++) {
      let interestForMonth = remainingBalance * monthlyInterestRate;
      let principalPayment = monthlyPayment - interestForMonth;
      remainingBalance -= principalPayment;
    }

    if (remainingBalance < 0) remainingBalance = 0;

    yearlyBreakdown.push({
      year,
      remainingBalance: Math.round(remainingBalance)
    });

    if (remainingBalance <= 0) break;
  }

  return yearlyBreakdown;
}