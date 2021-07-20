import React, { useState } from 'react'
import CharItem from './charItem'


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
        <div>
           {charList}
        </div>
    )
}

export default CharList
