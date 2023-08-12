const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: "application/json",
    },
    params: {
        "api_key": Key_API
    },
});
// Utils
function CargarTrailer(name, key){
    return `<iframe src="https://www.youtube.com/embed/${key}" 
            title="${name}" frameborder="0" allow="accelerometer; 
            autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
            web-share" allowfullscreen></iframe>`
}
function CreateMoviesWhitPrint(Movies,Container){
    Container.innerHTML = "";
    let view = `${Movies.map(item => `
                    <article class="card">
                            <figure class="poster">
                                <a href="#Movie=${item.title}_${item.id}">
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
                                <a href="#Series=${item.name}_${item.id}">
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
                                <a href="#Movie=${item.title}_${item.id}">
                                    <img src="${PhotosMovies}${item.poster_path}" alt="a">
                                </a>
                            </figure>
                            <div class="data">
                                <h3 class="titlePeli">${item.title}</h3>
                            </div>
                        </article>`).join("")}`;
Container.innerHTML = view;
}
function CreateMoviesNormalSimilares(Movies,Container){
    let view = `${Movies.map(item => `
                        <article class="cardTitleSimilares">
                            <figure class="poster">
                                <a href="#Movie=${item.title}_${item.id}">
                                    <img src="${PhotosMovies}${item.poster_path}" alt="a">
                                </a>
                            </figure>
                    </article>`).join("")}`;
Container.innerHTML = view;
}
function CreateSeriesNormalSimilares(Movies,Container){
    let view = `${Movies.map(item => `
                        <article class="cardTitleSimilares">
                            <figure class="poster">
                                <a href="#Series=${item.name}_${item.id}">
                                    <img src="${PhotosMovies}${item.poster_path}" alt="a">
                                </a>
                            </figure>
                    </article>`).join("")}`;
Container.innerHTML = view;
}
function CreateSeriesNormal(Movies,Container){
    Container.innerHTML = "";
    let view = `${Movies.map(item => `
                        <article class="cardDisponibles">
                            <figure class="poster">
                                <a href="#Series=${item.title}_${item.id}">
                                    <img src="${PhotosMovies}${item.poster_path}" alt="a">
                                </a>
                            </figure>
                            <div class="data">
                                <h3 class="titlePeli">${item.name}</h3>
                            </div>
                        </article>`).join("")}`;
Container.innerHTML = view;
}
function CreateMoviesNormalMasDestacadas(Movies,Container){
    Container.innerHTML = "";
    let view = `${Movies.map(item => `
                        <article class="cardDisponibles">
                            <figure class="poster">
                                <a href="#Movie=${item.title}_${item.id}">
                                    <img src="${PhotosMovies}${item.poster_path}" alt="a">
                                </a>
                            </figure>
                        </article>`).join("")}`;
Container.innerHTML = view;
}
function CargarPeliAndSerieINF(Movie){
        titlePeliINF.innerText = "";
        insertPosterPeli.src = "";
        Extras.innerHTML = "";
        subGeneros.innerHTML = "";
        bienvenida.innerHTML = "";
        lang.innerText = "";
        related.innerText = "";
        overview.innerText = "";
        title_original_name.innerText = "";
        totalStarAverage.innerText = "";
        totalCountVotosAverage.innerText = "";
    if(location.hash.startsWith("#Movie=")){
        titlePeliINF.innerText = Movie.title;
        insertPosterPeli.src = `${PhotosMovies}${Movie.poster_path}`;
        Extras.innerHTML = `<span>${Movie.release_date}</span><span>${Movie.spoken_languages[0].english_name}</span><span>${Movie.runtime} Min.</span>`;
        let renges = `${Movie.genres.map(item => `<a href="#Category=${item.id}-${item.name}">${item.name}</a>`).join("")}`;
        subGeneros.innerHTML = renges;
        bienvenida.innerHTML = `<p>Estás por Ver ${Movie.title} Película Online ✅ Contamos con más Películas Gratis en Español</p>`;
        lang.innerText = `${Movie.spoken_languages[0].name}`;
        related.innerText = `PELISRM» Estás viendo ${Movie.title} [Película Completa, Gratis], Película disponible en Audio Español, Latino o Subtitulada, también contamos con películas estrenadas del cine. película para ver online y descargar del Año 2023. ${Movie.title} en Calidad (CINE) Completa.`;
        overview.innerText = Movie.overview;
        title_original_name.innerText = Movie.original_title;
        totalStarAverage.innerText = `🌟${Movie.vote_average}`;
        totalCountVotosAverage.innerText = `Votos: ${Movie.vote_count}`;
    }else if(location.hash.startsWith("#Series=")){
        titlePeliINF.innerText = Movie.name;
        insertPosterPeli.src = `${PhotosMovies}${Movie.poster_path}`;
        Extras.innerHTML = `<span>${Movie.last_air_date}</span><span>${Movie.spoken_languages[0].english_name}</span><span>${Movie.episode_run_time} Min.</span>`;
        let renges = `${Movie.genres.map(item => `<a href="#Category=${item.id}-${item.name}">${item.name}</a>`).join("")}`;
        subGeneros.innerHTML = renges;
        bienvenida.innerHTML = `<p>Estás por Ver ${Movie.name} Serie Online ✅ Contamos con más Serie Gratis en Español</p>`;
        lang.innerText = `${Movie.spoken_languages[0].name}`;
        related.innerText = `PELISRM» Estás viendo ${Movie.name} [Serie Completa, Gratis], Serie disponible en Audio Español, Latino o Subtitulada, también contamos con Serie estrenadas del cine. Serie para ver online y descargar del Año 2023. ${Movie.name} en Calidad (CINE) Completa.`;
        overview.innerText = Movie.overview;
        title_original_name.innerText = Movie.original_name;
        totalStarAverage.innerText = `🌟${Movie.vote_average}`;
        totalCountVotosAverage.innerText = `Votos: ${Movie.vote_count}`;
    }
}
function CreateCategories(categories, Container){
    let view = `${categories.map(item => `
    <li><a href="#Category=${item.id}-${item.name}">${item.name}</a></li>
    `).join("")}`;
    Container.forEach(item => {
        item.innerHTML = view;
    });
}
// funcion para añadir los años de busqueda 
function CreateAniosSearch(index){
    let view = [];
    for(let i = 1930; i <= 2023; i++){
        view.push(`<div><a href="#SearchAnio=${i}">${i}</a></div>`);
    }
    Anios[index].innerHTML = view.join("");
}
function CreatePageNumber(Container){
    Container.innerHTML = "";
    let view = [];
    for(let i = 1; i <= 100; i++){
        view.push(`<div><span class="PageNumbers">${i}</span></div>`);
    }
    Container.innerHTML = view.join("");
}


async function getTrendingMovies(Container, Creator_Movie_SerieCard, pageNum){
    const {data} = await api(`${MoviesTrending}`, {
        params: {
            page: pageNum,
        }
    })
    const pelisTendencias = data.results;
    Creator_Movie_SerieCard(pelisTendencias, Container);
}
getTrendingMovies(PelisTendencias, CreateMoviesWhitPrint);

async function listaMovies(Container, CreatorItemsListaMovie){
    const {data} = await api(`${listaMoviesCategories}`)
    const generos = data.genres
    CreatorItemsListaMovie(generos, Container);
};
listaMovies(categoryMenu, CreateCategories);

async function getPopularMovies(Container, Creator_Movie_SerieCard, pageNum){
    const {data} = await api(`${popularMovies}`,{
        params: {
            page: pageNum
        }
    });
    const pelisDestacadas = data.results;
    Creator_Movie_SerieCard(pelisDestacadas, Container);
}
getPopularMovies(estrenosDestacadosHD, CreateMoviesWhitPrint);

async function getNowMovies(Container, Creator_Movie_SerieCard, pageNum){
    const {data} = await api(`${nowPlayingMovies}`, {
        params: {
            page: pageNum
        }
    });
    const pelisDispo = data.results;
    Creator_Movie_SerieCard(pelisDispo, Container);
}
getNowMovies(pelisDisponiblesTotals, CreateMoviesNormal);

async function getTvSeriesTendencias(Container, Creator_Movie_SerieCard, pageNum){
    const {data} = await api(`${tvSeries}`, {
        params: {
            page: pageNum
        }
    });
    const tvSeriesData = data.results;
    Creator_Movie_SerieCard(tvSeriesData, Container)
}
getTvSeriesTendencias(SeriesDestacadas, CreateSeriesWhitPrint);

async function getTvSeriesDisponibles(Container, Creator_Movie_SerieCard, pageNum){
    const {data} = await api(`${tvSeriesPopulares}`, {
        params: {
            page: pageNum
        }
    });
    const SeriesDestacadas = data.results;
    Creator_Movie_SerieCard(SeriesDestacadas, Container)
}
getTvSeriesDisponibles(seriesDispo, CreateSeriesWhitPrint);

async function getTvSeriesDisponiblesTotals(Container, Creator_Movie_SerieCard, pageNum){
    const {data} = await api(tvSeriesTotals, {
        params: {
            page: pageNum
        }
    });
    const Series_data = data.results;
    Creator_Movie_SerieCard(Series_data, Container)
}
getTvSeriesDisponiblesTotals(seriesDisponiblestotals, CreateSeriesNormal);




async function getTrendingMoviesFilter(id, Container){
    const {data} = await api(`${FilterMovieCategory}`,{
        params: {
            with_genres: id,
        }
    })
    const pelisTendencias = data.results;
    CreateMoviesNormal(pelisTendencias, Container)
}
async function getMovieBySearch(query, Container){
    const {data} = await api(`${SearchMovieQuery}`,{
        params: {
            query,
        }
    })
    const Movies = data.results;
    CreateMoviesNormal(Movies, Container)
}
async function getMovieSimilarID(id, Container, Creator_Movie_SerieCard){
    const {data} = await api(`${SearchMoviID}${id}/similar`);
    const Movies = data.results;
    Creator_Movie_SerieCard(Movies, Container)
}
async function getSerieSimilarID(id, Container, Creator_Movie_SerieCard){
    const {data} = await api(`${SearchSerieID}${id}/similar`);
    const Movies = data.results;
    Creator_Movie_SerieCard(Movies, Container)
}
async function getMoviesFilterAnio(query){
    const {data} = await api(`${FilterMovieCategory}`,{
        params: {
            year: `${query}`,
        }
    })
    const Movies = data.results;
    CreateMoviesNormal(Movies, SeccionCuadrillaPelis_Series_GenerosFilter);
}
async function getPopularMoviesDestacadas(Container){
    const {data} = await api(`${popularMovies}`);
    const pelisDestacadas = data.results;
    CreateMoviesNormalMasDestacadas(pelisDestacadas, Container)
}

// seleccionando una peli e insertando su trailer
async function getMovieByID(id){
    const { data: Movie} = await api(`${SearchMoviID}${id}`,{
        params:{
            append_to_response: "videos"
        }
    })
    console.log(Movie);
    CargarPeliAndSerieINF(Movie);

    // cargando los trailer de cada peli
    let trailer;
    if(Movie.videos.results.find((vid) => vid.name == "Official Trailer") !== undefined){
        ContainerVideoTriler.innerHTML = "";
        trailer = Movie.videos.results.find(
            (vid) => vid.name == "Official Trailer"
        );
        ContainerVideoTriler.innerHTML = CargarTrailer(trailer.name, trailer.key);
        console.log("Official Trailer", trailer);
    }else if(Movie.videos.results.length > 0){
        ContainerVideoTriler.innerHTML = "";
        trailer = Movie.videos.results[0];
        ContainerVideoTriler.innerHTML = CargarTrailer(trailer.name, trailer.key);
        console.log("en caso de que no alla un trailer original", trailer);
    }else{
        ContainerVideoTriler.innerHTML = "";
        trailer = `no hay Trailer 😥`;
        console.log(trailer);
        ContainerVideoTriler.innerHTML = `<div class="NoExisteT"><p>No Existe algun Trailer 😥</p></div>`;
    }
}
async function getSerieByID(id){
    const {data: Movie} = await api(`${SearchSerieID}${id}`,{
        params:{
            append_to_response: "videos"
        }
    })
    console.log(Movie);
    CargarPeliAndSerieINF(Movie);

    // cargando los trailer de cada peli
    let trailer;
    if(Movie.videos.results.find((vid) => vid.name == "Official Trailer") !== undefined){
        ContainerVideoTriler.innerHTML = "";
        trailer = Movie.videos.results.find(
            (vid) => vid.name == "Official Trailer"
        );
        ContainerVideoTriler.innerHTML = CargarTrailer(trailer.name, trailer.key);
        console.log("Official Trailer", trailer);
    }else if(Movie.videos.results.length > 0){
        ContainerVideoTriler.innerHTML = "";
        trailer = Movie.videos.results[0];
        ContainerVideoTriler.innerHTML = CargarTrailer(trailer.name, trailer.key);
        console.log("en caso de que no alla un trailer original", trailer);
    }else{
        ContainerVideoTriler.innerHTML = "";
        trailer = `no hay Trailer 😥`;
        console.log(trailer);
        ContainerVideoTriler.innerHTML = `<div class="NoExisteT"><p>No Existe algun Trailer 😥</p></div>`;
    }
}