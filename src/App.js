import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from "./Home"
import Etherscan from "./Etherscan"
import Bscscan from "./Bscscan"
import Navbar from "./Navbar"
import Auth from "./Auth"

import "./App.css"

const App = ()=>{
    return(
        <Router>
            <Navbar/>
            <Routes>
                <Route  path = "/" element={<Home/>}/>
                <Route  path = "/etherscan" element={<Etherscan/>}/>
                <Route  path = "/bscscan" element={<Bscscan/>}/>
                <Route  path = "/Auth" element={<Auth/>}/>
            </Routes>
        </Router>
        

    )

}

export default App;