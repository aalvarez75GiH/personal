import React, { useState } from 'react'
import Main from '../components/main'
import imagenSignUp from '../imagenes/signup.png'
import { Link } from 'react-router-dom'


const SignUp = ({ signUp, showError }) => {

    const [ user, setUser ] = useState({
        email: '',
        nombre: '',
        username: '',
        bio: '',
        password:''
    })
  
const handleInputChange = (e) => {
    e.preventDefault()
    setUser(
        {
            ...user, [e.target.name]: e.target.value
        }
    )

    console.log('state:', user)
} 

const handleOnSubmit = async(e) => {
    e.preventDefault()
    
    try {
        await signUp(user)
    } catch(error){
        showError(error.response.data)
    }

}

    return (
        <Main center={ true }>
           <div className="Signup">
               <img src={imagenSignUp} alt="" className="Signup__img" />
               <div className="FormContainer">
                   <h1 className="Form__titulo">Clontagram</h1>
                   <p className="FormContainer__info">
                       Register with us...
                   </p>
                   <form
                   onSubmit={(e)=> handleOnSubmit(e)}
                   >
                       <input
                       onChange={ (e) => handleInputChange(e)} 
                       className="Form__field" 
                       type="email" 
                       name="email" 
                       placeholder="email"
                       required
                       value={user.email}
                       
                       />
                       <input 
                       onChange={ (e) => handleInputChange(e)}
                       className="Form__field" 
                       type="text" 
                       name="nombre" 
                       placeholder="Name"
                       required
                       minLength="3"
                       maxLength="100"
                       value={user.name}
                       />
                       <input 
                       onChange={ (e) => handleInputChange(e)}
                       className="Form__field" 
                       type="text" 
                       name="username" 
                       placeholder="Username"
                       required
                       minLength="3"
                       maxLength="30"
                       value={user.username}
                       />
                       <input 
                       onChange={ (e) => handleInputChange(e)}
                       className="Form__field" 
                       type="text" 
                       name="bio" 
                       placeholder="tell us about you..."
                       required
                       minLength="3"
                       maxLength="150"
                       value={user.bio}
                       />
                       <input
                       onChange={ (e) => handleInputChange(e)} 
                       className="Form__field" 
                       type="password"
                       autoComplete="on" 
                       name="password" 
                       placeholder="password"
                       required
                       value={user.password}
                       />
                       <button 
                       className="Form__submit" 
                       type="submit">Sign Up</button>
                       <p 
                       className="FormContainer__info">
                        already have an account?
                        <Link to="/login">Login</Link>
                        </p>
                   </form>

               </div>

           </div>
        </Main>
    )
}

export default SignUp