import React from "react";
import { Link } from "react-router-dom";

function StockCard({ stock }) {
  return (
    <div className="stock-data">
      <h3 className="stock-info">{stock.name}</h3>
      <Link to={`/StockGrid/${stock.id}`}></Link>
      {/* <h5 className="stock-price">{stock.current_price} </h5>
                <h5 className="stock-closedate">${stock.expected_close_date} </h5> */}
    </div>
  );
}
export default StockCard;
