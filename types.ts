export type ResultsType = {
    monthly: number,
    total: number,
    capital: number,
    interest: number,
    affordability: number
    yearlyBreakdown?: YearlyBreakdownType[]
}

export type CalculatorType = {
    propertyPrice: number,
    deposit: number,
    mortgageTermInYears: number,
    annualInterestRate: number
}

export type ErrorType = {
    propertyPrice?: string,
    deposit?: string,
    mortgageTermInYears?: string,
    annualInterestRate?: string
}

export type YearlyBreakdownType = {
    year: number,
    remainingBalance: number
}

export type CalculatorFormType = {
    formData: CalculatorType,
    onSubmit: () => void, 
    onChangeFormData: (formData: CalculatorType | ((prevFormData: CalculatorType) => CalculatorType)) => void,
}