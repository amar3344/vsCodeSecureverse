import "./index.css"

const Home = ()=>{
    return(
            <div className="home-container">
                <div className="header-home-containet">
                    <div className="secureverse-image-container">
                        <img src="https://secureverse.vercel.app/static/media/SecureverseLogo.dd6419b016160bb1d18a.png"
                        alt = "logo" className="secureverse-image"/>
                    </div>
                    <ul className="navs-home-container">
                        <li className="nav-items-home">Tutorials</li>
                        <li className="nav-items-home">Wallet</li>
                        <li className="button-login">Login / Register</li>
                    </ul>
                </div>
                <div className="context-container">
                    <div className="left-side-container">
                        <h1 className="heading-home">Smart Contract Auditing</h1>
                        <p className="text-home">Get your smart contracts audited quickly to ensure the most secure transactions on the blockchain.</p>
                        <button className="connect-wallet-button">Connect Wallet</button>
                        <table>
                            <thead>
                                <tr>
                                    <th>Relibiity</th>
                                    <th>Security</th>
                                    <th>Blockchain</th>
                                </tr>
                                <tr>
                                    <th>Protocols</th>
                                    <th>LowFees</th>
                                    <th>QuickService</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <div className="right-container">
                        <div className="safe-transaction-container">
                            <div className="image-info-container">
                                <div className="ether-container">
                                    <i className="fa-brands fa-ethereum ether-image"></i>
                                </div>
                                <i className="fa-sharp fa-solid fa-circle-info info-image"></i>
                            </div> 
                           <p className="text-safe-transactons">Safe-Transactions</p>
                           <p className="text-safe-transactons">...</p>
                           <p className="text-audit">Audit</p> 
                        </div>
                        <div className="chain-container">
                            <div className="option-container">
                                <h1 className="chain-text">Select your chain :</h1>
                                <select>
                                    <option value="Eth" className="option-text">Eth</option>
                                    <option value="BSC" className="option-text">BSC</option>
                                </select>
                            </div>
                            <div className="input-container">
                                <input type="text" placeholder="Enter Contract Address" className="input-address"></input>
                            </div>
                            <hr className="horizontal-name"/>
                            <button type="button" className="scan-now-btn">
                                Scan Now
                            </button>       
                        </div>    
                    </div>
                </div>
                <div className="context-container2">
                    <div className="service-heading-container">
                        <h1 className="service-heading">Services that we continue to improve</h1>
                        <p className="tag-text">The best choice for your smart contract needs.</p>
                    </div>
                    <ul className="list-container">
                        <li className="each-list-container">
                            <div className="list-image-container">
                                <i class="fa-solid fa-shield shield-image"></i>
                            </div>
                            <div className="text-list-container">
                                <h1 className="text-security">Security Guarentee</h1>
                                <p className="security-tag">Security is guranteed. We always maintain privacy and maintain the quality of our products</p>
                            </div>
                        </li>
                        <li className="each-list-container">
                            <div className="list-image-container voilet">
                            <i class="fa-solid fa-magnifying-glass shield-image"></i>
                            </div>
                            <div className="text-list-container">
                                <h1 className="text-security">Web3 Expertise</h1>
                                <p className="security-tag">Experience is guaranteed. We have a team of experts to help you with your smart contract needs</p>
                            </div>
                        </li>
                        <li className="each-list-container">
                            <div className="list-image-container red">
                            <i class="fa-solid fa-heart shield-image"></i>
                            </div>
                            <div className="text-list-container">
                                <h1 className="text-security">Fastest Service</h1>
                                <p className="security-tag">Quick service is guranteed. We always prioritise perfectly our customers needs</p>
                            </div>
                        </li>

                    </ul>
                    

                </div>
                <div className="footer-container">
                    <div className="social-media-container">
                        <img src="https://secureverse.vercel.app/static/media/SecureverseLogo.dd6419b016160bb1d18a.png"
                            alt = "logo" className="secureverse-image remove-margin"/>
                        <p className="social-media">Twitter</p>
                        <p className="social-media">Instagram</p>
                        <p className="social-media">Reddit</p>
                        <p className="social-media">Medium</p>
                    </div>
                    <p className="last-line">Reach out to us and get to know more! secureverse@gmail.com</p>
                </div>
                <hr className="horizontal-name"/>
                <div className="last-container">
                    <p className="securverse">@secureverse</p>
                    <p className="securverse">All rights reserved</p>

                </div>

            </div>
    )
}

export default Home