import {formatDistanceToNow} from 'date-fns'
import './index.css'


const TableBody = (props) =>{
    const inputTransaction = props.input
    //console.log(inputTransaction)
    
    const {details} = props
    //console.log(details)
    const {from,to,hash,value,timeStamp,blockNumber} = details
    let amount = value/(10 ** 18)
    amount = Math.round(amount)
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
            <td><span className="from-text-table">{hash}</span></td>
            <td><span className="blocknumber-text"></span>{blockNumber}</td>
            <td className="time-text">{timedate} ago</td>
            <td><span className="from-text-table">{from}</span></td>
            <td><sapn className={`${classNameTypeofTransaction}`}>{transactionType}</sapn></td>
            <td><span className="from-text-table">{to}</span></td>
            <td>{amount}</td>
        
        </tr>
        

    )
    

}

export default TableBody