import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../global.css'

const CharItem = ({ character , onHandleDelete }) => {

    const [dimension, setDimension] = useState('') 
    const [ url, setUrl ] = useState('')

    useEffect(()=> {
        console.log(character.id)
        const settingURL = () => {
            character.origin.url ? setUrl(character.origin.url) : setUrl(character.location.url)
        }
        settingURL()
    },[])
        
    const fetchData = async () => {
        const { data } = await axios.get(url,{},{

        })
        console.log(data.dimension)
        setDimension(data.dimension)
    }
   
    fetchData()
  
    return (
        <div className={`charContainer  ${character.id}`}>
            <img src={character.image} alt="" />
            <ul className="characterInfo">
                <li className="liName">{character.name}</li>
                <li className="liGender">{character.gender}</li>
                <li className="liDim">{ dimension }</li>
            </ul>
            <button 
            onClick={()=> onHandleDelete(character)} 
            type="submit" 
            className="infoBtn"> Out</button>
 
        </div>
    )
}

export default CharItem