import React from "react";
import { useEffect, useState } from "react"

function Transaction({ transaction }) {
  const [currentPrice, setCurrentPrice]= useState(null)
  const [currentAcquiringPrice, setCurrentAcquiringPrice]= useState(null)
  const [tilClose, setTilClose]= useState(null)
  const { ticker, acquiring_company, acquiring_company_ticker, expected_close_date, deal_type, status, cash_comp, stock_comp} = transaction;
  let offerPrice = ((cash_comp)+(stock_comp*currentAcquiringPrice)).toFixed(3)
  let percentProfit = ((offerPrice/currentPrice-1)*100).toFixed(4)
    const length = 10
    let trimmedDate = expected_close_date.substring(0, length);
    
  
    



useEffect(() => { 
  const finnhub = require("finnhub");

  const api_key = finnhub.ApiClient.instance.authentications["api_key"];
  api_key.apiKey = "cb6eu6aad3i70tu65u60"; // Replace this
  const finnhubClient = new finnhub.DefaultApi();
 
  finnhubClient.quote(ticker, (error, data, response) => {    
    setCurrentPrice(data.c)
  });

  


  // finnhubClient.quote(acquiring_company_ticker, (error, data, response) => {    
  //   setCurrentAcquiringPrice(data.c)
  // });

},[])
    
useEffect(() => {
  if (deal_type === "Stock") {
    const finnhub = require("finnhub");

    const api_key = finnhub.ApiClient.instance.authentications["api_key"];
    api_key.apiKey = "cb6eu6aad3i70tu65u60"; // Replace this
    const finnhubClient = new finnhub.DefaultApi();
 
    finnhubClient.quote(acquiring_company_ticker, (error, data, response) => {    
    setCurrentAcquiringPrice(data.c)
    })
  }
},[]);


useEffect(() => {
  let date_1 = new Date(expected_close_date);
  let date_2 = new Date();
  
  const days = (date_1, date_2) => {
    let difference = date_1.getTime() - date_2.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return TotalDays;
  };
  setTilClose(days(date_1, date_2)/365)  
}, [])




  // const finnhub = require("finnhub");

  // const api_key = finnhub.ApiClient.instance.authentications["api_key"];
  // api_key.apiKey = "cb6eu6aad3i70tu65u60"; // Replace this
  // const finnhubClient = new finnhub.DefaultApi();
  // let currentPrice  ;
  // finnhubClient.quote(ticker, (error, data, response) => {    
  //   currentPrice = data.c
  // });

  // console.log(transaction);
  // const map1= transaction.prototype.map((singleTicker) => {    
  //    return console.log(singleTicker),
  //   console.log(map1)
  //   });
  // ;

  // useEffect for current_price and can use that to replace <td> current_price </td> fetch request
  // calculate offer_price function which takes in current price and spits out offer price and invokes it where I have offer price
  return (
    <tr>
      <td>{ticker} </td>
      <td>{currentPrice} </td>
      <td>{acquiring_company} </td>
      <td>{offerPrice} </td>
      <td>{trimmedDate} </td>
      <td> {percentProfit }   %       </td>
      <td>{tilClose ? ((1/(tilClose))*((((cash_comp)+(stock_comp*currentAcquiringPrice))/currentPrice-1)*100).toFixed(4)).toFixed(4)  : null }%            </td>
      <td>{deal_type} </td>
      
      <td>{status} </td>
    </tr>
  );
}

export default Transaction;
