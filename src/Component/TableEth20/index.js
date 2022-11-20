import './index.css'


const TableEth20 = (props) =>{
    const inputTransaction = props.input
    //console.log(inputTransaction)
    
    const {detailsE20} = props
    //console.log(detailsE20)
    const {from,to,hash,blockNumber,value,timeStamp,tokenSymbol} = detailsE20
    const amount = value/(10 ** 18)
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
        <td>{amount}</td>
        <td>{timedate}</td>
        <td>{hash}</td>
        <td>{blockNumber}</td>
        <td>{tokenSymbol}</td>
        <td className={classNameTypeofTransaction}>{transactionType}</td>
        </tr>
        

    )
    

}

export default TableEth20