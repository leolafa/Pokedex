const offset = 0;
const limit = 10;

const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;


function convertPokemontoList(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}


function convertPokemonTohtml(pokemon) {
    return `
    <li class="pokemon">
            <span class="number">#${pokemon.order}</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                    ${convertPokemontoList(pokemon.types).join('')}
                </ol>
                <img src='${pokemon.sprites.other.dream_world.front_default}'
                    alt='${pokemon.name}'>
            </div>
            
    </li>
    `
}

const pokemonList = document.getElementById('pokemonList');



pokeAPI.getPokemonData().then(pokemons => {
    pokemonList.innerHTML = pokemons.map(convertPokemonTohtml).join('');


});    