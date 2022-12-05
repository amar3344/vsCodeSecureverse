import "./index.css"

const ActiveTabs = (props) =>{
    //console.log(props)
    const {tabDetails,updateActiveTab,isActive} = props
    //console.log(isActive)
    const {id,displayText} = tabDetails
    const displayTextbackground = isActive && "tab-active"
    //const loadingSpinner = !isLoading && "disabled"

    const getActiveTab = () => {

       updateActiveTab(id)
    }

    return(
        <li className="list-tabs">
            <button type="button"  className={`tab-buttons ${displayTextbackground}`} onClick={getActiveTab}>{displayText}</button>
        </li>
    )
    

}

export default ActiveTabs
