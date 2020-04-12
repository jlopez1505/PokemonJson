let save = document.getElementById("guardar")
let take = document.getElementById("sacar")
let contenedor = document.getElementById("contenedor")
let pokemon = ""
let inputs = document.getElementById("g")

function getName() {
    nomPokemon = document.getElementById("nombre").value
    pokemon = nomPokemon.toLowerCase()

    return pokemon
}

function mostrarInputs() {
    getName()
    if (pokemon!="") {
        if (inputs.style.display === "none") {
            inputs.style.display = "block"
        }
        else{
            inputs.style.display="none"
        }
    } 
    else{
        alert("Inserte un pokemón")
    }
}

function guardarPokemon() {
    getName()
    if (localStorage.getItem(pokemon)===null) {
        nombrePokemon = {}
        let tipoPokemon = document.getElementById("tipo").value
        let nivelPokemon = document.getElementById("nivel").value

        nombrePokemon.tipo = tipoPokemon
        nombrePokemon.nivel = nivelPokemon
        
        let stats = JSON.stringify(nombrePokemon)
        localStorage.setItem(pokemon, stats)
        alert("Registro de pokemón exitoso")
    }
    else{
        alert("Ese pokemon ya fue guardado")
    }
}

function sacarPokemon() {
    getName()
    if (pokemon=="") {
        alert("Inserte un pokemón")
    }
    else if (localStorage.getItem(pokemon)==null) {
        alert("Ese pokemón aún no está registrado")
    } 
    else{
        let pokedex = localStorage.getItem(pokemon)
        let yoTeElijo = JSON.parse(pokedex)
        let mostrar = document.createElement("p")
        contenedor.appendChild(mostrar)
        mostrar.setAttribute("class", "resultado")
        mostrar.innerHTML = (`${pokemon}: <br> Tipo: ${yoTeElijo.tipo} <br>     Nivel: ${yoTeElijo.nivel}`) 
    } 
}