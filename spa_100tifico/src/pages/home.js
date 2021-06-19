import getData from "../utils/getData"
import character from "./character"

const home = async () => {
    const data = await getData()
    const view = `
    <div class="characters">
    ${data.results.map(character =>`
    <article class="characters-item">
            <a href="#/${character.id}/">
                <img src="${character.image}" alt="${character.name}">
                <h2>${character.name}</h2>
            </a>
        </article>
    `).join('')}
    </div>    
    `
    return view

}

export default home