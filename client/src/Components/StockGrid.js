import {useParams} from "react-router-dom";
import NoMatch from './NoMatch.js';
import { useState } from "react"
import StockCard from "./StockCard"

function StockGrid({stocks, isAdmin, setStocks}) {
    const [newDate, setNewDate] = useState("")
    let { id } = useParams(); 
    
    if (!id) {
        return <AllStocks />;        
    }   

    let singleStock = stocks.find((stock) => stock.id == id);
    
    function AllStocks() {
        return (
            <div className="main-container">
                <div className="results-container">                 
                <br></br>
                {stocks.map((stock) => {                
                return <StockCard key={stock.id} stock={stock} />;
            })}</div>
            </div>
        );
    }
    
    if (!singleStock) {
        return <NoMatch />;
    }

    function handleDelete () {
        fetch(`/stocks/${id}`, {
            method: "DELETE"
        })
        .then(resp=>resp.json())
        .then(deletedStock => {
            console.log(deletedStock)
            setStocks(stocks.filter((stock) => stock.id !== deletedStock.id))
        })
    }

    function handleUpdate (event) {
        event.preventDefault()
        fetch(`/stocks/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                expected_close_date: newDate
            })
        })
        .then(resp=>resp.json())
        .then((updatedStock) => {
            console.log(updatedStock)
        })
    }

    function handleChange(event) {
        setNewDate(event.target.value)
    }

    return <div>
        <h1>{singleStock.ticker}</h1>            
        {/* <img src={singleStock.image} alt={singleStock.name}></img>
        <h2>{singleStock.description}</h2>
        <h2> ${singleStock.price}, {singleStock.rooms}, {singleStock.sq_ft} square feet</h2> */}
            
            {(isAdmin) ? (
                <button onClick={handleDelete}>Delete Transaction</button>
                ) : (
                <p>.Only admins can delete transactions.</p>
                )
            }

            {(isAdmin) ? (
                
                    <form onSubmit={handleUpdate} >
                        <input type="text" name="newDate" onChange={handleChange} value={newDate} placeholder="Edit Expected Closing Date"></input>
                        <input type="submit"></input>
                    </form>
                
                ) : (
                <p>Only admins can update dates.</p>
                )
            }
    </div>

}
export default StockGrid;