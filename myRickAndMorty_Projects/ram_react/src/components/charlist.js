import React, { useState } from 'react'
import CharItem from './charItem'
import '../global.css'


const CharList = ({ characters }) => {
  
    console.log(characters)
     
    const charList = characters.map((data) => {
        return(
            <CharItem key={data.id} character={data}/>
        // <div>{data.gender}</div>
        // console.log(data)
        ) 
    })

    return (
        <div className="container">
           {charList}
        </div>
    )
}

export default CharList
