// DOM
// Paginas
const startPage = document.getElementById('containerInicio');
const moviesPage = document.getElementById('containerMovies');
const navOpt = document.getElementById('menu-opt');

startPage.style.display = 'block';
moviesPage.style.display = 'none';
navOpt.style.display = 'none';

// botones
const btnStart = document.getElementById('inicio');
const btnMovies = document.getElementById('movies');

// Cambio de pantallas 
btnStart.addEventListener('click', () => {
    startPage.style.display = 'block';
    moviesPage.style.display = 'none';
    navOpt.style.display = 'none';
});

btnMovies.addEventListener('click', () =>{
    startPage.style.display = 'none';
    moviesPage.style.display = 'block';
    navOpt.style.display = 'block';
});

const idMoviesStarWars = ['tt0076759','tt0080684','tt0086190','tt2488496','tt0120915','tt0121766','tt0121765','tt3748528','tt2527336','tt3778644']

// const printSectionMovies = document.getElementById('containerMovies');
const optFilter = document.getElementById('filterYear');

const apiCall = (arrMovies) => {
    let linksArray = [];
    let string = '';
    for(let i = 0; i<arrMovies.length; i++) {
        string = `http://www.omdbapi.com/?i=${arrMovies[i]}&apikey=ec75ba49`
        linksArray.push(string);
    }
    return linksArray;
};  

const linksArray = apiCall(idMoviesStarWars);

// console.log(linksArray);

const urlStarWars = 'http://www.omdbapi.com/?s=star-wars&apikey=ec75ba49';
// Imprime toda la data primera historia de usurio 
fetch(urlStarWars)
.then(response => response.json())
.then(data => {
    const dataMovie = data.Search;
    let string = '';
    for(let i = 0; i < dataMovie.length; i++) {
        string +=  `<div class="movie-box" >
        <img src="${dataMovie[i].Poster}" alt="poster" id="${dataMovie[i].imdbID}" class="poster-movie"/>
        <h1>${dataMovie[i].Title}</h1>
        <h2>(${dataMovie[i].Year})</h2> 
      </div>
    `; 
    }
    console.log(string);
    moviesPage.innerHTML = string;
})
.catch(err => alert(err));

// Imprimir lo filtrado
fetch(urlStarWars)
.then(response => response.json())
.then(data => {
    const dataMovie = data.Search;
    let newArrfilter = '';
    optFilter.addEventListener('change', (event) => {
        if( event.target.value < 2000) {
            newArrfilter = window.filterMovie1999(dataMovie, event.target.value);
            let string = '';
            for(let i = 0; i < newArrfilter.length; i++) {
            string +=  `<div class="movie-box" >
            <img src="${newArrfilter[i].Poster}" alt="poster" class="poster-movie"/>
            <h1>${newArrfilter[i].Title}</h1>
            <h2>(${newArrfilter[i].Year})</h2>
        </div>
        `;
    } 
    console.log(string)
    moviesPage.innerHTML = string;
    }else {
        newArrfilter = window.filterMovie2000(dataMovie, event.target.value);
        let string = '';
        for(let i = 0; i < newArrfilter.length; i++) {
            string +=  `<div class="movie-box">
            <img src="${newArrfilter[i].Poster}" alt="poster" class="poster-movie"/>
            <h1>${newArrfilter[i].Title}</h1>
            <h2>(${newArrfilter[i].Year})</h2> 
        </div>    
        `;
    }
    console.log(string)
    moviesPage.innerHTML = string;
}
    }); 
    
})
.catch(err => alert(err));


const movieEpisodeIV = document.getElementById('tt0076759');
const movieEpisodeV = document.getElementById('tt0080684');
const movieEpisodeVI = document.getElementById('tt0086190');
const movieEpisodeVII = document.getElementById('tt2488496');
const movieEpisodeI = document.getElementById('tt0120915');
const movieEpisodeIII = document.getElementById('tt0121766');
const movieEpisodeII = document.getElementById('tt0121765');
const movieRogueOne = document.getElementById('tt3748528');
const movieEpisodeVIII = document.getElementById('tt2527336');
const movieSolo = document.getElementById('tt3778644');

movieEpisodeIV.addEventListener('click', () => {
    startPage.style.display = 'none';
    moviesPage.style.display = 'none';
    moviePageInf.style.display = 'block';
    navOpt.style.display = 'none';
})


