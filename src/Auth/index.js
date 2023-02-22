import {useState} from "react"
import Cookies from "js-cookies"

import "./index.css"
import securelogo from "../Secure.png"
import { useSearchParams } from "react-router-dom"
const Auth = (props)=>{
    
    const [name,setName] = useState('')
    const [userPassword,setUserPassword] = useState("")
    const [displayErrorMessage,setdisplayErrorMessage] = useState(false)
    const [errorMessage,setErrorMessage] = useState("")
    const [isSignUp,setIsSignUp] = useState(false)

    const getUsername=(e)=>{
        setName(e.target.value)
    }
    const getPassword=(e)=>{
        setUserPassword(e.target.value)

    }

    const handleSwitch=()=>{
        setIsSignUp(!isSignUp)
    }

    const getCredentialsFromCCBP= async (e)=>{
        e.preventDefault()

        const userDetails = {username:name,password:userPassword}
        setName('')
        setUserPassword('')
        console.log(userDetails)

        const url = "https://apis.ccbp.in/login"
        const options = {
            method : "POST",
            body : JSON.stringify(userDetails)
        }

        const res = await fetch(url,options)
        const data = await res.json()
        // console.log(res)
        // console.log(data)
        if(res.ok === true){
            const token = data.jwt_token 
            Cookies.set("jwt_token",token,{expires : 1})

        }
        else{
            setdisplayErrorMessage(true)
            setErrorMessage(data.error_msg)
        }

    }

    

    return(
        <div className="login-page-container">
            <div className="image-form-container">
                <img src={securelogo} alt="logo" className="secureverse-image-auth"/>
                <form className="form-container" onSubmit={getCredentialsFromCCBP}>
                    {isSignUp && (
                        <>
                        <label htmlFor="name" name="name" placeholder="name">Display Name</label>
                        <input type="name"  id="name" style={{"margin-bottom":"10px"}}/>
                        </>
                    )}

                    <label htmlFor="name"> Username</label>
                    <input id="name" value={name} type="text"  placeholder="username.." onChange={getUsername}/>

                    <div className="lable-elements">
                        <label htmlFor="password">Password</label>
                        <p className="blue-colors">forgot password?</p>
                    </div>
                    <input id="password" value={userPassword} type="password" placeholder="password" onChange={getPassword}/>
                    {isSignUp && (
                        <p style={{"font-size":"13px","margin-bottom":"10px"}}>Passwords must contain at least eight characters, including at least 1 letter and 1 number.</p>
                    )}
                    {isSignUp && (
                        <div className="check-box-container">
                        <input type="checkbox" id="checkbox" className="check-box"/>
                        <label style={{"font-size":"13px" ,"font-weight":"400"}} htmlFor="checkbox">Opt-in to receive occasional product updates, user research invitations, company announcements, and digests.</label>
                        </div>
                    )}
                    {isSignUp ? <button type="button" className="form-buttons">Sign Up</button> : <button type="submit" className="form-buttons" >Login</button>}
                    {displayErrorMessage && <p style={{color:"red"}}>{errorMessage}</p>}
                </form>
                {isSignUp ? null : (
                    <p>Don't have an account ?
                    <span className="sign-up-btn" onClick={handleSwitch}>sign up</span>
                </p>

                    
                )}
                
            </div>
            
        </div>
    )
}

export default Auth