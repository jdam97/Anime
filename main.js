//boton search
const btn = document.querySelector('#btn')
let genero = document.querySelector('#genero');
//cards
let contenedorCards = document.querySelector('#contenedor-cards')
let tituloGenre = document.querySelector('#hero-title h2')
const modal = document.querySelector('#modal')


const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'c010562850msh841c7710e92fd1ep163100jsn30b1d49c937e',
        'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
    }
};
//Event search
btn.addEventListener('click', (e) => {
    e.preventDefault();
    // searchAnimeByName(search.value)
})
//Event genre
genero.addEventListener('click',()=>{
    searchAnimeByGenre(genero.value)
    //   tituloGenre.textContent = (genero.value).toUpperCase()
})

//Event modal cards
contenedorCards.addEventListener('click',(e)=>{
    
    if(e.target.localName =='img'||e.target.localName == 'h2'){
        console.log(e)
        modal.innerHTML = `
        <div class="contenedor-modal">
                <img src="${e.target.parentElement.dataset.img}" alt="">
                <div class="info">
                    <h2>${e.target.parentElement.dataset.title}</h2>
                    <p id="episodios"> <span>Episodios: </span> ${e.target.parentElement.dataset.episodios}</p>
                    <p id="type"> <span>Tipo: </span>${e.target.parentElement.dataset.type}</p>
                    <p id="status"><span>Estado: </span>${e.target.parentElement.dataset.status}</p>
                    <p id="descripcion">${e.target.parentElement.dataset.description}</p>
                    <button>X</button>
                </div>
            </div>
        `
        modal.classList.toggle('active')
    }
})
modal.addEventListener('click',(e) => {
    if (e.target.localName=='button'){
        modal.classList.toggle('active')
    }
})



//Search by genre
const searchAnimeByGenre = async (genre) => {
    options.method = "GET";
    let animes = await (await fetch(`https://anime-db.p.rapidapi.com/anime?page=1&size=20&genres=${genre}`, options)).json();
    contenedorCards.innerHTML = ''
    for (let i = 0; i < animes.data.length; i++){
        contenedorCards.innerHTML += `
        <div class="card" data-description="${animes.data[i].synopsis}" data-episodios="${animes.data[i].episodes}" data-type="${animes.data[i].type}" data-status="${animes.data[i].status}" data-img="${animes.data[i].image}" data-title="${animes.data[i].title}>
            <img src="${animes.data[i].image}" alt="${animes.data[i].title}">
            <h2>${animes.data[i].title}</h2>
        </div>
        `
    }
}
//search by name
const searchAnimeByName = async (name) => {
    options.method = "GET";
    let animes = await (await fetch(`https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=${name}`, options)).json();
    contenedorCards.innerHTML = ''
    for (let i = 0; i < animes.data.length; i++){
        contenedorCards.innerHTML += `
        <div class="card" data-description="${animes.data[i].synopsis}" data-episodios="${animes.data[i].episodes}" data-type="${animes.data[i].type}" data-status="${animes.data[i].status}" data-img="${animes.data[i].image}" data-title="${animes.data[i].title}">
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
        <div class="card" data-description="${animes.data[i].synopsis}" data-episodios="${animes.data[i].episodes}" data-type="${animes.data[i].type}" data-status="${animes.data[i].status}" data-img="${animes.data[i].image}" data-title="${animes.data[i].title}">
            <img src="${animes.data[i].image}" alt="haikyu">
            <h2>${animes.data[i].title}</h2>
        </div>
        `
    }
}

//invocaciones funciones

getGeneros();
getAllAnimes()

