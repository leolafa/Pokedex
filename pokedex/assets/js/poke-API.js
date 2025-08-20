
const pokeAPI={}

pokeAPI.getPokemonsDetails = (pokemon) => {
    return fetch(pokemon.url).then((response) => response.json())

}

pokeAPI.getPokemonData = (offset=0,limit=10)=>{
   const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url)
        .then(response => response.json())
        .then(jsonBody => jsonBody.results)
        .then((pokemons )=> pokemons.map(pokeAPI.getPokemonsDetails))
        .then((detailRequests) => Promise.all(detailRequests ))
        .then((pokemonsDetails) => pokemonsDetails)
        
}