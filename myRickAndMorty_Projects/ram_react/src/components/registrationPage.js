import React, {useState} from 'react'
import './styles/loginPage.css'
import authLogic from './authLogic'
import regLogic from './regLogic'
// import authLogic from './authLogic'
import GoogleAuth from './googleAuth'

const RegistrationPage = ({ gettingToken, handlingRegNoRender }) => {
    
    const [emailTerm, setEmailTerm] = useState('')
    const [passwordTerm, setPasswordTerm] = useState('')
    const [nameTerm,setNameTerm] = useState('')
    
    const regProcess = async(e) => {
        e.preventDefault()
        await regLogic(nameTerm, emailTerm, passwordTerm)
        handlingRegNoRender()
    }
    
    const onInputChangeName = (e) => {
        setNameTerm(e.target.value )
        console.log(nameTerm)
    }

    const onInputChangeEmail = (e) => {
        setEmailTerm(e.target.value)
        console.log(emailTerm)
    }

    const onInputChangePassword = (e) => {
        setPasswordTerm(e.target.value )
        console.log(passwordTerm)
    }

    return (
        <div className="form-main" id="form-main">
            <p className="form-title">Register With Us</p>
            <form  className="login-form">
                
            <label className="label">
                    <span>Enter your full name</span>
                    <input type="text" className="name" 
                    onChange={(e) => onInputChangeName(e)}
                    value={nameTerm} 
                    
                    
                    />
                </label>
                
                
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
                        onClick={(e) => regProcess(e)}
                        className="btnLogin">Send
                    </button>
                    <div>
                        <GoogleAuth gettingToken={ gettingToken }/>
                    </div>
                </div>
                <div className="infoSocialExtras">
                    <p><a href="/">Forgot Password/Username??</a></p>
                    <p><a href="/">Do you want to Register??</a></p>
                </div>

            </form>
        </div>
    )
}

export default RegistrationPage