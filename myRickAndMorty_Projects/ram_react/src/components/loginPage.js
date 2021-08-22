import React, { useState } from 'react'
import './styles/loginPage.css'
import authLogic from './authLogic'
import GoogleAuth from './googleAuth'


const LoginPage = ({ gettingToken, handlingRegRender, isSignedOut}) => {
    
    const [emailTerm, setEmailTerm] = useState('')
    const [passwordTerm, setPasswordTerm] = useState('')
    
    
    const sendingToken = async(e) => {
        e.preventDefault()
        authLogic(gettingToken, emailTerm, passwordTerm)
    }
    

    const onInputChangeEmail = (e) => {
        setEmailTerm(e.target.value)
        console.log(emailTerm)
    }

    const onInputChangePassword = (e) => {
        setPasswordTerm(e.target.value )
        console.log(passwordTerm)
    }

    const onRegBtnClicked = (e) => {
        e.preventDefault()
        console.log('you made click and reg button...')
        handlingRegRender()
    }
   

    return (
        <div className="form-main" id="form-main">
            <p className="form-title">Log In</p>
            <form  className="login-form">
                
                <label className="label">
                    <span>Enter your email</span>
                    <input type="text" className="email" 
                    onChange={(e) => onInputChangeEmail(e)}
                    value={emailTerm} 
                    
                    
                    />
                </label>
                <label className="label">
                    <span>Enter your password</span>
                    <input type="password" className="password" 
                    onChange={(e) => onInputChangePassword(e)}
                    value={passwordTerm} 
                    />
                </label>    
                <div>
                    <button 
                        onClick={(e) => sendingToken(e)}
                        className="btnLogin">Send
                    </button>
                    <div>
                        <GoogleAuth gettingToken={ gettingToken } isSignedOut={ isSignedOut } />
                    </div>
                    

                </div>

                <div>
                    <button 
                    onClick={(e) => onRegBtnClicked(e)}
                    className="regBtn">Register with us
                    </button>
                      
                </div>
                <div className="infoSocialExtras">
                    <p><a href="/">Forgot Password/Username??</a></p>
                    <p><a href="/">Do you want to Register??</a></p>
                </div>

            </form>
        </div>
    )
}

export default LoginPage