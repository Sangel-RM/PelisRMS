const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: "application/json",
    },
    params: {
        "api_key": Key_API
    },
});
const lazyLoader = new IntersectionObserver((entries) => {
    entries.forEach((img) => {
        if(img.isIntersecting){
            const url = img.target.getAttribute("data-src");
            img.target.setAttribute("src", url);
        }
    });
});

// Permitir o no permitir Al filtro de Contenido adulto
function IsAdult ({Container}){
    let view = `<option value="ON">ON</option><option value="OFF">OFF</option>`;
    Container.innerHTML = view;
}
IsAdult({Container: ON_OFF_isAdult})
// Utils
function CargarTrailer
({name, key}){
    return `<iframe src="https://www.youtube.com/embed/${key}" 
            title="${name}" frameborder="0" allow="accelerometer; 
            autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
            web-share" allowfullscreen></iframe>`
}
function CreateMoviesWhitPrint
({Movies,Container, lazyLoad = false}){
    Container.innerHTML = "";
    let view = `${Movies.map(item => 
                    `<article class="card">
                            <figure class="poster">
                                <a href="#Movie/${item.title}_${item.id}">
                                    <img class="MoviesPrint" data-src="${PhotosMovies}${item.poster_path}" alt="${item.title}">
                                </a>
                            </figure>
                            <div class="dataEstrenos">
                                <h3 class="titlePeli">${item.title}</h3>
                                <div class="ContainerStar_Category">
                                    <span class="stars">🌟 ${item.vote_average}</span>
                                        <div class="categoryContainer">
                                            <span class="category">Pelicula</span>
                                        </div>
                                </div>
                            </div>
                    </article>`).join("")}`;
Container.innerHTML = view;
if(lazyLoad){
    const images = $SelectorAll(".MoviesPrint");
    images.forEach(item => {
        item.addEventListener("error", () => {
            item.setAttribute("src","https://plantillasdememes.com/img/plantillas/imagen-no-disponible01601774755.jpg");
        });
        lazyLoader.observe(item)
    });
}
}
function CreateSeriesWhitPrint
({Movies,Container, lazyLoad = false}){
    Container.innerHTML = "";
    let view = `${Movies.map(item => `
                    <article class="card">
                            <figure class="poster">
                                <a href="#Series/${item.name}_${item.id}">
                                    <img class="SeriesPrint" data-src="${PhotosMovies}${item.poster_path}" alt="${item.name}">
                                </a>
                            </figure>
                            <div class="dataEstrenos">
                                <h3 class="titlePeli">${item.name}</h3>
                            <div class="ContainerStar_Category"><span class="stars">🌟 ${item.vote_average}</span>
                                <div class="categoryContainerSeriesNew"><span class="category">Serie</span></div></div>
                            </div>
                    </article>`).join("")}`;
Container.innerHTML = view;
if(lazyLoad){
    const images = $SelectorAll(".SeriesPrint");
    images.forEach(item => {
        item.addEventListener("error", () => {
            item.setAttribute("src","https://plantillasdememes.com/img/plantillas/imagen-no-disponible01601774755.jpg");
        });
        lazyLoader.observe(item)
    });
}
}
function CreateMoviesNormal
({Movies,Container, lazyLoad = false}){
    Container.innerHTML = "";
if(lazyLoad){
    let view = `${Movies.map(item => `
        <article class="cardDisponibles">
            <figure class="poster">
                <a href="#Movie/${item.title}_${item.id}">
                    <img class="MovieCardNormal" data-src="${PhotosMovies}${item.poster_path}" alt="${item.title}">
                </a>
            </figure>
            <div class="data">
                <h3 class="titlePeli">${item.title}</h3>
            </div>
        </article>`).join("")}`;
    Container.innerHTML = view;
    const images = $SelectorAll(".MovieCardNormal");
    images.forEach(item => {
        item.addEventListener("error", () => {
            item.setAttribute("src","https://plantillasdememes.com/img/plantillas/imagen-no-disponible01601774755.jpg");
        });
        lazyLoader.observe(item);
    });
}else{
    let view = `${Movies.map(item => `
        <article class="cardDisponibles">
            <figure class="poster">
                <a href="#Movie/${item.title}_${item.id}">
                    <img class="MovieCardNormal" src="${PhotosMovies}${item.poster_path}" alt="${item.title}">
                </a>
            </figure>
            <div class="data">
                <h3 class="titlePeli">${item.title}</h3>
            </div>
        </article>`).join("")}`;
    Container.innerHTML = view;
    const images = $SelectorAll(".MovieCardNormal");
    images.forEach(item => {
        item.addEventListener("error", () => {
            item.setAttribute("src","https://plantillasdememes.com/img/plantillas/imagen-no-disponible01601774755.jpg");
        });
    });
}
}
function CreateMoviesNormalSimilares
({Movies,Container, lazyLoad = false}){
    Container.innerHTML = "";
    let view = `${Movies.map(item => `
                        <article class="cardTitleSimilares">
                            <figure class="poster">
                                <a href="#Movie/${item.title}_${item.id}">
                                    <img class="MoviesCardNormalSimilar" data-src="${PhotosMovies}${item.poster_path}" alt="${item.title}">
                                </a>
                            </figure>
                    </article>`).join("")}`;
Container.innerHTML = view;
if(lazyLoad){
    const images = $SelectorAll(".MoviesCardNormalSimilar");
    images.forEach(item => {
        item.addEventListener("error", () => {
            item.setAttribute("src","https://plantillasdememes.com/img/plantillas/imagen-no-disponible01601774755.jpg");
        });
        lazyLoader.observe(item)
    });
}
}
function CreateSeriesNormalSimilares
({Movies,Container, lazyLoad = false}){
    Container.innerHTML = "";
    let view = `${Movies.map(item => `
                        <article class="cardTitleSimilares">
                            <figure class="poster">
                                <a href="#Series/${item.name}_${item.id}">
                                    <img class="SeriesCardNormalSimilar" data-src="${PhotosMovies}${item.poster_path}" alt="${item.name}">
                                </a>
                            </figure>
                    </article>`).join("")}`;
Container.innerHTML = view;
if(lazyLoad){
    const images = $SelectorAll(".SeriesCardNormalSimilar");
    images.forEach(item => {
        item.addEventListener("error", () => {
            item.setAttribute("src","https://plantillasdememes.com/img/plantillas/imagen-no-disponible01601774755.jpg");
        });
        lazyLoader.observe(item)
    });
}
}
function CreateSeriesNormal
({Movies,Container, lazyLoad = false}){
    Container.innerHTML = "";
if(lazyLoad){
    let view = `${Movies.map(item => `
                        <article class="cardDisponibles">
                            <figure class="poster">
                                <a href="#Series/${item.name}_${item.id}">
                                    <img class="SeriesCardNormal" data-src="${PhotosMovies}${item.poster_path}" alt="${item.name}">
                                </a>
                            </figure>
                            <div class="data">
                                <h3 class="titlePeli">${item.name}</h3>
                            </div>
                        </article>`).join("")}`;
    Container.innerHTML = view;
    const images = $SelectorAll(".SeriesCardNormal");
    images.forEach(item => {
        item.addEventListener("error", () => {
            item.setAttribute("src","https://plantillasdememes.com/img/plantillas/imagen-no-disponible01601774755.jpg");
        });
        lazyLoader.observe(item)
    });
}else{
    let view = `${Movies.map(item => `
                        <article class="cardDisponibles">
                            <figure class="poster">
                                <a href="#Series/${item.name}_${item.id}">
                                    <img class="SeriesCardNormal" src="${PhotosMovies}${item.poster_path}" alt="${item.name}">
                                </a>
                            </figure>
                            <div class="data">
                                <h3 class="titlePeli">${item.name}</h3>
                            </div>
                        </article>`).join("")}`;
Container.innerHTML = view;
const images = $SelectorAll(".SeriesCardNormal");
images.forEach(item => {
    item.addEventListener("error", () => {
        item.setAttribute("src","https://plantillasdememes.com/img/plantillas/imagen-no-disponible01601774755.jpg");
    })}
)
}
}
function CreateMoviesNormalMasDestacadas
({Movies,Container, lazyLoad = false}){
    Container.innerHTML = "";
    let view = `${Movies.map(item => `
                        <article class="cardDisponibles">
                            <figure class="poster">
                                <a href="#Movie/${item.title}_${item.id}">
                                    <img class="MoviesNormalDestacadas" data-src="${PhotosMovies}${item.poster_path}" alt="${item.title}">
                                </a>
                            </figure>
                        </article>`).join("")}`;
Container.innerHTML = view;
if(lazyLoad){
    const images = $SelectorAll(".MoviesNormalDestacadas");
    images.forEach(item => {
        item.addEventListener("error", () => {
            item.setAttribute("src","https://plantillasdememes.com/img/plantillas/imagen-no-disponible01601774755.jpg");
        });
        lazyLoader.observe(item)
    });
}
}
function CreateSeriesNormalMasDestacadas
({Movies,Container, lazyLoad = false}){
    Container.innerHTML = "";
    let view = `${Movies.map(item => `
                        <article class="cardDisponibles">
                            <figure class="poster">
                                <a href="#Series/${item.name}_${item.id}">
                                    <img class="SeriesNormalDestacadas" data-src="${PhotosMovies}${item.poster_path}" alt="${item.name}">
                                </a>
                            </figure>
                        </article>`).join("")}`;
Container.innerHTML = view;
if(lazyLoad){
    const images = $SelectorAll(".SeriesNormalDestacadas");
    images.forEach(item => {
        item.addEventListener("error", () => {
            item.setAttribute("src","https://plantillasdememes.com/img/plantillas/imagen-no-disponible01601774755.jpg");
        });
        lazyLoader.observe(item)
    });
}
}
function CargarPeliAndSerieINF
({Movie}){
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
    if(location.hash.startsWith("#Movie/")){
        titlePeliINF.innerText = Movie.title;
        insertPosterPeli.src = `${PhotosMovies}${Movie.poster_path}`;
        insertPosterPeli.setAttribute("alt",`${Movie.title}`);
        insertPosterPeli.addEventListener("error", () => {
            insertPosterPeli.setAttribute("src", "https://plantillasdememes.com/img/plantillas/imagen-no-disponible01601774755.jpg");
        });
        Extras.innerHTML = `<span>${Movie.release_date}</span><span>${Movie.spoken_languages[0].english_name}</span><span>${Movie.runtime} Min.</span>`;
        let renges = `${Movie.genres.map(item => `<div>${item.name}</div>`).join("")}`;
        subGeneros.innerHTML = renges;
        bienvenida.innerHTML = `<p>Estás por Ver ${Movie.title} Película Online ✅ Contamos con más Películas Gratis en Español</p>`;
        lang.innerText = `${Movie.spoken_languages[0].name}`;
        related.innerText = `PELISRM» Estás viendo ${Movie.title} [Película Completa, Gratis], Película disponible en Audio Español, Latino o Subtitulada, también contamos con películas estrenadas del cine. película para ver online y descargar del Año 2023. ${Movie.title} en Calidad (CINE) Completa.`;
        overview.innerText = Movie.overview;
        title_original_name.innerText = Movie.original_title;
        totalStarAverage.innerText = `🌟${Movie.vote_average}`;
        totalCountVotosAverage.innerText = `Votos: ${Movie.vote_count}`;
    }else if(location.hash.startsWith("#Series/")){
        titlePeliINF.innerText = Movie.name;
        insertPosterPeli.src = `${PhotosMovies}${Movie.poster_path}`;
        insertPosterPeli.setAttribute("alt",`${Movie.name}`);
        insertPosterPeli.addEventListener("error", () => {
            insertPosterPeli.setAttribute("src", "https://plantillasdememes.com/img/plantillas/imagen-no-disponible01601774755.jpg")
        });
        Extras.innerHTML = `<span>${Movie.last_air_date}</span><span>${Movie.spoken_languages[0].english_name}</span><span>${Movie.episode_run_time} Min.</span>`;
        let renges = `${Movie.genres.map(item => `<div>${item.name}</div>`).join("")}`;
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
function CreateCategoriesMovies
({categories, Container}){
    let view = `${categories.map(item => `
    <li><a href="#CategoryMovie/${item.id}-${item.name}" class="CategoryMovie">${item.name}</a></li>
    `).join("")}`;
    Container.forEach(item => {
        item.innerHTML = view;
    });
}
function CreateCategoriesSeries
({categories, Container}){
    let view = `${categories.map(item => `
    <li><a href="#CategorySerie/${item.id}-${item.name}" class="CategorySerie">${item.name}</a></li>
    `).join("")}`;
    Container.forEach(item => {
        item.innerHTML = view;
    });
}
function CreateCategoriesOptions
({categories, Container}){
    let view = `${categories.map(item => `
    <option value="${item.name}">${item.name}</option>
    `).join("")}`;
    Container.innerHTML = view;
}
// funcion para añadir los años de busqueda 
function CreateAniosSearch
({Anios}){
    Anios.forEach(item => item.innerHTML = "")
    const anioActualy = new Date().getFullYear();
    let view = [];
    for(let i = anioActualy; i >= 1960; i--){
        view.push(`<li><a href="#SearchAnio/${i}">${i}</a></li>`);
    }
    Anios.forEach(item => item.innerHTML = view.join(""));
}
CreateAniosSearch({Anios: Anios});
function CreatePageNumber
({Container}){
    Container.innerHTML = "";
    let view = [];
    for(let i = 1; i <= 100; i++){
        view.push(`<div><span class="PageNumbers">${i}</span></div>`);
    }
    Container.innerHTML = view.join("");
}

async function getTrendingMovies
({Container, Creator_Movie_SerieCard, lazyLoad}){
    const {data} = await api(`${MoviesTrending}`, {
        params: {
            language: navigator.language || "es-ES",
        }
    })
    const pelisTendencias = data.results;
    Creator_Movie_SerieCard({Movies: pelisTendencias, Container: Container, lazyLoad: lazyLoad});
}
getTrendingMovies({Container: PelisTendencias, Creator_Movie_SerieCard: CreateMoviesWhitPrint, lazyLoad: true});


async function listaMovies
({Container, CreatorItemsLista}){
    const {data} = await api(`${listaMoviesCategories}`, {
        params: {
            language: navigator.language || "es-ES",
        }
    });
    const generos = data.genres
    console.log(data);
    CreatorItemsLista({categories: generos, Container: Container});
};
listaMovies({Container: categoryMenuMovie,  CreatorItemsLista: CreateCategoriesMovies});
listaMovies({Container: dataRengesFilter,  CreatorItemsLista: CreateCategoriesOptions});

async function listaSeries
({Container, CreatorItemsLista}){
    const {data} = await api(`${listaSeriesCategories}`, {
        params: {
            language: navigator.language || "es-ES",
        }
    });
    console.log(data);
    const generos = data.genres
    CreatorItemsLista({categories: generos, Container: Container});
};
listaSeries({Container: categoryMenuSerie, CreatorItemsLista: CreateCategoriesSeries});

async function getPopularMovies
({Container, Creator_Movie_SerieCard, lazyLoad}){
    const {data} = await api(`${popularMovies}`,{
        params: {
            language: navigator.language || "es-ES",
        }
    });
    const pelisDestacadas = data.results;
    Creator_Movie_SerieCard({Movies: pelisDestacadas, Container: Container, lazyLoad: lazyLoad});
}
getPopularMovies({Container: estrenosDestacadosHD, Creator_Movie_SerieCard: CreateMoviesWhitPrint, lazyLoad: true});

async function getNowMovies
({Container, Creator_Movie_SerieCard, lazyLoad}){
    const {data} = await api(`${nowPlayingMovies}`, {
        params: {
            language: navigator.language || "es-ES",
        }
    });
    const pelisDispo = data.results;
    Creator_Movie_SerieCard({Movies: pelisDispo, Container: Container, lazyLoad: lazyLoad});
}
getNowMovies({Container: pelisDisponiblesTotals, Creator_Movie_SerieCard: CreateMoviesNormal, lazyLoad: true});

async function getTvSeriesTendencias
({Container, Creator_Movie_SerieCard, lazyLoad}){
    const {data} = await api(`${tvSeries}`, {
        params: {
            language: navigator.language || "es-ES",
        }
    });
    const tvSeriesData = data.results;
    Creator_Movie_SerieCard({Movies: tvSeriesData, Container: Container, lazyLoad: lazyLoad})
}
getTvSeriesTendencias({Container: SeriesDestacadas, Creator_Movie_SerieCard: CreateSeriesWhitPrint, lazyLoad: true});

async function getTvSeriesDisponibles
({Container, Creator_Movie_SerieCard, lazyLoad}){
    const {data} = await api(`${tvSeriesPopulares}`, {
        params: {
            language: navigator.language || "es-ES",
        }
    });
    const SeriesDestacadas = data.results;
    Creator_Movie_SerieCard({Movies: SeriesDestacadas, Container: Container, lazyLoad: lazyLoad})
}
getTvSeriesDisponibles({Container: seriesDispo, Creator_Movie_SerieCard: CreateSeriesWhitPrint, lazyLoad: true});

async function getTvSeriesDisponiblesTotals
({Container, Creator_Movie_SerieCard, lazyLoad}){
    const {data} = await api(tvSeriesTotals, {
        params: {
            language: navigator.language || "es-ES",
        }
    });
    const Series_data = data.results;
    Creator_Movie_SerieCard({Movies: Series_data, Container: Container, lazyLoad: lazyLoad});
}
getTvSeriesDisponiblesTotals({Container: seriesDisponiblestotals, Creator_Movie_SerieCard: CreateSeriesNormal, lazyLoad: true});

async function getMovieSimilarID
({id, Container, Creator_Movie_SerieCard, lazyLoad}){
    const {data} = await api(`${SearchMoviID}${id}/similar`, {
        params: {
            language: navigator.language || "es-ES",
        }
    });
    const Movies = data.results;
    Creator_Movie_SerieCard({Movies: Movies, Container: Container, lazyLoad: lazyLoad})
}
async function getSerieSimilarID
({id, Container, Creator_Movie_SerieCard, lazyLoad}){
    const {data} = await api(`${SearchSerieID}${id}/similar`, {
        params: {
            language: navigator.language || "es-ES",
        }
    });
    const Movies = data.results;
    Creator_Movie_SerieCard({Movies: Movies, Container: Container, lazyLoad: lazyLoad})
}
async function getMoviesFilterAnio
({query, Container, pageNum, lazyLoad}){
    const {data} = await api(`${FilterMovieCategory}`,{
        params: {
            year: `${query}`,
            page: pageNum,
            language: navigator.language || "es-ES",
        }
    })
    const Movies = data.results;
    PageIs.innerText = `page: ${pageNum}`;
    CreateMoviesNormal({Movies: Movies, Container: Container, lazyLoad: lazyLoad});
}
async function getSeriesFilterAnio
({query, Container, pageNum, lazyLoad}){
    const {data} = await api(`${FilterSeriesCategory}`,{
        params: {
            first_air_date_year: `${query}`,
            page: pageNum,
            language: navigator.language || "es-ES",
        }
    })
    const Movies = data.results;
    PageIs.innerText = `page: ${pageNum}`;
    CreateSeriesNormal({Movies: Movies, Container: Container, lazyLoad: lazyLoad});
}
async function getPopularMoviesDestacadas
({Container, lazyLoad}){
    const {data} = await api(`${popularMovies}`, {
        params: {
            language: navigator.language || "es-ES",
        }
    });
    const pelisDestacadas = data.results;
    CreateMoviesNormalMasDestacadas({Movies: pelisDestacadas, Container: Container, lazyLoad: lazyLoad})
}
async function getPopularSeriesDestacadas
({Container, lazyLoad}){
    const {data} = await api(`${popularSeries}`, {
        params: {
            language: navigator.language || "es-ES",
        }
    });
    const SeriesDestacadas = data.results;
    CreateSeriesNormalMasDestacadas({Movies: SeriesDestacadas, Container: Container, lazyLoad: lazyLoad})
}
// Search Movies And Series Input
async function getMovieBySearch
({query, Container, lazyLoad, pageNum}){
    const {data} = await api(`${SearchMovieQuery}`,{
        params: {
            query,
            page: pageNum,
            language: navigator.language || "es-ES",
        }
    })
    const Movies = data.results;
    CreateMoviesNormal({Movies: Movies, Container: Container, lazyLoad: lazyLoad})
    if(data.total_pages > pageNum){
        const butonMas = `<button class="CargarMas"><i class="fa-sharp fa-solid fa-arrow-right"></i></button>`;
        const butonMenos = `<button class="CargarMenos"><i class="fa-sharp fa-solid fa-arrow-left"></i></button>`;
        const botones = [butonMenos, butonMas]
        ContainerCargarMasPelis.innerHTML = botones.join("");
        const buttonCargarMasPelis = $Selector(".CargarMas");
        const buttonCargarMenosPelis = $Selector(".CargarMenos")
        if(pageNum < data.total_pages){
            buttonCargarMasPelis.addEventListener("click", () => {
                window.scroll(0,0);
                getMovieBySearch({pageNum: (pageNum + 1), Container: Container, lazyLoad: lazyLoad, query: query});
            });
        }
        if(pageNum >= 1){
            buttonCargarMenosPelis.addEventListener("click", () =>{
                window.scroll(0,0);
                getMovieBySearch({pageNum: (pageNum - 1), Container: Container, lazyLoad: lazyLoad, query: query});
            })
        }
    }
}
async function getSeriesBySearch
({query, Container, lazyLoad ,pageNum}){
    const {data} = await api(`${SearchTVQuery}`,{
        params: {
            query,
            page: pageNum,
            language: navigator.language || "es-ES",
        }
    })
    const Movies = data.results;
    CreateSeriesNormal({Movies: Movies, Container: Container, lazyLoad: lazyLoad});
    if(data.total_pages > pageNum){
        const butonMas = `<button class="CargarMasSeries"><i class="fa-sharp fa-solid fa-arrow-right"></i></button>`;
        const butonMenos = `<button class="CargarMenosSeries"><i class="fa-sharp fa-solid fa-arrow-left"></i></button>`;
        const botones = [butonMenos, butonMas]
        ContainerCargarMasSeries.innerHTML = botones.join("");
        const buttonCargarMasSeries = $Selector(".CargarMasSeries");
        const buttonCargarMenosSeries = $Selector(".CargarMenosSeries")
        if(pageNum < data.total_pages){
            buttonCargarMasSeries.addEventListener("click", () => {
                window.scroll(0,1400);
                getSeriesBySearch({pageNum: (pageNum + 1), Container: Container, lazyLoad: lazyLoad, query: query});
            });
        }
        if(pageNum >= 1){
            buttonCargarMenosSeries.addEventListener("click", () =>{
                window.scroll(0,1400);
                getSeriesBySearch({pageNum: (pageNum - 1), Container: Container, lazyLoad: lazyLoad, query: query});
            })
        }
    }
}

// seleccionando una peli e insertando su trailer
async function getMovieByID
({id}){
    const { data: Movie} = await api(`${SearchMoviID}${id}`,{
        params:{
            append_to_response: "videos",
            language: navigator.language || "es-ES",
        }
    })
    console.log(Movie);
    CargarPeliAndSerieINF({Movie: Movie});

    // cargando los trailer de cada peli
    let trailer;
    if(Movie.videos.results.find((vid) => vid.name == "Official Trailer") !== undefined){
        ContainerVideoTriler.innerHTML = "";
        trailer = Movie.videos.results.find(
            (vid) => vid.name == "Official Trailer"
        );
        ContainerVideoTriler.innerHTML = CargarTrailer({name: trailer.name, key: trailer.key});
        console.log("Official Trailer", trailer);
    }else if(Movie.videos.results.length > 0){
        ContainerVideoTriler.innerHTML = "";
        trailer = Movie.videos.results[0];
        ContainerVideoTriler.innerHTML = CargarTrailer({name: trailer.name, key: trailer.key});
        console.log("en caso de que no alla un trailer original", trailer);
    }else{
        ContainerVideoTriler.innerHTML = "";
        trailer = `no hay Trailer 😥`;
        console.log(trailer);
        ContainerVideoTriler.innerHTML = `<div class="NoExisteT"><p>No Existe algun Trailer 😥</p></div>`;
    }
}
async function getSerieByID
({id}){
    const {data: Movie} = await api(`${SearchSerieID}${id}`,{
        params:{
            append_to_response: "videos",
            language: navigator.language || "es-ES",
        }
    })
    console.log(Movie);
    CargarPeliAndSerieINF({Movie: Movie});

    // cargando los trailer de cada peli
    let trailer;
    if(Movie.videos.results.find((vid) => vid.name == "Official Trailer") !== undefined){
        ContainerVideoTriler.innerHTML = "";
        trailer = Movie.videos.results.find(
            (vid) => vid.name == "Official Trailer"
        );
        ContainerVideoTriler.innerHTML = CargarTrailer({name: trailer.name, key: trailer.key});
        console.log("Official Trailer", trailer);
    }else if(Movie.videos.results.length > 0){
        ContainerVideoTriler.innerHTML = "";
        trailer = Movie.videos.results[0];
        ContainerVideoTriler.innerHTML = CargarTrailer({name: trailer.name, key: trailer.key});
        console.log("en caso de que no alla un trailer original", trailer);
    }else{
        ContainerVideoTriler.innerHTML = "";
        trailer = `no hay Trailer 😥`;
        console.log(trailer);
        ContainerVideoTriler.innerHTML = `<div class="NoExisteT"><p>No Existe algun Trailer 😥</p></div>`;
    }
}
// paginacion 

async function getPaginacion({ruta, 
                            pageNum, 
                            Container,ContainerNumbersPage, 
                            Creator_Movie_SerieCard, 
                            lazyLoad, 
                        }){
        ContainerNumbersPage.innerHTML = "";
        const {data} = await api(`${ruta}`,{
            params: {
                page: pageNum,
                language: navigator.language || "es-ES",
            },
        });
        const Movies = data.results;
        let totalPages = data.total_pages;
        if(totalPages >= 250){
            totalPages = 250
        }
        let view = [];
        for(let i = 1; i <= totalPages; i++){
            view.push(`<div><span class="PageNumbers">${i}</span></div>`);
        };
        ContainerNumbersPage.innerHTML = view.join("");
        const pageNumbersAll = totalPageNumberALL();
        pageNumbersAll.forEach((item, index)=>{
            item.addEventListener("click", () =>{
                getPaginacion({ruta: ruta, ContainerNumbersPage: ContainerNumbersPage, pageNum: (index + 1),Container: Container, Creator_Movie_SerieCard: Creator_Movie_SerieCard, lazyLoad: true})
            })
        })
        PageIs.innerText = `page: ${pageNum}`;
        Creator_Movie_SerieCard({Movies: Movies, Container: Container, lazyLoad: lazyLoad});
        window.scroll(0,0);
}
async function getPaginacionGeneros
({ruta, 
    id, 
    Container,
    ContainerNumbersPage, 
    Creator_Movie_SerieCard,
    pageNum, 
    lazyLoad,
}){
    const {data} = await api(`${ruta}`,{
        params: {
            with_genres: id,
            page: pageNum,
            language: navigator.language || "es-ES",
        }
    })
    const pelisTendencias = data.results;
    let totalPages = data.total_pages;
        if(totalPages >= 250){
            totalPages = 250
        }
        let view = [];
        for(let i = 1; i <= totalPages; i++){
            view.push(`<div><span class="PageNumbers">${i}</span></div>`);
        };
        ContainerNumbersPage.innerHTML = view.join("");
        const pageNumbersAll = totalPageNumberALL();
        pageNumbersAll.forEach((item, index)=>{
            item.addEventListener("click", () =>{
                getPaginacionGeneros({ruta: ruta, 
                    id: id, 
                    Container: Container, 
                    Creator_Movie_SerieCard: Creator_Movie_SerieCard,
                    ContainerNumbersPage: ContainerNumbersPage, 
                    pageNum: (index + 1), 
                    lazyLoad: lazyLoad, 
                });
            })
        });
        PageIs.innerText = `page: ${pageNum}`;
    Creator_Movie_SerieCard({Movies: pelisTendencias, Container: Container, lazyLoad: lazyLoad});
    window.scroll(0,0);
}