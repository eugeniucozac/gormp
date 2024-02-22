import Table from 'react-bootstrap/Table';
import { formatCurrency } from '@/utils/formatCurrency';
import { ResultsType, YearlyBreakdownType } from '@/types';

const Breakdown = ({ debts } : { debts: ResultsType }) => {
    return (
        <>
            <h2 className='pb-3'>Yearly Breakdown</h2>
            <Table className='max-w-52' bordered hover size='sm'>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Remaining Debt</th>
                    </tr>
                </thead>
                <tbody>
                    {debts?.yearlyBreakdown?.map(({ year, remainingBalance }: YearlyBreakdownType) => (
                        <tr key={year}>
                            <td>{year}</td>
                            <td>{formatCurrency(remainingBalance).slice(0, -3)}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
}

export default Breakdown