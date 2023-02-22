import "./index.css"

const ActiveTabs = (props) =>{
    console.log(props)
    const {tabDetails,updateActiveTab,isActive,isLoading,buttonDisable} = props
    
    const {id,displayText} = tabDetails
    const displayTextbackground = isActive && "tab-active"
    

    const getActiveTab = () => {

       updateActiveTab(id)
    }

    return(
        <li className="list-tabs">
            {buttonDisable ? (
            <button type="button" disabled  className={`tab-buttons ${displayTextbackground}`} onClick={getActiveTab}>{displayText}</button>
            ) : (
            <button type="button"  className={`tab-buttons ${displayTextbackground}`} onClick={getActiveTab}>{displayText}</button>
            )}
        </li>
    )
    

}

export default ActiveTabs
