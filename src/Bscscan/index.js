import {Component} from "react"
import Loader from "react-loader-spinner"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import './index.css';

import TableEth20 from "../Component/TableEth20"
import TableBody from "../Component/TableBody";
import ActiveTabs from "../Component/ActiveTabs"


let input =""
let newResults = null
let amount = null
let recentTime = null;
let typeofTransaction = null
let intervalId = null
let etherInterval = null
let apiKey = null
let a = null
let options = {
    method: "GET"
};
apiKey = "HC3SX1U6GS2PZ7RXEJ1KSE8Y1FZRTE6AS5";

let transactionTabs = [
    {
    id : 0,
    displayText : "Internal Transactions"

},
{
    id : 1,
    displayText : "Bsc20 Transactions"
}

]

class Bscscan extends Component {
    state = {transactionResults :[],message : "",activeTabId:transactionTabs[0],isLoading:false,disabledButton:true}


    
        getdetailsFromUrl = async() =>{
            if(input === ""){
                alert("Please Enter Valid Address")
            }
            else{
                let url = "https://api.bscscan.com/api?module=account&action=txlist&address=" + input + "&startblock=0&endblock=99999999&page=1&offset=10&sort=desc&apikey=" + apiKey;
                //console.log(url);
            
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
                this.setState({transactionResults : newResults,isLoading : false,disabledButton:false})
                // intervalId = setInterval(this.getdetailsFromUrl, 5000);

            }

        }

        getTransactionsFromEther20 = async() =>{
            let bscUrl = "https://api.bscscan.com/api?module=account&action=tokentx&address=" + input + "&page=1&offset=5&startblock=0&endblock=999999999&sort=desc&apikey=" + apiKey
            console.log(bscUrl)

            await fetch(bscUrl,options)
            .then(function(response){
                return response.json()
            })

            .then(async function(jsonData){
                 let resultsDataEther = await jsonData;
                    let {message,result} = resultsDataEther
                    
                    if (message === "OK") {
                       newResults = await result
                        //console.log(newResults)
                        return newResults
    
                    }

            })
            this.setState({transactionResults : newResults,isLoading:false})
            // intervalId = setInterval(this.getTransactionsFromEther20, 5000);

        }
            
        getTransactionType=(from)=>{
            if(from.toString().toLowerCase() === input.toString().toLowerCase()){
                return "OUTGOING"
            }else{
                return "INCOMING"
            }
        }

        gettingInputValue=(event)=>{
            input = event.target.value

        }

        getTransactionsFromUrl = () =>{
            intervalId = setInterval(this.getdetailsFromUrl, 3000);
            clearInterval(etherInterval)
            clearInterval(a)
        }

        getTransactionsFromEther20Url = () => {
            etherInterval = setInterval(this.getTransactionsFromEther20, 2000);
            clearInterval(intervalId)
            clearInterval(a)

        }



        updateActiveTab = (id) =>{
            const {activeTabId} = this.state
            const activeTabDisplay = activeTabId.displayText

            activeTabDisplay !== "Internal Transactions" ? this.getTransactionsFromUrl() : this.getTransactionsFromEther20Url()
            this.setState({activeTabId : transactionTabs[id],transactionResults : newResults})
            //console.log(activeTabId)    
        }

        getTableInternalTransactions =() =>{
            const {transactionResults,activeTabId,isLoading} = this.state
            const activeTabDisplay = activeTabId.displayText
            
            return(
                <>
                <h1 className="active-tabs" style={{"text-align":"center"}}>{activeTabDisplay}</h1>        
                        <table>
                            <thead>
                                <tr>
                                    <th>From Wallet Address</th>
                                    <th>To Wallet Address</th>
                                    <th>Transaction Amount</th>
                                    <th className="time-text">Time</th>
                                    <th>Hash Number</th>
                                    <th>Type of Transaction</th>
                                    <th>Block</th>                         
                                </tr>
                            </thead>
                            <tbody> {isLoading ? (<Loader type="TailSpin" color="#00BFFF" height={50} width={50} />) : (
                                transactionResults.map((eachTransaction,index) =>{
                                    return(
                                        <TableBody key={index} details = {eachTransaction} input={input}/>
                                )
                                }))
                                
                                }
                            </tbody>  
                        </table>
                </>
            )
        }

        getTableBsc20Transactions = () =>{
            const {transactionResults,activeTabId,isLoading} = this.state
            const activeTabDisplay = activeTabId.displayText
            //console.log(transactionResults)

            return(
                <>
                <h1 className="active-tabs" style={{"text-align":"center"}}>{activeTabDisplay}</h1>        
                        <table>
                            <thead>
                                <tr>
                                    <th>From Wallet Address</th>
                                    <th>To Wallet Address</th>
                                    <th>Transaction Amount</th>
                                    <th>Time</th>
                                    <th>Hash Number</th>
                                    <th>Type of Transaction</th>     
                                    <th>BlockNumber</th>
                                    <th>tokenSymbol</th>
                                </tr>
                            </thead>
                            <tbody> { isLoading ? (<Loader type="TailSpin" color="#00BFFF" height={50} width={50} />) : (
                                transactionResults.map((eachTransaction,index) =>{
                                    return(
                                        <TableEth20 key={index} detailsE20 = {eachTransaction} input={input}/>
                                )
                                }))
                                
                                }
                            </tbody>  
                        </table>
                
                </>
            )
        }

        setIntervaldetailasUrl = () =>{
            a = setInterval(this.getdetailsFromUrl,3000)
            this.setState({isLoading:true})
        }


        render(){
            const {transactionResults,activeTabId,isLoading,disabledButton}  = this.state;
            //console.log(activeTabId)
            
            //console.log(transactionResults)
            //transactionResults.map(eachTransaction => console.log(eachTransaction))
            let recentTransaction = [];
            if(transactionResults[0] !== undefined){
                recentTransaction = transactionResults[0]
                amount = (recentTransaction.value)/(10 ** 18)
                amount = Math.round(amount)
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
                                <img src="https://bscscan.com/images/brandassets/BscScan-logo-circle.png" alt="logo" className="logo-image" />
                                <p className="logo-text">BscScan</p>
                            </div>
                            <h1 className="heading">Welcome to Securevers's Bsc Wallet tracking</h1>
                            <div className="ether-buttons-container">
                                <button type="button" className="ether-buttons">Login</button>
                                <button type="button" className="ether-buttons">Connect Wallet</button>
                            </div>
                        </div>
                        <div className="search-result-container">
                            <h1 className="text">The Ethereum Blockchain Explorer</h1>
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
                                <button type="button" className="search-button" onClick={this.setIntervaldetailasUrl}>
                                <i class="fa-solid fa-magnifying-glass"></i>
                                </button>
                                
                            </div>
                            <p className="tag-line">Sponsored:   <span className="span-elements">Binance - <a target="blank" href="https://accounts.binance.com/en/register?ref=XG03LB9A&utm_source=etherscan&utm_medium=header-text&utm_campaign=paid_central_etherscan-complimentary-placement" className="anchore-liks">Buy Bitcoin with zero fees!</a></span> We've just removed all our trading fees when you buy Bitcoin.</p>
            

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
                        </div>
                        <ul className="button-tabs-container">
                            {transactionTabs.map(eachTab =>(
                                <ActiveTabs key={eachTab.id} tabDetails={eachTab} updateActiveTab = {this.updateActiveTab} isActive={eachTab.id === activeTabId.id} isLoading={isLoading} buttonDisable={disabledButton}/>
                            ))}
                        </ul>
                        
                        {activeTabId.displayText === "Internal Transactions" ? this.getTableInternalTransactions() : this.getTableBsc20Transactions()}    
                        
                    </div>
                </div> 
              );
    }


  }

  

export default Bscscan;
