import React, {useState} from 'react';

function AddStock() {
    const [formData, setFormData]= useState({
        
        date_announced: "",
        ticker: "",
        company_name: "",
        current_price: "",
        acquiring_company: "",
        acquiring_company_ticker: "",
        offer_price: "",
        expected_close_date: "",
        deal_type: ""
     });

    function handleChange(event) {
        setFormData({
            ...formData,[event.target.name]: event.target.value,
        })
    }

    function handleSubmit(event) {
            event.preventDefault()
            fetch("http://localhost:4000/stocks", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            
            body: JSON.stringify({

                date_announced: formData.date_announced,
                ticker: formData.ticker,
                company_name: formData.company_name,
                current_price: formData.current_price,
                acquiring_company: formData.acquiring_company,
                acquiring_company_ticker: formData.acquiring_company_ticker,
                offer_price: formData.offer_price,
                expected_close_date: formData.expected_close_date,
                deal_type: formData.deal_type
            }),
        });
        }
return (
    <div className="add-stock">
        <h2>Add Stock</h2>
        <form onSubmit={handleSubmit} >
            <input type="date" name="date_announced" placeholder="Date Announced" value={formData.date_announced} onChange={handleChange} />
            <input type="text" name="ticker" placeholder="Ticker" value={formData.ticker} onChange={handleChange} />
            <input type="text" name="company_name" placeholder="Company Name" value={formData.company_name} onChange={handleChange} />
            <input type="number" name="current_price" placeholder="Current Price" value={formData.current_price} onChange={handleChange} />
            <input type="text" name="acquiring_company" placeholder="Acquiring Company" value={formData.acquiring_company} onChange={handleChange} />
            <input type="text" name="acquiring_company_ticker" placeholder="Acquiring Company Ticker" value={formData.acquiring_company_ticker} onChange={handleChange} />
            <input type="number" name="offer_price" placeholder="Offer_price" value={formData.offer_price} onChange={handleChange} />
            <input type="date" name="expected_close_date" placeholder="Expected Closing Date" value={formData.expected_close_date} onChange={handleChange} />
            <input type="text" name="deal_type" placeholder="Deal Type" value={formData.deal_type} onChange={handleChange} />           
            <input type="submit" value="Add Stock" />
        </form>
    </div>
);
        }
    
export default AddStock;