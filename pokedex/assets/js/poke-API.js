
const pokeAPI={}

function convertPokeApiDetailToPokemon(pokeDetail){
    const pokemon = new Pokemon();
    pokemon.number = pokeDetail.order;
    pokemon.name = pokeDetail.name;
    pokemon.types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
    pokemon.type = pokemon.types[0];
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;

    return pokemon;
}    

pokeAPI.getPokemonsDetails = (pokemon) => {
    return fetch(pokemon.url)
            .then((response) => response.json())
            .then(convertPokeApiDetailToPokemon)
}

pokeAPI.getPokemonData = (offset=0,limit=6)=>{
   const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url)
        .then(response => response.json())
        .then(jsonBody => jsonBody.results)
        .then((pokemons )=> pokemons.map(pokeAPI.getPokemonsDetails))
        .then((detailRequests) => Promise.all(detailRequests ))
        .then((pokemonsDetails) => pokemonsDetails)
        
}