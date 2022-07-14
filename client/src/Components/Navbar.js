import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul className="list">
        {/* <li className="navigation" >
                    <Link className="navigation" to= "/StockGrid" >Find Transactions</Link>
                </li>     */}
        <li className="navigation">
          <Link className="navigation" to="/TransactionsList">
            Transactions
          </Link>
        </li>
        <li className="navigation">
          <Link className="navigation" to="/AddStock">
            Add a Transaction
          </Link>
        </li>
        <li className="navigation">
          <Link className="navigation" to="/Login">
            Login
          </Link>
        </li>
        <li className="navigation">
          <Link className="navigation" to="/Signup">
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
