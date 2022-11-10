import './index.css'

const TableBody = (props)=>{
    const {tableBodyDetails} = this.props
    const {from,to,hash,blockNumber,value,timeStamp} = tableBodyDetails

    return(
        <>
        <td>{from}</td>
        <td>{to}</td>
        </>
        

    )

}

export default TableBody