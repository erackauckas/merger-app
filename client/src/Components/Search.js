import React from "react";

function Search({ handleStockSearch }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Transactions</label>
      <input
        type="text"
        id="search"
        placeholder="Ticker"
        onChange={handleStockSearch}
      />
    </div>
  );
}

export default Search;
