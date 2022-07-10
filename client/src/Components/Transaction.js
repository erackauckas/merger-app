import React from 'react'

function Transaction({ticker, current_price, acquiring_company_ticker, offer_price, expected_close_date, deal_type, status}) {
  return (
    <tr>
        <td>{ticker} </td>
        <td>{current_price} </td>
        <td>{acquiring_company_ticker} </td>
        <td>{offer_price} </td>
        <td>{expected_close_date} </td>
        <td>{deal_type} </td>
        <td>{status} </td>

    </tr>
  )
} 

export default Transaction