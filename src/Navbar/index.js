import {Link} from "react-router-dom"
import "./index.css"

const Navbar = ()=>{
    return(
        <nav className="navbar-container">
            <div className="nav-image">
                <img src="https://st4.depositphotos.com/16552764/20957/v/600/depositphotos_209572350-stock-illustration-block-chain-logo-illustration-block.jpg"
                    alt="blockchain-logo" className="blockchain-logo"/>
            </div>
            <ul className="list-router-container">
                <li className="link-bars nav-buttons">
                    <Link to="/" style={{"text-decoration":"none"}}>
                        Home
                    </Link>
                </li>
                <li className="link-bars nav-buttons">
                    <Link to="/etherscan" style={{"text-decoration":"none"}}>
                    Etherscan
                    </Link>
                </li>
                <li className="link-bars nav-buttons">
                    <Link to="/bscscan" style={{"text-decoration":"none"}}>
                    Bscscan
                    </Link>
                </li>         
                <li className="link-bars nav-buttons">
                    <Link to="/tronscan" style={{"text-decoration":"none"}}>
                    Tronscan
                    </Link>
                </li>    
                <li className="link-bars">
                    <Link to="/Auth" style={{"text-decoration":"none"}} className="login-btn">
                    Login
                    </Link>
                </li>              
            </ul>
        </nav>
    )
}

export default Navbar


                        
                        