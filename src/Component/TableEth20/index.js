import {formatDistanceToNow} from 'date-fns'
import './index.css'


const TableEth20 = (props) =>{
    const {input,detailsE20} = props
    console.log(props)
    const inputTransaction = input
    //console.log(inputTransaction)
    //console.log(detailsE20)
    
    const {from,to,hash,value,timeStamp,tokenSymbol,blockNumber,tokenDecimal} = detailsE20
    //console.log(value)
    //console.log(tokenDecimal)
    
    let amount = value / (10 ** tokenDecimal)
    let timedate = timeStamp * 1000
    timedate = formatDistanceToNow(timedate)
    //timedate = new Date(timedate)
    //timedate = timedate.toDateString()

    const transactionType = from.toString().toLowerCase() === inputTransaction.toString().toLowerCase() ? "OUT" : "IN"
    const classNameTypeofTransaction = transactionType === "IN" ? "transaction-type-incoming" : "transaction-type-outgoing"
    //console.log(transactionType)
    //console.log(from)

    return(
        <tr>
            <td><span className="from-text-table">{from}</span></td>
            <td><span className="from-text-table">{to}</span></td>
            <td className={classNameTypeofTransaction}>{amount}</td>
            <td className={`time-text ${classNameTypeofTransaction}`}>{timedate} ago</td>
            <td><span className="from-text-table">{hash}</span></td>    
            <td className={classNameTypeofTransaction}>{transactionType}</td>    
            <td className={classNameTypeofTransaction}>{blockNumber}</td>
            <td><span className="from-text-table">{tokenSymbol}</span></td>
        </tr>
        

    )
    

}

export default TableEth20