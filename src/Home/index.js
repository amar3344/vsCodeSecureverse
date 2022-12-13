import "./index.css"

const Home = ()=>{
    return(
        <div className="home-container">
            <img src="https://pbs.twimg.com/profile_images/1527944311718850560/6f8pJAiP_400x400.jpg" 
            alt="secureverse-logo" className="secureverse-image"/>
            <h1 className="home-text">Welcome to the secureverse Wallet Tracking</h1>
            <div className="home-buttons-container">
                <button className="home-buttons">SignUp</button>
                <button className="home-buttons">As a guest</button>
            </div>
            

        </div>
    )
}

export default Home