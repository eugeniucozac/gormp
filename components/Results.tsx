import Table from 'react-bootstrap/Table';
import { formatCurrency } from '@/utils/formatCurrency';
import { ResultsType } from '@/types';

const Results = ({ results } : { results: ResultsType }) => {
  return (
      <>
        <h2 className='pb-3'>Results</h2>
        <Table striped='columns'>
            <tbody>
              <tr className='border-b border-t'>
                <td>Monthly Payment</td>
                <td className='text-right'>{formatCurrency(results.monthly)}</td>
              </tr>
              <tr className='border-b'>
                <td>Total Repayment</td>
                <td className='text-right'>{formatCurrency(results.total)}</td>
              </tr>
              <tr className='border-b'>
                <td>Capital</td>
                <td className='text-right'>{formatCurrency(results.capital)}</td>
              </tr>
              <tr className='border-b'>
                <td>Interest</td>
                <td className='text-right'>{formatCurrency(results.interest)}</td>
              </tr>
              <tr className='border-b'>
                <td>Affordability check</td>
                <td className='text-right'>{formatCurrency(results.affordability)}</td>
              </tr>
            </tbody>
        </Table>
      </>
  );
}

export default Results