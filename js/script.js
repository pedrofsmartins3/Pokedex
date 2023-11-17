// recuperar elementos do html:
const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonImage = document.querySelector('.pokemon_image');
//pegamos no form porque é a informação que vem dele que queremos 
const form = document.querySelector('.form');
const input = document.querySelector('.input_search');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');
// pegamos nos butoes para dar js no click para ir next e prev.

let searchPokemon = 1; //variável que vamos ++ e -- nos botões

const fetchPokemon = async (pokemon) => {
// função fetchPokemon para buscar um atributo pokemon
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
// buscar uma resposta da API, no fetch pomos onde vamos buscar
// o ${} é para por javascript e este vai ser o lugar onde a pessoa ao escrever no input essa informação vem para aqui e complementa o url.
// await --> quando o código chegar aqui espera a conclusão da linha, e depois continua (só pode ser usado em função async=assincrona)

// usamos o status 200 porque sempre que tem pokemon é o status que aparece
    if (APIResponse.status === 200) {
        const data = await APIResponse.json();
//agora com isto nós vamos buscar a data e transformar essa informação em json.
// com o await vamos esperar de novo para continuar   
        return data; //reutilizar dados data noutra função 
    }
}

const renderPokemon = async (pokemon) => { 
//rendarizar o pokemon que dermos
    
    pokemonName.innerHTML = "Loading..."; //enquanto espera resultado
    pokemonNumber.innerHTML = "";

    const data = await fetchPokemon(pokemon); //buscar data do pokemon

        if (data) { //caso tenha valor certo dá o resultado
            pokemonName.innerHTML = data.name;
            pokemonNumber.innerHTML = data.id;
            pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
     /*.name e .id são os valores que queremos da API referentes ao name e number. Para a IMAGE temos de por todo o trajeto até ao link que queremos. Podemos usar . ou [''].*/
            pokemonImage.style.display = "block"; // mostrar imagem
            input.value = ""; //para limpar sempre o que for procurado do input
            searchPokemon = data.id; //para ficar no numero que procurarmos e ao clicar no botão passar a partir desse numero
        } else { //caso nao tenha valor:
            pokemonName.innerHTML = "Not found :C";
            pokemonNumber.innerHTML = "";
            pokemonImage.style.display = "none"; //esconder imagem
        }
    }

const funcaosubmit = (event) => {
    event.preventDefault();
    renderPokemon(input.value.toLowerCase()); //rendarizar o valor do input + .toLowerCase = transforma em letras minusculas
}
form.addEventListener('submit', funcaosubmit)
//tudo isto é para recuperar a informação que é digitada no input search

buttonPrev.addEventListener('click', () => {
    if (searchPokemon > 1) { //para nao permitir ir a numeros negativos
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

renderPokemon(searchPokemon);
//este vai ser o pokemon default que vai aparecer mal entremos no site