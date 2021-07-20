import React, { useEffect, useState } from 'react'
import CharList from './charlist'
import '../global.css'
import axios from 'axios'

const App = () => {
    const url_api = 'https://rickandmortyapi.com/api/character/'
    const [chars, setChars] = useState([])

    useEffect(()=>{
        const fetchData = async () => {
        const { data } = await axios.get(url_api, {},{
        
        })
        
        console.log({ data })
        setChars(data.results)
        console.log(chars)
       return ()=> {
           console.log('hola')
       }
    }

    fetchData()
    
},[])

        return (
        <div>
            <div className="header">
                My Rick And Morty with React
            </div>
            <CharList characters={ chars }/>
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