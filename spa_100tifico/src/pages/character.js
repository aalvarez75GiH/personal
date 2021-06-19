import getData from "../utils/getData"
import getHash from "../utils/getHash"

const character =   async() => {
    const id  = getHash()
    const data = await getData(id)
    const view = `
    <div class="characters-inner">
        <article class="character-card">
            <img src="${data.image}" alt="name">
            <h2>${data.name}</h2>
    
        </article>
        <article class="character-card">
            <h3>Episodes: ${data.episode.length}</h3>
            <h3>Status: ${data.status}</h3>
            <h3>Species: ${data.species}</h3>
            <h3>Gender: ${data.gender}</h3>
            <h3>Origin: ${data.origin.name}</h3>
            <h3>Last location: ${data.location.name}</h3>
            
        </article>

    </div>
    
    `    
    return view
}

export default character 


