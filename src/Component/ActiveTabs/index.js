import "./index.css"

const ActiveTabs = (props) =>{
    //console.log(props)
    const {tabDetails,updateActiveTab} = props
    const {id,displayText} = tabDetails

    const getActiveTab = () => {

       updateActiveTab(id)
    }

    return(
        <li className="list-tabs">
            <button type="button" className="tab-buttons" onClick={getActiveTab}>{displayText}</button>
        </li>
    )
    

}

export default ActiveTabs
