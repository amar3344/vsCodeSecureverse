import './index.css'
import { useTable } from "react-table";

const TableBody = (columns,details)=>{
    const{getTableBodyProps,rows,prepareRow} = useTable({columns, details});

    return(
        <tbody {...getTableBodyProps}>
            {rows.map((row,i) => {
                prepareRow(row);
                return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map(cell => {
                            return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                        })}
                    </tr>
                )
            })}

        </tbody>
    )

    /*
    const {details} = this.props
    console.log(details)
    const {from,to,hash,blockNumber,value,timeStamp} = details

    return(
        <tr>
        <td>{from}</td>
        <td>{to}</td>
        <td>{hash}</td>
        <td>{blockNumber}</td>
        <td>{value}</td>
        <td>{timeStamp}</td>
        </tr>
        

    )
    */

}

export default TableBody