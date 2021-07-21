import React, { useEffect, useState } from 'react'
import CharList from './charlist'
import '../global.css'
import axios from 'axios'

const App = () => {
    
    const url_api = 'https://rickandmortyapi.com/api/character/'
    const [chars, setChars] = useState([])
    

    useEffect(()=>{
        const fetchData = async () => {
        const data  = await axios.get(url_api, {},{
        
        })
        setChars(data.data.results)
    }

    fetchData()
    
},[])

const onHandleDelete = (charToDelete) => {
    console.log(charToDelete)
    const newChars = chars.filter((_char)=>{
        return _char !== charToDelete
    })

    setChars(newChars)
       
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