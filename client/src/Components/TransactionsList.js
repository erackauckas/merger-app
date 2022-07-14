import Transaction from "./Transaction";
// import { useState}  from "react"
function TransactionsList({ filteredStocks }) {
// const [percentProfit, setPercentProfit] = useState(null)
//   function handleSort () {
//     filteredStocks.sort((a,b) => a-b);
//   }

// function sortTable() {
//   let table, rows, switching, i, x, y, shouldSwitch;
//   table=document.getElementById("myTable");
//   switching=true;
//   while (switching) {
//     switching= false;
//     rows=table.rows;
//     for (i=1; i<(rows.length-1); i++) {
//       shouldSwitch=false;
//       x=rows[i].getElementsByTagName("td")[0];
//       y=rows[i+1].getElementsByTagName("td")[0];
//       if (Number(x.innterHTML) > Number(y.innterHTML)){
//         shouldSwitch=true;
//         break;
//       }
//   }
//   if (shouldSwitch) {
//     rows[i].parentNode.insertBefore(rows[i+1], rows[i]);
//     switching=true;
//   }
// }
  const transactionRows = filteredStocks.map((singleTransaction) => {
    return (
      <Transaction key={singleTransaction.id} transaction={singleTransaction} />
    );
    
  });

  return (
    <table className="merger_table" id="myTable">
      <tbody>
        <tr>
          <th>
            <h3 className="Title">Ticker</h3>
          </th>
          <th>
            <h3 className="Title">Current Price</h3>
          </th>
          <th>
            <h3 className="Title">Acquiring Company </h3>
          </th>
          <th>
            <h3 className="Title">Offer Price</h3>
          </th>
          <th>
            <h3 className="Title">Expected Close Date</h3>
          </th>
          <th>
            <h3 className="Title">Profit Percent 
            {/* <button onClick="sortTable()">Sort</button> */}
            <br></br></h3>
          </th>
          <th>
            <h3 className="Title">Annualized Profit Percent</h3>
          </th>
          <th>
            <h3 className="Title">Deal Type</h3>
          </th>
          <th>
            <h3 className="Title">Status</h3>
          </th>
        </tr>
        {transactionRows}
      </tbody>
    </table>
  );
}

export default TransactionsList;
