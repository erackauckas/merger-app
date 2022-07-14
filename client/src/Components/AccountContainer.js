import React from 'react'
import TransactionsList from './TransactionsList'
import AddStock from './AddStock'
import Search from './Search'

function AccountContainer({filteredStocks, addStock, handleStockSearch}) {
    // AddStock or HandleSubmit is passed through
  return (
    <div>
        <Search handleStockSearch={handleStockSearch} />      
        <AddStock addstock={addStock} />
        <TransactionsList filteredStocks={filteredStocks} handleStockSearch={handleStockSearch} />

    </div>
  )
}

export default AccountContainer