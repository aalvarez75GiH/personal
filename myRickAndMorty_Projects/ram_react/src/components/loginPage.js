import React, { useState } from 'react'
import './styles/loginPage.css'
import axios from 'axios'

const LoginPage = ({ gettingData }) => {
    
    const [emailTerm, setEmailTerm] = useState('')
    const [passwordTerm, setPasswordTerm] = useState('')
    
    const sendingFormData = async(e) => {
        e.preventDefault()
        const email = emailTerm
        const password = passwordTerm
        fetch('https://rick-and-morty-auth-8grodfuvo.vercel.app/api/auth/login', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            mode:'cors',
            body: JSON.stringify({ email, password })
           
        })
        .then(res => {
            if (res.status === 404){
                alert('User not found...')
            }
            return res.json()
        })
        .then(response => {
            if (response.token){

                localStorage.setItem('token', response.token)
                gettingData(emailTerm, passwordTerm, response.token)
                return response.token
            }   
        })
        .then(token => {
            //return fetch('http://localhost:3000/api/auth/me',{
            return fetch('https://rick-and-morty-auth-8grodfuvo.vercel.app/api/auth/me',{
                method:'GET',
                headers: {
                'Content-Type': 'application/json',
                authorization: token,
            },
        })
        })
        .then(x => x.json())
        .then(fetchedUser => {
            localStorage.setItem('user', JSON.stringify(fetchedUser))          
        })
        
    }
    

    const onInputChangeEmail = (e) => {
        setEmailTerm(e.target.value )
        console.log(emailTerm)
    }

    const onInputChangePassword = (e) => {
        setPasswordTerm(e.target.value )
        console.log(passwordTerm)
    }

    
    
    return (
        <div className="form-main" id="form-main">
            <p className="form-title">Log In</p>
            <form  
            className="login-form"
            //onSubmit={ onSearchSubmit }
             >
                
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
                    onClick={(e) => sendingFormData(e)}
                    className="btnLogin">Send</button>
                    
                </div>
                <div className="infoSocialExtras">
                    <p><a>Forgot Password/Username??</a></p>
                    <p><a>Do you want to Register??</a></p>
                </div>

            </form>
        </div>
    )
}

export default LoginPage