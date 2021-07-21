import React from 'react'
import CharItem from './charItem'
import '../global.css'


const CharList = ({ characters, onHandleDelete }) => {

    const charList = characters.map((data) => {
        return(
            <CharItem 
            key={data.id} 
            character={data} 
            onHandleDelete={onHandleDelete}
            />
        )
    })
        
    return (
        <div className="container">
           {charList}
        </div>
    )     
}
    
    


export default CharList
