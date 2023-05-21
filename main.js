//boton search
const btn = document.querySelector('#btn')
let genero = document.querySelector('#genero');
//cards
let contenedorCards = document.querySelector('#contenedor-cards')
let tituloGenre = document.querySelector('#hero-title h2')

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'c010562850msh841c7710e92fd1ep163100jsn30b1d49c937e',
        'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
    }
};

btn.addEventListener('click', (e) => {
    e.preventDefault();
    tituloGenre.innerHTML = (genero.value).toUpperCase()
    searchAnimeByGenre(genero.value)

})

const searchAnimeByGenre = async (genre) => {
    options.method = "GET";
    let animes = await (await fetch(`https://anime-db.p.rapidapi.com/anime?page=1&size=20&genres=${genre}`, options)).json();
    contenedorCards.innerHTML = ''
    for (let i = 0; i < animes.data.length; i++){
        contenedorCards.innerHTML += `
        <div class="card">
            <img src="${animes.data[i].image}" alt="${animes.data[i].title}">
            <h2>${animes.data[i].title}</h2>
        </div>
        `
    }
}

//Get generos
const getGeneros = async () => {
    options.method = "GET";
    let generos = await (await fetch(`https://anime-db.p.rapidapi.com/genre`, options)).json();
    console.log(generos._id)
    for (let i = 0; i < generos.length; i++) {
        genero.innerHTML += `<option value=${generos[i]._id}>${generos[i]._id}</option>`
    }

}

//Get all
const getAllAnimes = async () => {
    options.method = "GET";
    let animes = await (await fetch(`https://anime-db.p.rapidapi.com/anime?page=1&size=20&sortOrder=asc`, options)).json();
    for (let i = 0; i < animes.data.length; i++) {
        contenedorCards.innerHTML += `
        <div class="card">
            <img src="${animes.data[i].image}" alt="haikyu">
            <h2>${animes.data[i].title}</h2>
        </div>
        `
    }
}

function searchGenre() {

}

//invocaciones funciones

// getGeneros();
// getAllAnimes()

