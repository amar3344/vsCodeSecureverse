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
                <li className="link-bars">
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li className="link-bars">
                    <Link to="/etherscan">
                    Etherscan
                    </Link>
                </li>
                <li className="link-bars">
                    <Link to="/bscscan">
                    Bscscan
                    </Link>
                </li>         
                <li className="link-bars">
                    <Link to="/tronscan">
                    Tronscan
                    </Link>
                </li>         
            </ul>
        </nav>
    )
}

export default Navbar


                        
                        