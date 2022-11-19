import {Component} from "react"

import './App.css';
import TableBody from "./Component/TableBody/index";

import logoImage from './logo-image.webp'

let input =""
let newResults = {}
let amount = null
let recentTime = null;
let typeofTransaction = null
var intervalId = null
let url = null
let apiKey = null

let transactionTabs = [
    {
    id : 0,
    displayText : "Internal Transactions"

},
{
    id : 1,
    displayText : "ETH Transactions"
}

]

class App extends Component {
    state = {transactionResults :[],message : "",activeTabId:transactionTabs[0].displayText}
 
    stopTransactionsFromUrl = () =>{
        //console.log("a")
        clearInterval(intervalId)

    }

        getdetailsFromUrl = async() =>{
            apiKey = "IW9FKB2254UUN54IE52QKMQCIYNF61R4X5";
            
            url = "https://api.etherscan.io/api?module=account&action=txlist&address=" + input + "&startblock=0&endblock=99999999&page=1&offset=10&sort=desc&apikey=" + apiKey;
            //console.log(url);
            let ercUrl = "https://api.etherscan.io/api?module=account&action=tokentx&address=" + input + "&page=1&offset=100&startblock=0&endblock=27025780&sort=desc&apikey=" + apiKey
            console.log(ercUrl)
        
            let options = {
                method: "GET"
            };
        
            await fetch(url, options)
                .then(function(response) {
                    return response.json();
                })


                .then(async function(jsonData) {
                    let resultsData = await jsonData;
                    let {message,result} = resultsData
                    
                    if (message === "OK") {
                        newResults = result
                        return newResults
    
                    }

                });
            this.setState({transactionResults : newResults})
            //intervalId = setInterval(this.getdetailsFromUrl(), 5000);

        }
            
        getTransactionType(from){
            if(from.toString().toLowerCase() === input.toString().toLowerCase()){
                return "OUTGOING"
            }else{
                return "INCOMING"
            }
        }

        gettingInputValue=(event)=>{
            input = event.target.value

        }


        render(){
            const {transactionResults,activeTabId}  = this.state;
            
            console.log(transactionResults)
            //transactionResults.map(eachTransaction => console.log(eachTransaction))
            let recentTransaction = [];
            if(transactionResults[0] !== undefined){
                recentTransaction = transactionResults[0]
                amount = (recentTransaction.value)/(10 ** 18)
                recentTime = (recentTransaction.timeStamp) * 1000
                recentTime = new Date(recentTime)
                recentTime = recentTime.toDateString()

                typeofTransaction = this.getTransactionType(recentTransaction.from)
                //console.log(typeofTransaction)
            }
            
            let classNameTypeofTransaction = typeofTransaction === "OUTGOING" ?  "type-transaction-outcome" : "type-transaction-income"

            return (   
                <div className="main-container">
                    <div className="bg-container">
                        <div className="header-container">
                            <div>
                                <img src={logoImage} alt="logo" className="logo-image" />
                                <p className="logo-text">Etherum</p>
                            </div>
                            <h1 className="heading">Welcome to Securevers's Wallet tracking</h1>
                            <div className="button-container">
                                <button type="button" className="login-button">Login</button>
                                <button type="button" className="connect-button">Connet Wallet</button>
                            </div>
                        </div>
                        <div className="search-container">
                            <select className="drop-down-button">
                                <option value="" className="drop-down-text">All Filters</option>
                                <option className="drop-down-text" value="BSC">BSC</option>
                                <option className="drop-down-text" value="ETC">ETH</option>
                                <option className="drop-down-text" value="TRN">TRN</option>
                            </select>
                            <div className="search-element">
                                <input type="search" className="search-input" placeholder="add address here" onChange={this.gettingInputValue}/>
                            </div>
                        </div>
                        <div className="button-container-stop-start">
                            <button type="button" className="search-address-button" id="GetDetails" onClick={this.getdetailsFromUrl}>Scan Now</button>
                            <button type="button" className="stop-address-button" id="stopDetails" onClick={this.stopTransactionsFromUrl}>Stop Scan</button>
                        </div>

                        <ul className="result-container" id="resultContainer">
                            <li className="listEle">Transaction Details :
                                <p className="from-text">FROM : <span id="fromText" className="result-text">{recentTransaction.from}</span></p>
                                <p className="from-text">To : <span id="toText" className="result-text">{recentTransaction.to}</span></p>
                                <p className="from-text">Amount : <span id="amountText" className="result-text">{amount}</span></p>
                                <p className="from-text">Time : <span id="timeText" className="result-text">{recentTime}</span></p>
                                <p className="from-text">Hash Number : <span id="hashNumberText" className="result-text">{recentTransaction.hash}</span></p>
                                <p className="from-text">Block Number : <span id="BlockNumberText" className="result-text">{recentTransaction.blockNumber}</span></p>
                                <p className="from-text">Type of Transaction : <span id="typeoftransactionText" className = {`result-text ${classNameTypeofTransaction}`}>{typeofTransaction}</span></p>
                            </li>
                        </ul>
                        <div className="button-tabs-container">
                            <button type="button" className="tab-buttons" onClick={this.getdetailsFromUrl}>Internal Transactions</button>
                            <button type="button" className="tab-buttons" onClick={this.getEthTokenTransactions}>Eth20 Transactions</button>
                        </div>
                        <div className="tabs-container">
                            <h1 className="active-tabs">{activeTabId}</h1>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>From Wallet Address</th>
                                    <th>To Wallet Address</th>
                                    <th>Transaction Amount</th>
                                    <th>Time</th>
                                    <th>Hash Number</th>
                                    <th>Block Number</th>
                                    <th>Type of Transaction</th>
                                </tr>
                            </thead>
                            <tbody> {
                                transactionResults.map((eachTransaction,index) =>{
                                    return(
                                        <TableBody key={index} details = {eachTransaction} input={input}/>
                                )
                                })
                                }
                            </tbody>  
                        </table>
                    </div>
                </div> 
              );
    }


  }

  

export default App;
