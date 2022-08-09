import React, { useState } from "react";

function AddStock({isAdmin}) {
  const [formData, setFormData] = useState({
    ticker: "",
    acquiring_company: "",
    acquiring_company_ticker: "",
    expected_close_date: "",
    deal_type: "",
    status: "",
    cash_comp: "",
    stock_comp: "",
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:4000/stocks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify({
        ticker: formData.ticker,
        acquiring_company: formData.acquiring_company,
        acquiring_company_ticker: formData.acquiring_company_ticker,
        expected_close_date: formData.expected_close_date,
        deal_type: formData.deal_type,
        status: formData.status,
        cash_comp: formData.cash_comp,
        stock_comp: formData.stock_comp,
      }),
    });
  }
  return (

    
    <div className="add-stock">

{/* {(isAdmin) ? (  
                <button onClick={handleSubmit}>Add Transaction</button>
                ) : (
                <p>Only admins can add transactions.</p>
                )
            } */}
      <h2>Add Stock</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="ticker"
          placeholder="Ticker"
          value={formData.ticker}
          onChange={handleChange}
        />
        <input
          type="text"
          name="acquiring_company"
          placeholder="Acquiring Company"
          value={formData.acquiring_company}
          onChange={handleChange}
        />
        <input
          type="text"
          name="acquiring_company_ticker"
          placeholder="Acquiring Company Ticker"
          value={formData.acquiring_company_ticker}
          onChange={handleChange}
        />
        <input
          type="date"
          name="expected_close_date"
          placeholder="Expected Closing Date"
          value={formData.expected_close_date}
          onChange={handleChange}
        />
        <input
          type="text"
          name="deal_type"
          placeholder="Deal Type"
          value={formData.deal_type}
          onChange={handleChange}
        />
        <input
          type="text"
          name="status"
          placeholder="Status"
          value={formData.status}
          onChange={handleChange}
        />
        <input
          type="number"
          name="cash_comp"
          placeholder="Cash Comp Value"
          value={formData.cash_comp}
          onChange={handleChange}
        />
        <input
          type="number"
          name="stock_comp"
          placeholder="Stock Comp (In Shares)"
          value={formData.stock_comp}
          onChange={handleChange}
        />
        <input type="submit" value="Add Stock" />
      </form>

      
    </div>
  );
}

export default AddStock;
