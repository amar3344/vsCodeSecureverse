import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from "./Home"
import Etherscan from "./Etherscan"
import Bscscan from "./Bscscan"
import Navbar from "./Navbar"
import Tronscan from "./Tronscan"

import "./App.css"

const App = ()=>{
    return(
        <Router>
            <Navbar/>
            <Routes>
                <Route exact path = "/" element={<Home/>}/>
                <Route exact path = "/etherscan" element={<Etherscan/>}/>
                <Route exact path = "/bscscan" element={<Bscscan/>}/>
                <Route exact path = "/tronscan" element={<Tronscan/>}/>
            </Routes>
        </Router>
        

    )

}

export default App;