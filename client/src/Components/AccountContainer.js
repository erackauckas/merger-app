import React from "react";
import TransactionsList from "./TransactionsList";
import AddStock from "./AddStock";
import Search from "./Search";

function AccountContainer({ stocks, handleStockSearch }) {
  // AddStock or HandleSubmit is passed through

  return (
    <div>
      <Search handleStockSearch={handleStockSearch} />
      
      <TransactionsList
        filteredStocks={stocks}
        handleStockSearch={handleStockSearch}
      />
    </div>
  );
}

export default AccountContainer;
