  import React, {  useEffect, useState } from 'react'
  import ReactDom from 'react-dom'
//import React from 'react'
import CharList from './charlist'
import '../global.css'
import axios from 'axios'
import PageError from './pageError'
import PageLoading from './pageLoading'
import LoginPage from './loginPage'

const App = () => {

   
    
    const url_api = 'https://rickandmortyapi.com/api/character/'
    const url_api_node ='http://localhost:3001/characters'
    
    const [chars, setChars] = useState([])
    const [error, setError] = useState(null)
    const [loading,setLoading] = useState(true)
    const [showCharList, setShowCharList] = useState(false)


    console.log('1. Loading: at Constructor ' + loading)
    
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
    
    
    if (!showCharList){
        return (  
            <div>
               <div className="header">
                   My Rick And Morty with React
               </div>
               <LoginPage gettingToken={ gettingToken }/>               
           </div>
       )
    }

    if (error){
        return(
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
       </div>
   )


    

}

export default App



// class App extends React.Component {
//     constructor(props) {
        
//         super(props)
//         this.state = {
//             chars: [],
//             error: null,
//             loading: false
//         }
//         console.log('1. Loading: at Constructor ' + this.state.loading)        
//     }
    
    

//     componentDidMount(){
//         console.log('3. Loading: at componentDidMount ' + this.state.loading)
//         this.setState({ loading:true })
//         console.log('4. Loading: at componentDidMount ' + this.state.loading)
//         this.fetchData()
//         this.intervalId = setInterval(this.fetchData, 5000);
    
//     }
    
//    fetchData = async () => {
        
//         try{
//             const data  = await axios.get('http://localhost:3001/characters', {},{
//             })
//             this.setState({ loading:false, chars: data.data.results }) 
//             clearInterval(this.intervalId); 
//         }catch(err){
//             if(err.response.status === 400){
//                 this.setState(
//                     {
//                         error: 'Server has no responses for Characters',
//                         loading: false
//                     })
                
//             }

//         }
        
//     }
   
//     onHandleDelete = (charToDelete) => {
//         console.log(charToDelete)
//         const newChars = this.state.chars.filter((_char)=>{
//             return _char !== charToDelete
//     })

//         this.setState({chars: newChars})
//     }
    
//     render() {
//         console.log('2. Loading: at Render ' + this.state.loading)
//          if (this.state.loading === true){
//              return <PageLoading loadingMessage={'Loading...'} />
//          }

//         if (this.state.error){
//             return(
//                 <PageError errorMessage={this.state.error}  />
//             ) 
//         }
    
//         return (    
//             <div>
//                 <div className="header">
//                     My Rick And Morty with React
//                 </div>
//                 <CharList 
//                 characters={ this.state.chars }
//                 onHandleDelete = { this.onHandleDelete }
//                 />
//             </div>
//         )
//     }

// }


