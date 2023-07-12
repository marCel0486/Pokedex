const pokeContainer = document.querySelector('.Pokecontainer')
const pokemonCount = 150

const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
}

const mainTypes = Object.keys(colors)

const fetchPokemon = async () =>{
    for (let i = 1; i <= pokemonCount; i++){
        await getPokemon(i)
    }
}

const getPokemon
 = async (id) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const response = await fetch(url)

    const data = await response.json()

    createPokemon(data)
}

const createPokemon = (pk) => {
    const card = document.createElement('div')
    card.classList.add('pokemon')

    const name = pk.name[0].toUpperCase() + pk.name.slice(1)

    const id = pk.id.toString().padStart(3,'0')

    const pokeType = pk.types.map(type => type.type.name)
    const type = mainTypes.find(type => pokeType.indexOf(type) > -1 )
    const color = colors[type]

    card.style.background = color

    const pokemonHtml = `
    <div class="imgContainer">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pk.id}.png" alt="${name}">
        </div>
        <div class="info">
            <span class="number">
                ${id}
            </span>
            <h3 class="name">
                ${name}
            </h3>
            <small class="type">
                ${type}
            </small>
            </div>
            `

            card.innerHTML = pokemonHtml

            pokeContainer.appendChild(card)

}

fetchPokemon()

