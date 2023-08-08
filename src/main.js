const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: "application/json",
    },
    params: {
        "api_key": Key_API
    },
});
async function getTrendingMovies (){
    const {data} = await api(`${MoviesTrending}`)
    const pelisTendencias = data.results;
    // console.log("pelisTendencias", pelisTendencias);
    CreateMoviesWhitPrint(pelisTendencias, PelisTendencias);
}
getTrendingMovies();
async function listaMovies(){
    const {data} = await api(`${listaMoviesCategories}`)
    const generos = data.genres
    CreateCategories(generos, categoryMenu);
};
listaMovies();
async function getPopularMovies(){
    const {data} = await api(`${popularMovies}`);
    // console.log("popular" ,data);
    const pelisDestacadas = data.results;
    CreateMoviesWhitPrint(pelisDestacadas, estrenosDestacadosHD)
}
getPopularMovies();
async function getNowMovies(){
    const {data} = await api(`${nowPlayingMovies}`);
    const pelisDispo = data.results;
    console.log("pelisDispo", pelisDispo);
    CreateMoviesNormal(pelisDispo, pelisDisponiblesTotals);
}
getNowMovies();
async function getTvSeriesTendencias(){
    const {data} = await api(`${tvSeries}`);
    const tvSeriesData = data.results;
    CreateSeriesWhitPrint(tvSeriesData,SeriesDestacadas)
}
getTvSeriesTendencias();
async function getTvSeriesDisponibles(){
    const {data} = await api(`${tvSeriesPopulares}`);
    // console.log(data);
    const SeriesDestacadas = data.results;
    // console.log("a" ,SeriesDestacadas);
    CreateSeriesWhitPrint(SeriesDestacadas, seriesDispo)
}
getTvSeriesDisponibles();
async function getTvSeriesDisponiblesTotals(){
    const {data} = await api(tvSeriesTotals);
    const Series_data = data.results;
    console.log("Series Data ", Series_data);
    CreateSeriesNormal(Series_data, seriesDisponiblestotals)
}
getTvSeriesDisponiblesTotals();

async function getTrendingMoviesFilter(id){
    const {data} = await api(`${FilterMovieCategory}`,{
        params: {
            with_genres: id,
        }
    })
    const pelisTendencias = data.results;
    console.log("pelisTendenciasfilter", pelisTendencias);
    CreateMoviesNormal(pelisTendencias,SeccionCuadrillaPelis_Series_GenerosFilter)
}

// Utils
function CreateMoviesWhitPrint(Movies,Container){
    Container.innerHTML = "";
    let view = `${Movies.map(item => `
                    <article class="card">
                            <figure class="poster">
                                <a href="#Movie=${item.title}">
                                    <img id="${item.title}" src="${PhotosMovies}${item.poster_path}" alt="a">
                                </a>
                            </figure>
                            <div class="dataEstrenos">
                                <h3 class="titlePeli">${item.title}</h3>
                            <div class="ContainerStar_Category"><span class="stars">🌟 ${item.vote_average}</span>
                                <div class="categoryContainer"><span class="category">Pelicula</span></div></div>
                            </div>
                    </article>`).join("")}`;
Container.innerHTML = view;
}
function CreateSeriesWhitPrint(Movies,Container){
    Container.innerHTML = "";
    let view = `${Movies.map(item => `
                    <article class="card">
                            <figure class="poster">
                                <a href="#Movie=${item.name}">
                                    <img src="${PhotosMovies}${item.poster_path}" alt="a">
                                </a>
                            </figure>
                            <div class="dataEstrenos">
                                <h3 class="titlePeli">${item.name}</h3>
                            <div class="ContainerStar_Category"><span class="stars">🌟 ${item.vote_average}</span>
                                <div class="categoryContainerSeriesNew"><span class="category">Serie</span></div></div>
                            </div>
                    </article>`).join("")}`;
Container.innerHTML = view;
}
function CreateMoviesNormal(Movies,Container){
    Container.innerHTML = "";
    let view = `${Movies.map(item => `
                        <article class="cardDisponibles">
                            <figure class="poster">
                                <a href="#Movie=${item.title}">
                                    <img src="${PhotosMovies}${item.poster_path}" alt="a">
                                </a>
                            </figure>
                            <div class="data">
                                <h3 class="titlePeli">${item.title}</h3>
                            </div>
                        </article>`).join("")}`;
Container.innerHTML = view;
}
function CreateSeriesNormal(Movies,Container){
    Container.innerHTML = "";
    let view = `${Movies.map(item => `
                        <article class="cardDisponibles">
                            <figure class="poster">
                                <a href="#Movie=${item.title}">
                                    <img src="${PhotosMovies}${item.poster_path}" alt="a">
                                </a>
                            </figure>
                            <div class="data">
                                <h3 class="titlePeli">${item.name}</h3>
                            </div>
                        </article>`).join("")}`;
Container.innerHTML = view;
}

function CreateCategories(categories, Container){
    let view = `${categories.map(item => `
    <li><a href="#Category=${item.id}-${item.name}">${item.name}</a></li>
    `).join("")}`;
    Container.forEach(item => {
        item.innerHTML = view;
    });
}
// llamados a la API

