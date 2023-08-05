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
    const view = `${pelisTendencias.map(item => `
                <article class="card">
                        <figure class="poster">
                            <a href="#${item.title}">
                                <img id="${item.title}" src="${PhotosMovies}${item.poster_path}" alt="a">
                            </a>
                        </figure>
                        <div class="dataEstrenos">
                            <h3 class="titlePeli">${item.title}</h3>
                        <div class="ContainerStar_Category"><span class="stars">🌟 ${item.vote_average}</span>
                            <div class="categoryContainer"><span class="category">Pelicula</span></div></div>
                        </div>
                </article>`).join("")}`;
    PelisTendencias.innerHTML = view;
}
getTrendingMovies();
async function listaMovies(){
    const {data} = await api(`${listaMoviesCategories}`)
    // console.log("data Categories", data);
    const generos = data.genres
    console.log(generos);
    let totals = `${generos.map(item => `
    <li><a href="#${item.name}">${item.name}</a></li>
`).join("")}`;
    categoryMenu.innerHTML = totals;
};
listaMovies();
async function getPopularMovies(){
    const {data} = await api(`${popularMovies}`);
    // console.log("popular" ,data);
    const pelisDestacadas = data.results;
    // console.log("pelisDestacadas", pelisDestacadas);
    let view = `${pelisDestacadas.map(item => `
                <article class="card">
                        <figure class="poster">
                            <a href="#${item.title}">
                                <img src="${PhotosMovies}${item.poster_path}" alt="a">
                            </a>
                        </figure>
                        <div class="dataEstrenos">
                            <h3 class="titlePeli">${item.title}</h3>
                        <div class="ContainerStar_Category"><span class="stars">🌟 ${item.vote_average}</span>
                            <div class="categoryContainer"><span class="category">Pelicula</span></div></div>
                        </div>
                </article>
    `).join("")}`;
    estrenosDestacadosHD.innerHTML = view;
}
getPopularMovies();
async function getNowMovies(){
    const {data} = await api(`${nowPlayingMovies}`);
    const pelisDispo = data.results;
    // console.log(pelisDispo);
    let view = `${pelisDispo.map(item => `
                <article class="cardDisponibles">
                    <figure class="poster">
                        <a href="#${item.title}">
                            <img src="${PhotosMovies}${item.backdrop_path}" alt="a">
                        </a>
                    </figure>
                    <div class="data">
                        <h3 class="titlePeli">${item.title}</h3>
                    </div>
                </article>
    `).join("")}`;

    pelisDisponiblesTotals.innerHTML = view;
}
getNowMovies();
async function getTvSeriesTendencias(){
    const {data} = await api(`${tvSeries}`);
    const tvSeriesData = data.results;
    console.log("tvSeries", tvSeriesData);
    let view = `${tvSeriesData.map(item => `
                <article class="card">
                        <figure class="poster">
                            <a href="#${item.name}">
                                <img src="${PhotosMovies}${item.poster_path}" alt="a">
                            </a>
                        </figure>
                        <div class="dataEstrenos">
                            <h3 class="titlePeli">${item.name}</h3>
                        <div class="ContainerStar_Category"><span class="stars">🌟 ${item.vote_average}</span>
                            <div class="categoryContainerSeriesNew"><span class="category">Serie</span></div></div>
                        </div>
                </article>
    `).join("")}`;
    SeriesDestacadas.innerHTML = view;
}
getTvSeriesTendencias();
async function getTvSeriesDisponibles(){
    const {data} = await api(`${tvSeriesPopulares}`);
    // console.log(data);
    const SeriesDestacadas = data.results;
    // console.log("a" ,SeriesDestacadas);
    let view = `${SeriesDestacadas.map(item => `
                <article class="card cardSeries">
                    <figure class="poster">
                        <a href="#${item.name}">
                            <img src="${PhotosMovies}${item.poster_path}" alt="a">
                        </a>
                    </figure>
                    <div class="dataSeriesDispo">
                        <h3 class="titleSerie">${item.name}</h3>
                        <div class="ContainerStar_Category"><span class="stars">🌟 ${item.vote_average}</span>
                            <div class="categoryContainerSeriesNew"><span class="category">Serie</span></div></div>
                        </div>
                    </div>
                </article>
    `).join("")}`;
    seriesDispo.innerHTML = view;
}
getTvSeriesDisponibles();
async function getTvSeriesDisponiblesTotals(){
    const {data} = await api(tvSeriesTotals);
    const Series_data = data.results;
    console.log(data);
    const view = `${Series_data.map(item => `
                        <article class="cardDisponibles">
                            <figure class="poster">
                                <a href="#${item.name}">
                                    <img src="${PhotosMovies}${item.poster_path}" alt="a">
                                </a>
                            </figure>
                            <div class="data">
                                <h3 class="titlePeli">${item.name}</h3>
                            </div>
                        </article>
    `).join("")}`;
    seriesDisponiblestotals.innerHTML = view;
}
getTvSeriesDisponiblesTotals()