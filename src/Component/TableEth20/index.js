import './index.css'


const TableEth20 = (props) =>{
    const {input,detailsE20} = props
    //console.log(props)
    const inputTransaction = input
    //console.log(inputTransaction)
    //console.log(detailsE20)
    
    const {from,to,hash,value,timeStamp,tokenSymbol} = detailsE20
    //console.log(value)
    
    let amount = value
    let timedate = timeStamp * 1000
    timedate = new Date(timedate)
    timedate = timedate.toDateString()

    const transactionType = from.toString().toLowerCase() === inputTransaction.toString().toLowerCase() ? "OUT" : "IN"
    const classNameTypeofTransaction = transactionType === "IN" ? "transaction-type-incoming" : "transaction-type-outgoing"
    //console.log(transactionType)
    //console.log(from)

    return(
        <tr>
            <td><span className="from-text-table">{hash}</span></td>
            <td className="time-text">{timedate}</td>
            <td><span className="from-text-table">{from}</span></td>
            <td className={classNameTypeofTransaction}>{transactionType}</td>
            <td><span className="from-text-table">{to}</span></td>
            <td>{amount}</td>
            <td><span className="from-text-table">{tokenSymbol}</span></td>
        </tr>
        

    )
    

}

export default TableEth20