import React from 'react'
import Transaction from './Transaction'

function TransactionsList({stocks}) {
// // console.log(setFilteredStocks)
// //   const filterTransactions = setFilteredStocks
console.log(stocks)
   
  let filterTransactions =  stocks.map(singleTransaction => {
    return <Transaction key={singleTransaction.id} Ticker={singleTransaction.ticker} acquiring_company_ticker={singleTransaction.acquiring_company_ticker} expected_close_date={singleTransaction.expected_close_date} deal_type={singleTransaction.deal_type} status={singleTransaction.status} />
  })

  return (
    <table className="ui celled striped padded table">
    <tbody>
      <tr>
        <th>
          <h3 className="ui center aligned header">Ticker</h3>
        </th>
        <th>
          <h3 className="ui center aligned header">Current Price</h3>
        </th>
        <th>
          <h3 className="ui center aligned header">Acquiring Company Ticker</h3>
        </th>
        <th>
          <h3 className="ui center aligned header">Offer Price</h3>
        </th>
        <th>
          <h3 className="ui center aligned header">Expected Close Date</h3>
        </th>
        <th>
          <h3 className="ui center aligned header">Deal Type</h3>
        </th>
        <th>
          <h3 className="ui center aligned header">Status</h3>
        </th>
      </tr>
      {filterTransactions}     
    </tbody>
  </table>
  )
}

export default TransactionsList

