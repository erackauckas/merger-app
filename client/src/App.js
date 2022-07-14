import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import AddStock from "./Components/AddStock";
import StockGrid from "./Components/StockGrid";
import Login from "./Components/Login";
import Auth from "./Components/Auth";
import Navigation from "./Components/Navigation";
import TransactionsList from "./Components/TransactionsList";
import AccountContainer from "./Components/AccountContainer";




function App() {  
  const [stocks, setStocks] = useState([]);
  const [filteredStocks, setFilteredStocks] = useState(stocks);
  const [errors, setErrors] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false)
  const [user, setUser] = useState(null);

  useEffect(() => {     
    
    fetch('/authorized_user')    
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {          
          setIsAuthenticated(true);
          setIsAdmin(user.admin)
          setUser(user);
        });
      }
    });

    fetch("/stocks")
    .then((r) => r.json())
    .then((data) => setStocks(data));
  },[]);


  function handlePost(obj){
    fetch('/stocks',{
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(obj)
    })
    .then(res => res.json())
    .then(data => {
      if(data.errors){
        setErrors(data.errors)
      } else {
        setStocks([...stocks,data])
      }
    })
  }

  function handleStockSearch(e){    
    const filteredStock=stocks.filter(stock=>{      
      console.log("function HandleStockSearch ran") 
      // function handlestocksearch ran
      return stock.ticker.includes(e.target.value)     
    })
    setFilteredStocks(filteredStock)
    console.log(filteredStocks)
  }
  useEffect(() =>{
    setFilteredStocks(stocks)
  }, [stocks]);
  console.log(stocks)

  return ( 
    <BrowserRouter>
    <Navbar />
    <Navigation setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user} setIsAdmin={setIsAdmin}/>
    <AccountContainer filteredStocks={filteredStocks} addStock={AddStock} handleStockSearch={handleStockSearch} />
    <br></br>
    <Search handleStockSearch= {handleStockSearch} />
      <div className="App">
      {(isAuthenticated) ? (
                <h2>Welcome, {user.name}!</h2> 
                ) : (
                <h3>Not logged in</h3>
                )
            }
      <Outlet />
        <Routes>
        <Route exact path={"/"} element={<StockGrid handleStockSearch={handleStockSearch} stocks={filteredStocks} Search={Search}/>} />
        <Route exact path={"/StockGrid"} element={<StockGrid handleStockSearch={handleStockSearch} stocks={filteredStocks} Search={Search} isAuthenticated={isAuthenticated} />} />
        <Route exact path={"/TransactionsList"} element={<TransactionsList handleStockSearch={handleStockSearch}  handlePost={handlePost} errors={errors} stocks={stocks} Search={Search}/>} />
        <Route exact path={"/AddStock"} element={<AddStock handleStockSearch={handleStockSearch}  handlePost={handlePost} errors={errors} stocks={filteredStocks} Search={Search}/>} />
        <Route exact path={"/Signup"} element={<Auth setIsAuthenticated={setIsAuthenticated} setUser={setUser}/>} />          
        <Route exact path={"/Login"} element={<Login setIsAuthenticated={setIsAuthenticated} setUser={setUser} setIsAdmin={setIsAdmin}/>} />
        <Route exact path={"/StockGrid/:id"} element={<StockGrid handleStockSearch={handleStockSearch} stocks={filteredStocks} Search={Search} isAdmin={isAdmin} setStocks={setStocks}/>}></Route>    
        </Routes>
      </div>
    </BrowserRouter> 
);
}

export default App;