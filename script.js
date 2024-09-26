let button = document.querySelector("#searchButton")
const getPokemons = async() => {
    const Pokemons = await axios.get('https://pokeapi.co/api/v2/pokemon/')
    console.log(Pokemons)
}

let pokemonName = document.querySelector("#pokemonName")
let pokemonImage = document.querySelector("#pokemonImage")
let pokemonID = document.querySelector("#pokemonID")
let pokemonWeight = document.querySelector("#pokemonWeight")
let baseEXP = document.querySelector("#baseEXP")
button.addEventListener('click', async () => {

   

    //where does this need to be scoped?
    let pokemon = document.querySelector("#inputBar").value
    console.log(pokemon)
    let response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    )
    let pokePicture = response.data.sprites.front_default
    let pokeName = `${response.data.name}`
    let pokeID = `${response.data.id}`
    let pokeWeight = `${response.data.weight}`
    let pokeEXP = `${response.data.base_experience}`

    pokemonImage.setAttribute(`src` , `${pokePicture}`)
    pokemonName.innerText = `Name = ${pokeName}`
    pokemonID.innerText = `ID = ${pokeID}`
    pokemonWeight.innerText = `Weight = ${pokeWeight}`
    baseEXP.innerText =  `This pokemon has ${pokeEXP} base EXP`


    console.log(pokeName)

    //Axios call goes here
    //remember to use Async and Await!
    //DOM Setters go here

}
)
