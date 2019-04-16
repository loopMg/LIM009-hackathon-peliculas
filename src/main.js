// DOM
const idMoviesStarWars = ['tt0076759','tt0080684','tt0086190','tt2488496','tt0120915','tt0121766','tt0121765','tt3748528','tt2527336','tt3778644']

const printSectionMovies = document.getElementById('containerMovies');

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

console.log(linksArray);
// const urlBatman = 'http://www.omdbapi.com/?s=batman&apikey=ec75ba49';

const urlStarWar = 'http://www.omdbapi.com/?s=star-wars&apikey=ec75ba49';

fetch(urlStarWar)
.then(response => response.json())
.then(data => {
    const dataMovie = data.Search;
    let string = '';
    for(let i = 0; i < dataMovie.length; i++) {
        string +=  `<div class="movie-box">
        <img src="${dataMovie[i].Poster}" alt="poster" class="poster-movie"/>
        <h1>${dataMovie[i].Title}</h1>
        <h2>(${dataMovie[i].Year})</h2>
        <h3>${dataMovie[i].Type}</h3> 
      </div>
    `; 
    }
    // console.log(string);
    printSectionMovies.innerHTML = string;
})
.catch(err => alert(err));

