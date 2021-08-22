import React, { useState, useEffect } from 'react'
//import React from 'react'
import CharList from './charlist'
import '../global.css'
import axios from 'axios'
import PageError from './pageError'
import PageLoading from './pageLoading'
import LoginPage from './loginPage'
import RegistrationPage from './registrationPage'
import GoogleAuth from './googleAuth'


const App = () => {

    const url_api = 'https://rickandmortyapi.com/api/character/'
    //const url_api_node ='http://localhost:3001/characters'
    
    const [chars, setChars] = useState([])
    const [error, setError] = useState(null)
    const [loading,setLoading] = useState(true)
    const [showCharList, setShowCharList] = useState(false)
    const [regPage, setRegPage] = useState(false)
    const [showCharListG, setShowCharListG] = useState(false)
    
    
    
    
    const fetchData = async () => {
            
        try{
            setLoading(true)
                const data  = await axios.get(url_api, {},{
                })
                setLoading(false)
                setChars(data.data.results)
        }
         catch(err){
             if(err.response.status === 400){
                setLoading(false)
                setError('Server has no responses for Characters')
             }
         }
    }

    const onHandleDelete = (charToDelete) => {
        console.log(charToDelete)
        const newChars = chars.filter((_char)=>{
            return _char !== charToDelete
    })

        setChars(newChars)

    }

  

    const gettingOutLocal = (e)=> {
        alert('You are being logged out, come back soon...')
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        localStorage.removeItem('userType')
        setShowCharList(false)
    }

    const gettingOutG = (e)=> {
        alert('You are being logged out, come back soon...')
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        localStorage.removeItem('userType')
        setShowCharListG(false)
    }

    const gettingToken = (token, userType) => {
        console.log(`token submitted: ${token}`)
        console.log(`user Type is: ${userType}`)
        if (token && userType === 'localUser'){
            setLoading(true)
            alert('Welcome back...')
            const intervalID = setTimeout(()=> {
                fetchData()
            },1000)
            setShowCharList(true)
        }
        if (token && userType === 'googleUser'){
            setLoading(true)
            const intervalID = setTimeout(()=> {
                fetchData()
            },1000)
            setShowCharListG(true)
        }
    }
    
    const handlingRegRender = () => {
        setRegPage(true)
    }

    const handlingRegNoRender = () => {
        setRegPage(false)
    }
    
    if (regPage) {
        return (
            <div>
               <div className="header">
                   My Rick And Morty with React
               </div>
               <RegistrationPage handlingRegNoRender={handlingRegNoRender} />               
           </div>
        )
    }


    if (!showCharList && !showCharListG){
        return (  
            <div>
               <div className="header">
                   My Rick And Morty with React
               </div>
               <LoginPage 
               gettingToken={ gettingToken } 
               handlingRegRender={ handlingRegRender }/>               
           </div>
        )
    }

    if (error){
        return(
            //console.log('there is no token...')
            <PageError errorMessage={error}/>
        ) 
    }

    if (loading === true){
        return <PageLoading loadingMessage={'Loading...'} />
    }
    if (showCharList){
        return (  
            <div>
               <div className="header">
                   My Rick And Morty with React
               </div>
               <CharList 
               characters={ chars }
               onHandleDelete = { onHandleDelete }
               />
               <footer id="footer">
                    <button
                    onClick={(e)=> gettingOutLocal(e)} 
                    id="logOutBtn" 
                    class="testBtn"
                    >LogOut</button>
                </footer>
                
           </div>
       )
    }

    if (showCharListG){
        return (  
            <div>
               <div className="header">
                   My Rick And Morty with React
               </div>
               <CharList 
               characters={ chars }
               onHandleDelete = { onHandleDelete }
               />
               <footer id="footer">
                    <button
                    onClick={(e)=> gettingOutG(e)} 
                    id="logOutBtn2" 
                    class="googleBtnOut2"
                    >
                    <i className="google icon"></i>
                    Google LogOut</button>
                </footer>
                
           </div>
       )
    }
    


    

}

export default App



