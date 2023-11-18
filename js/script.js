const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonImage = document.querySelector('.pokemon_image');
const form = document.querySelector('.form');
const input = document.querySelector('.input_search');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

let searchPokemon = 1; 

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
<<<<<<< HEAD
=======

>>>>>>> 8d88a1c066b0ec09a1a3e31a8026c18a171f4c74
    if (APIResponse.status === 200) {
        const data = await APIResponse.json();
        return data;
    }
}

<<<<<<< HEAD
const renderPokemon = async (pokemon) => { 
    
    pokemonName.innerHTML = "Loading...";
    pokemonNumber.innerHTML = "";

    const data = await fetchPokemon(pokemon);

        if (data) {
            pokemonName.innerHTML = data.name;
            pokemonNumber.innerHTML = data.id;
            pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
            pokemonImage.style.display = "block";
            input.value = "";
=======
const renderPokemon = async (pokemon) => {     
    pokemonName.innerHTML = "Loading..."; 
    pokemonNumber.innerHTML = "";

    const data = await fetchPokemon(pokemon); 

        if (data) { 
            pokemonName.innerHTML = data.name;
            pokemonNumber.innerHTML = data.id;
            pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
            pokemonImage.style.display = "block"; 
            input.value = ""; 
>>>>>>> 8d88a1c066b0ec09a1a3e31a8026c18a171f4c74
            searchPokemon = data.id;
        } else {
            pokemonName.innerHTML = "Not found :C";
            pokemonNumber.innerHTML = "";
            pokemonImage.style.display = "none";
        }
    }

const funcaosubmit = (event) => {
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());
}
form.addEventListener('submit', funcaosubmit)

buttonPrev.addEventListener('click', () => {
<<<<<<< HEAD
    if (searchPokemon > 1) {
=======
    if (searchPokemon > 1) { 
>>>>>>> 8d88a1c066b0ec09a1a3e31a8026c18a171f4c74
        searchPokemon --;
        renderPokemon(searchPokemon);
    }    
})

buttonNext.addEventListener('click', () => {
    if (searchPokemon < 649) {
        searchPokemon ++;
        renderPokemon(searchPokemon);
    }
})

<<<<<<< HEAD
renderPokemon(searchPokemon);
=======
renderPokemon(searchPokemon);
>>>>>>> 8d88a1c066b0ec09a1a3e31a8026c18a171f4c74
