import React from 'react'

const CharItem = ({ character }) => {
    return (
        <div className="charContainer">
            <img src={character.image} alt="" />
            <div>{character.gender}</div>
            <div>{character.status}</div>
            
        </div>
    )
}

export default CharItem