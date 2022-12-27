import {formatDistanceToNow} from 'date-fns'
import './index.css'


const TableBody = (props) =>{
    const {details,input} = props
    const inputTransaction = input
    //console.log(inputTransaction)
   // console.log(details)
    const {ownerAddress,toAddress,hash,amount,timestamp,block} = details
    //console.log(ownerAddress,toAddress,hash,amount,timestamp,block)
    //let amount = value/(10 ** 18)
    //amount = Math.round(amount)
    let timedate = timestamp
    timedate = formatDistanceToNow(timedate)
    //timedate = new Date(timedate)
    //timedate = timedate.toDateString() 

    const transactionType = ownerAddress.toString().toLowerCase() === inputTransaction.toString().toLowerCase() ? "OUT" : "IN"
    const classNameTypeofTransaction = transactionType === "IN" ? "transaction-type-incoming" : "transaction-type-outgoing"
    //console.log(transactionType)
    //console.log(from)

    return(
        <tr>
            <td><span className="from-text-table">{ownerAddress}</span></td>
            <td><span className="from-text-table">{toAddress}</span></td>
            <td className={classNameTypeofTransaction}>{amount}</td>
            <td className={`time-text ${classNameTypeofTransaction}`}>{timedate} ago</td>
            <td><span className="from-text-table">{hash}</span></td>
            <td><sapn className={`${classNameTypeofTransaction}`}>{transactionType}</sapn></td>
            <td className={classNameTypeofTransaction}><span className="blocknumber-text" ></span>{block}</td>
        
        </tr>
        

    )
    
    

}

export default TableBody