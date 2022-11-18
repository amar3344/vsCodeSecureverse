import './index.css'


const TableBody = (props) =>{
    const inputTransaction = props.input
    console.log(inputTransaction)
    
    const {details} = props
    //console.log(details)
    const {from,to,hash,blockNumber,value,timeStamp,} = details
    const amount = value/(10 ** 18)
    let timedate = timeStamp * 1000
    timedate = new Date(timedate)
    timedate = timedate.toDateString()

    const transactionType = from.toString() === inputTransaction.toString() ? "OUTGOING" : "INCOMING"
    console.log(transactionType)
    //console.log(from)

    return(
        <tr>
        <td>{from}</td>
        <td>{to}</td>
        <td>{amount}</td>
        <td>{timedate}</td>
        <td>{hash}</td>
        <td>{blockNumber}</td>
        <td>{transactionType}</td>
        </tr>
        

    )
    

}

export default TableBody