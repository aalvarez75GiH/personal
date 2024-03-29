import React, {useState} from 'react'
import './styles/loginPage.css'
import authLogic from './authLogic'
import regLogic from './regLogic'
// import authLogic from './authLogic'


const RegistrationPage = ({ gettingToken, handlingRegNoRender }) => {
    
    const [emailTerm, setEmailTerm] = useState('')
    const [passwordTerm, setPasswordTerm] = useState('')
    const [nameTerm,setNameTerm] = useState('')
    // const [userType, setUserType] = useState('')
    
    const regProcess = async(e) => {
        e.preventDefault()
        const userType = 'localUser'
        await regLogic(nameTerm, emailTerm, passwordTerm, userType)
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
                </div>
            </form>
        </div>
    )
}

export default RegistrationPage