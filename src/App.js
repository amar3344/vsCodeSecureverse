import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from "./Home"
import Etherscan from "./Etherscan"
import Bscscan from "./Bscscan"
import Navbar from "./Navbar"

import "./App.css"

const App = ()=>{
    return(
        <Router>
            <Navbar/>
            <Routes>
                <Route exact path = "/" element={<Home/>}/>
                <Route exact path = "/etherscan" element={<Etherscan/>}/>
                <Route exact path = "/bscscan" element={<Bscscan/>}/>
            </Routes>
        </Router>
        

    )

}

export default App;