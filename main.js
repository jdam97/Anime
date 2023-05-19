//boton search
const btn = document.querySelector('#btn')
let genero = document.querySelector('#genero');

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'c010562850msh841c7710e92fd1ep163100jsn30b1d49c937e',
        'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
    }
};

btn.addEventListener('click', (e) => {
    e.preventDefault();
  

})

//Get generos
const getGeneros = async () => {
    options.method = "GET";
    let generos = await (await fetch(`https://anime-db.p.rapidapi.com/genre`,options)).json();
    console.log(generos._id)
    for (let i = 0; i < generos.length; i++) {
        genero.innerHTML += `<option value=${generos[i]._id}">${generos[i]._id}</option>`
    }
    


}

// getGeneros();

