//console.log(linksArray);
// const urlBatman = 'http://www.omdbapi.com/?s=batman&apikey=ec75ba49';

const urlStarWar = 'http://www.omdbapi.com/?s=star-wars&apikey=ec75ba49';
const ordenandoDeFechas= document.getElementById("ordenado");
const printSectionMovies=document.querySelector('#printSectionMovies')


fetch(urlStarWar)
.then(response => response.json())
.then(data => {
    //console.log(data)
   const dataMovie = data.Search;
   for(let i =0;i<dataMovie.length;i++ ){
    console.log(dataMovie[i].idmovie)
    .catch(err => alert(err));}
})



/*console.log(dataPropiedades)
ordenadoPorAnios=(data)=>{
    for(let i =0;i<data.length;i++ ){
        console.log(data[i])
    }
}

ordenadoPorAnios(fetchData(urlStarWar))*/
   /* let string = '';
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

.catch(err => alert(err));

ordenandoDeFechas.addEventListener('click'(),=>{

})*/