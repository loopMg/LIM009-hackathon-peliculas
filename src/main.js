// DOM
//console.log(linksArray);
// const urlBatman = 'http://www.omdbapi.com/?s=batman&apikey=ec75ba49';

const urlStarWar = 'http://www.omdbapi.com/?s=star-wars&apikey=ec75ba49';

fetch(urlStarWar)
.then(response => response.json())
.then(data => {
  //  console.log(data.Search[0].Poster)
    const dataMovie = data.Search;
    //console.log(dataMovie)})
    for(let indice of dataMovie){
       console.log(indice)
    }
    // ME DAN TODOS LOS OBETOS DENTOS DE ARRAY(TITLE,POSTER,YEARS)

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
    
    //console.log(string);
    printSectionMovies.innerHTML = string;
})
.catch(err => alert(err)); 
