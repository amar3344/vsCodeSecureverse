import './index.css'


const TableBody = (props) =>{
    const inputTransaction = props.input
    //console.log(inputTransaction)
    
    const {details} = props
    //console.log(details)
    const {from,to,hash,value,timeStamp,} = details
    let amount = value/(10 ** 18)
    amount = Math.round(amount)
    let timedate = timeStamp * 1000
    timedate = new Date(timedate)
    timedate = timedate.toDateString()

    const transactionType = from.toString().toLowerCase() === inputTransaction.toString().toLowerCase() ? "OUTGOING" : "INCOMING"
    const classNameTypeofTransaction = transactionType === "INCOMING" ? "transaction-type-incoming" : "transaction-type-outgoing"
    //console.log(transactionType)
    //console.log(from)

    return(
        <tr>
        <td>{from}</td>
        <td>{to}</td>
        <td className="time-text">{timedate}</td>
        <td>{hash}</td>
        <td>{amount}</td>
        <td className={classNameTypeofTransaction}>{transactionType}</td>
        </tr>
        

    )
    

}

export default TableBody