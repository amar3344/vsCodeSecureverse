import './index.css'


const TableEth20 = (props) =>{
    const inputTransaction = props.input
    //console.log(inputTransaction)
    
    const {detailsE20} = props
    //console.log(detailsE20)
    const {from,to,hash,value,timeStamp,tokenSymbol} = detailsE20
    //console.log(value)
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
        <td>{tokenSymbol}</td>
        <td className={classNameTypeofTransaction}>{transactionType}</td>
        </tr>
        

    )
    

}

export default TableEth20