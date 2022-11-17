import {Component} from "react"
//import { render } from '@testing-library/react';

import './App.css';
import TableBody from "./Component/TableBody";
//import TableBody from "./Component/TableBody"
import logoImage from './logo-image.webp'

let input =""
let newResults = {}
let amount = null
let recentTime = null;
let typeofTransaction = null

class App extends Component {
    state = {transactionResults :[],message : ""}

        getdetailsFromUrl = async() =>{
            const apiKey = "IW9FKB2254UUN54IE52QKMQCIYNF61R4X5";
            
            let url = "https://api.etherscan.io/api?module=account&action=txlist&address=" + input + "&startblock=0&endblock=99999999&page=1&offset=10&sort=desc&apikey=" + apiKey;
            //console.log(url);
            //url = "https://api.etherscan.io/api?module=account&action=txlist&address=0x6dfc34609a05bC22319fA4Cce1d1E2929548c0D7&startblock=0&endblock=99999999&page=1&offset=10&sort=desc&apikey=IW9FKB2254UUN54IE52QKMQCIYNF61R4X5"
        
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
                //await console.log(newResults)
            this.setState({transactionResults : newResults})
            //setInterval(getdetailsFromUrl, 5000);
        }

        /*async getTableBody(){
            const {transactionResults} = this.state
            if(transactionResults !== undefined){
                return(
                    <tr>
                        {transactionResults.map((eachTransaction,index) =>
                    <TableBody key = {index} tableBodyDetails = {eachTransaction}/>)}
                    </tr>
                )

            }
            
        }*/

        getTableBody=()=>{
            const {transactionResults} = this.state

            for (let i=1;i<transactionResults.length;i++){
                <TableBody columns = {i} details={transactionResults[i]}/>
            }
                    

                
            }
            
        

        getTransactionType(from){
            if(from.toString() === input.toString()){
                return "OUTGOING"
            }else{
                return "INCOMING"
            }
        }

        gettingInputValue=(event)=>{
            input = event.target.value

        }


        render(){
            const {transactionResults}  = this.state;
            //console.log(transactionResults)
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
                        <button type="button" className="search-address-button" id="GetDetails" onClick={this.getdetailsFromUrl}>Scan Now</button>
            
                        <ul className="result-container" id="resultContainer">
                            <li className="listEle">Transaction Details :
                                <p className="from-text">FROM : <span id="fromText" className="result-text">{recentTransaction.from}</span></p>
                                <p className="from-text">To : <span id="toText" className="result-text">{recentTransaction.to}</span></p>
                                <p className="from-text">Amount : <span id="amountText" className="result-text">{amount}</span></p>
                                <p className="from-text">Time : <span id="timeText" className="result-text">{recentTime}</span></p>
                                <p className="from-text">Hash Number : <span id="hashNumberText" className="result-text">{recentTransaction.hash}</span></p>
                                <p className="from-text">Block Number : <span id="BlockNumberText" className="result-text">{recentTransaction.blockNumber}</span></p>
                                <p className="from-text">Type of Transaction : <span id="typeoftransactionText" className="result-text">{typeofTransaction}</span></p>
                            </li>
                        </ul>
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
                            <tbody>
                            {this.getTableBody()}
                            </tbody>
                            
                        </table>
                    </div>
                </div>
              );

    }

  }

export default App;
