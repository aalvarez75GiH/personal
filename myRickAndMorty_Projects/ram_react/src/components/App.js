// import React, {  useEffect, useState } from 'react'
import React from 'react'
import CharList from './charlist'
import '../global.css'
import axios from 'axios'
import PageError from './pageError'
class App extends React.Component {
    
    state = {
        chars: [],
        error: null,
        loading: null
    }

    // const url_api = 'https://rickandmortyapi.com/api/character/'
    // const url_api_node ='http://localhost:3001/characters'

    componentDidMount(){
        
        const fetchData = async () => {

            try{
                const data  = await axios.get('http://localhost:3001/characters', {},{
                })
                this.setState({chars: data.data.results})
            }catch(err){
                if(err.response.status === 400){
                    this.setState({error: 'Server has no responses for Characters'})
                    //throw new Error('The World is ending...')
                }

            }
            
        }
        fetchData()
    }
    


    onHandleDelete = (charToDelete) => {
        console.log(charToDelete)
        const newChars = this.state.chars.filter((_char)=>{
            return _char !== charToDelete
    })

        this.setState({chars: newChars})
    }
    
    render() {
        if (this.state.error){
            return(
                //<PageError error={this.state.error}/>
                `${this.state.error}`
            ) 
        }
        return (    
            <div>
                <div className="header">
                    My Rick And Morty with React
                </div>
                <CharList 
                characters={ this.state.chars }
                onHandleDelete = { this.onHandleDelete }
                />
            </div>
        )
    }
    
            
    

}

// const App = () => {
    
//     const url_api = 'https://rickandmortyapi.com/api/character/'
//     const url_api_node ='http://localhost:3001/characters'
    
//     const [chars, setChars] = useState([])
//     const [error, setError] = useState(null)
    

//     useEffect(()=>{
//         try {
//             const fetchData = async () => {
//                 const data  = await axios.get(url_api_node, {},{
//                 })
//                 setChars(data.data.results)
//             }
//             fetchData()
//         }catch(error){
//             setError(error)
//         }
//         console.log(error)
//     },[])


//     const onHandleDelete = (charToDelete) => {
//         console.log(charToDelete)
//         const newChars = chars.filter((_char)=>{
//             return _char !== charToDelete
//     })

//         setChars(newChars)

//     }

//     return (    
//         <div>
//             <div className="header">
//                 My Rick And Morty with React
//             </div>
//             <CharList 
//             characters={ chars }
//             onHandleDelete = { onHandleDelete }
//             />
//         </div>
//     )
            
    

// }
export default App






















// class App extends React.Component {
    
//     state = {
//         chars:[]
//     }

//     componentDidMount(){
//         const url_api = 'https://rickandmortyapi.com/api/character/'
//         const fetchData = async () => {
//         const { data } = await axios.get(url_api, {},{
//         })
//             console.log({ data })
//             this.setState({chars: data.results})
//             console.log(this.state.chars)
//         }
            
//         fetchData()
//     }

//     render(){
//     return(
//         <div>
//              <div className="header">
//                  My Rick And Morty with React
//              </div>
//              <CharList characters={ this.state.chars }/>
//          </div>
//     )
// }


// }