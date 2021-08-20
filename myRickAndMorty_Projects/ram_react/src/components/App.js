import React, { useState } from 'react'
//import React from 'react'
import CharList from './charlist'
import '../global.css'
import axios from 'axios'
import PageError from './pageError'
import PageLoading from './pageLoading'
import LoginPage from './loginPage'
import RegistrationPage from './registrationPage'



const App = () => {

   
    
    const url_api = 'https://rickandmortyapi.com/api/character/'
    //const url_api_node ='http://localhost:3001/characters'
    
    const [chars, setChars] = useState([])
    const [error, setError] = useState(null)
    const [loading,setLoading] = useState(true)
    const [showCharList, setShowCharList] = useState(false)
    const [regPage, setRegPage] = useState(false)
    

    
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

    const gettingOut = (e)=> {
        e.preventDefault()
        alert('gettin out...')
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setShowCharList(false)
    }


    const gettingToken = (token) => {
        console.log('token submitted...' + token)
        if (token){
            setLoading(true)
            const intervalID = setTimeout(()=> {
                fetchData()
            },1000)
            setShowCharList(true)
        }
    }
    
    const handlingRegRender = () => {
        console.log('returning from login page...')
        setRegPage(true)
        console.log(regPage)
    }

    const handlingRegNoRender = () => {
        console.log('returning from regstrationPage...')
        setRegPage(false)
        console.log(regPage)
    }
    
    if (regPage) {
        console.log(regPage)
        return (
            <div>
               <div className="header">
                   My Rick And Morty with React
               </div>
               <RegistrationPage handlingRegNoRender={handlingRegNoRender} />               
           </div>
        )
    }


    if (!showCharList){
        return (  
            <div>
               <div className="header">
                   My Rick And Morty with React
               </div>
               <LoginPage gettingToken={ gettingToken } handlingRegRender={ handlingRegRender } handlingRegNoRender={handlingRegNoRender}/>               
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
                onClick={(e)=> gettingOut(e)} 
                id="logOutBtn" 
                class="testBtn"
                >LogOut</button>
            </footer>
            
       </div>
   )


    

}

export default App



