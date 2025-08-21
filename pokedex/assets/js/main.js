let offset = 0;
const limit = 5;

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
const loadMoreButton = document.getElementById('LoadMore');


function loadPokemonItems(offset, limit) {
    pokeAPI.getPokemonData(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
            <li class="pokemon ${pokemon.type}" data-name="${pokemon.name}" onclick="openModal('${pokemon.name}')">
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
        `).join('');
        pokemonList.innerHTML += newHtml;
    })
}

loadPokemonItems(offset, limit);


loadMoreButton.addEventListener('click', () => {
    offset += limit;
    loadPokemonItems(offset, limit);
})

function openModal(pokemonName) {
    const modal = document.getElementById("pokemonModal");
    const detailsDiv= document.getElementById("pokemonDetails");

    detailsDiv.innerHTML = "<p>Carregando...</p>"; 
    modal.style.display = "block";

    pokeAPI.getPokemonFullDetails(pokemonName).then(pokemon=>{
        detailsDiv.innerHTML = `
            <h2>${pokemon.name} (#${pokemon.id})</h2>
            <img src='${pokemon.image}' alt='${pokemon.name}'>
            <p>Height: ${pokemon.height}</p>
            <p>Weight: ${pokemon.weight}</p>
            <p>Abilities: ${pokemon.abilities.join(', ')}</p>
            <p>Types: ${pokemon.types.join(', ')}</p>
            <h3>Stats:</h3>
            <ul>
                ${pokemon.stats.map(stat=>`<li>${stat.stat.name}: ${stat.base_stat}</li>`).join('')}
            </ul>
        `;
        })
}    


function closeModal() {
    const modal= document.getElementById("pokemonModal");
    modal.style.display = "none";
}


document.addEventListener('DOMContentLoaded', function() {
    const closebtn = document.getElementById('closebtn');
    const modal = document.getElementById("pokemonModal");

    closebtn.onclick = closeModal;

    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }   
    };
});  