const offset = 0;
const limit = 10;

const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;


function convertPokemontoList(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="type ${typeSlot.type.name}">${typeSlot.type.name}</li>`)
}


function convertPokemonTohtml(pokemon) {
    return `
    <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <img src='${pokemon.photo}'
                    alt='${pokemon.name}'>
            </div>
            
    </li>
    `
}

const pokemonList = document.getElementById('pokemonList');



pokeAPI.getPokemonData().then(pokemons => {
    pokemonList.innerHTML = pokemons.map(convertPokemonTohtml).join('');


});    