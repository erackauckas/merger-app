import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import AddStock from "./Components/AddStock";
import Login from "./Components/Login";
import Auth from "./Components/Auth";
import Navigation from "./Components/Navigation";
import AccountContainer from "./Components/AccountContainer";
import Transaction from "./Components/Transaction";





function App() {  
  const [stocks, setStocks] = useState([]);
  const [filteredStocks, setFilteredStocks] = useState(stocks);
  const [errors, setErrors] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false)
  const [user, setUser] = useState(null);

  // const finnhub = require('finnhub');

  // const api_key = finnhub.ApiClient.instance.authentications['api_key'];
  // api_key.apiKey = "cb6eu6aad3i70tu65u60" // Replace this
  // const finnhubClient = new finnhub.DefaultApi()

  // finnhubClient.quote("AAPL", (error, data, response) => {
  //   console.log(data)
// });



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
let filteredStock = stocks
  function handleStockSearch(e){    
    filteredStock=stocks.filter((stock)=>{    
      
      return stock.ticker.includes(e.target.value)     
    })
    setFilteredStocks(filteredStock)
   
  }
  useEffect(() =>{
    setFilteredStocks(stocks)
  }, [stocks]);
  

  return ( 
    <BrowserRouter>
    <Navbar />
    <Navigation setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user} setIsAdmin={setIsAdmin}/>
    {/* <AccountContainer filteredStocks={filteredStocks} addStock={AddStock} handleStockSearch={handleStockSearch} stockList={stocks} /> */}
    <br></br>
    {/* <Search handleStockSearch= {handleStockSearch} /> */}
      <div className="App">
      {(isAuthenticated) ? (
                <h2>Welcome, {user.name}!</h2> 
                ) : (
                <h3>Not logged in</h3>
                )
            }
      <Outlet />
        <Routes>
        <Route exact path={"/"} element={<AccountContainer handleStockSearch={handleStockSearch} stocks={filteredStocks} Search={Search}/>} />        
        <Route exact path={"/TransactionsList"} element={<AccountContainer handleStockSearch={handleStockSearch}  handlePost={handlePost} errors={errors} stocks={filteredStocks}  Search={Search}/>} />
        <Route exact path={"/AddStock"} element={<AddStock handleStockSearch={handleStockSearch}  handlePost={handlePost} setIsAdmin={setIsAdmin} errors={errors} filteredStocks={filteredStocks} Search={Search}/>} />
        <Route exact path={"/Signup"} element={<Auth setIsAuthenticated={setIsAuthenticated} setUser={setUser}/>} />          
        <Route exact path={"/Login"} element={<Login setIsAuthenticated={setIsAuthenticated} setUser={setUser} setIsAdmin={setIsAdmin}/>} />
        <Route exact path={"/TransactionsList/:id"} element={<AccountContainer handleStockSearch={handleStockSearch} stocks={filteredStocks} Search={Search}  />}>
          </Route>    
        </Routes>
      </div>
    </BrowserRouter> 
);
}

export default App;