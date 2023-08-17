window.addEventListener("DOMContentLoaded", navigator, false);
window.addEventListener("hashchange", navigator, false);

SearchMOVIELUPA.addEventListener("click", () => {
    location.hash = `#search=${searchInput.value}`;
});
searchInput.addEventListener("keyup", (event) => {
    if(event.which === 13){
        location.hash = `#search=${searchInput.value}`;
        searchInput.value = "";
    }
});
// secciones para buscar todas las secciones
VerTodoTendencias.addEventListener("click", () => {
    location.hash = "#VerTodo=Tendencias";
});
VerTodoEstrenosDestacados.addEventListener("click", () => {
    location.hash = "#VerTodo=EstrenosDestacados";
});
VerTodopelisDisponibles.addEventListener("click", () => {
    location.hash = "VerTodo=PelisDisponibles";
});
VerTodoSeriesDestacadas.addEventListener("click", () => {
    location.hash = "VerTodo=SeriesDestacadas";
});
VerTodoSeriesDisponibles.addEventListener("click", () => {
    location.hash = "VerTodo=SeriesDisponibles";
});
VerTodoSeriesTotal.addEventListener("click", () => {
    location.hash = "VerTodo=SeriesTotal";
})
function navigator() {
    if(location.hash.startsWith("#Home")){
        HomePage();
    }else if(location.hash.startsWith("#Movie=") || location.hash.startsWith("#Series=")){
        MoviesPage();
    }else if(location.hash.startsWith("#CategoryMovie=") || location.hash.startsWith("#CategorySerie=")){
        CategoryPage();
    }else if(location.hash.startsWith("#search=")){
        SearchPage();
    }else if(location.hash.startsWith("#SearchAnio=")){
        SearchAnioPage();
    }else if(location.hash.startsWith("#VerTodo=")){
        VerTodo();
    }
}
function HomePage() {
            ContainerVideoTriler.innerHTML = "";
            SeccionCuadrillaPelis_Series_GenerosFilter.innerHTML = "";
            SeccionTendencias.classList.remove("none")
            SeccionBienvenida.classList.remove("none")
            SeccionEstrenosPelisDestacados.classList.remove("none")
            SeccionPelisDisponibles.classList.remove("none")
            SeccionSeriesDestacadas.classList.remove("none")
            SeccionSeriesDisponibles.classList.remove("none")
            SeccionSeriesTotal.classList.remove("none")
            PageGENEROS_PELIS_SERIES.classList.add("none");
            SeccionContainerPeliINFMovie.classList.add("none")
            window.scroll(0,0);
            CloseTitlesAndSeccionCuadrillaSeries();
}
function MoviesPage() {
        ContainerVideoTriler.innerHTML = "";
        SeccionCuadrillaPelis_Series_GenerosFilter.innerHTML = "";
        SeccionBienvenida.classList.add("none");
        SeccionTendencias.classList.add("none");
        SeccionEstrenosPelisDestacados.classList.add("none");
        SeccionPelisDisponibles.classList.add("none");
        SeccionSeriesDestacadas.classList.add("none");
        SeccionSeriesDisponibles.classList.add("none");
        SeccionSeriesTotal.classList.add("none");
        PageGENEROS_PELIS_SERIES.classList.add("none");
        SeccionContainerPeliINFMovie.classList.remove("none");
        window.scroll(0,0);
        TitulosSimilaresInsert.scroll(0,0);
        CloseTitlesAndSeccionCuadrillaSeries()

        CreateAniosSearch();

        const [_, name_id_data] = location.hash.split("=");
        const [id_name, movie_id] = name_id_data.split("_");
        if(location.hash.startsWith("#Movie=")){
            titleMasDestacadas.innerText = "Movies Mas Destacados";
            getMovieByID({id: movie_id});
            getPopularMoviesDestacadas({Container: PeliculasMasDestacadas, lazyLoad: true});
            getMovieSimilarID({id: movie_id, Container: TitulosSimilaresInsert, Creator_Movie_SerieCard: CreateMoviesNormalSimilares, lazyLoad: true});
        }else if(location.hash.startsWith("#Series=")){
            titleMasDestacadas.innerText = "Series Mas Destacadas";
            getSerieByID({id: movie_id});
            getPopularSeriesDestacadas({Container: PeliculasMasDestacadas, lazyLoad: true});
            getSerieSimilarID({id: movie_id, Container: TitulosSimilaresInsert, Creator_Movie_SerieCard: CreateSeriesNormalSimilares, lazyLoad: true});
        }

}
function CategoryPage() {
        ContainerVideoTriler.innerHTML = "";
        SeccionBienvenida.classList.add("none");
        SeccionTendencias.classList.add("none");
        SeccionEstrenosPelisDestacados.classList.add("none");
        SeccionPelisDisponibles.classList.add("none");
        SeccionSeriesDestacadas.classList.add("none");
        SeccionSeriesDisponibles.classList.add("none");
        SeccionSeriesTotal.classList.add("none");
        SeccionContainerPeliINFMovie.classList.add("none");
        PageGENEROS_PELIS_SERIES.classList.remove("none");
        HeaderRecientementeTitle.innerText = "Añadido recientemente";
        titleGeneroInsert.innerText = "Generos";
        paginacionInsert.classList.remove("none");
        CreateAniosSearch();
        CreatePageNumber({Container: paginacionInsert});
        OpenTitlesAndSeccionCuadrillaSeries();
        const [dataRuta, categoryData] = location.hash.split("=");
        const [id, idName] = categoryData.split("-");

        const totalPageNumber = totalPageNumberALL();
        if(location.hash.startsWith("#CategoryMovie=")){
            getTrendingMoviesFilter({id: id, Container: SeccionCuadrillaPelis_Series_GenerosFilter, lazyLoad: true});
            totalPageNumber.forEach((item, index) => {
                item.addEventListener("click", () => {
                    window.scroll(0,0)
                    getTrendingMoviesFilter({id: id, Container: SeccionCuadrillaPelis_Series_GenerosFilter, pageNum: (index + 1), lazyLoad: true});
                    console.log(index + 1);
                });
            });
        }else if(location.hash.startsWith("#CategorySerie=")){
            getTrendingSeriesFilter({id: id, Container: SeccionCuadrillaSeries, lazyLoad: true});
            totalPageNumber.forEach((item, index) => {
                item.addEventListener("click", () => {
                    window.scroll(0,0)
                    getTrendingSeriesFilter({id: id, Container: SeccionCuadrillaSeries, pageNum: (index + 1), lazyLoad: true});
                    console.log(index + 1);
                })
            });
        };
        window.scroll(0,0);
}
function SearchPage() {
            ContainerVideoTriler.innerHTML = "";
            SeccionBienvenida.classList.add("none");
            SeccionTendencias.classList.add("none");
            SeccionEstrenosPelisDestacados.classList.add("none");
            SeccionPelisDisponibles.classList.add("none");
            SeccionSeriesDestacadas.classList.add("none");
            SeccionSeriesDisponibles.classList.add("none");
            SeccionSeriesTotal.classList.add("none");
            SeccionContainerPeliINFMovie.classList.add("none");
            PageGENEROS_PELIS_SERIES.classList.remove("none");
            HeaderRecientementeTitle.innerText = "Resultados";
            SeccionCuadrillaPelis_Series_GenerosFilter.innerHTML = "";
            titleGeneroInsert.innerText = "";
            titleGeneroInsert.innerText = "Resultados";
            paginacionInsert.classList.add("none");
            window.scroll(0,0);

            CreateAniosSearch();
            CreatePageNumber({Container: paginacionInsert});
            OpenTitlesAndSeccionCuadrillaSeries();

            // ['#search', 'buscador'];
            const [_, query] = location.hash.split("=");
            getMovieBySearch({query: query, Container: SeccionCuadrillaPelis_Series_GenerosFilter, lazyLoad: true});
            getSeriesBySearch({query: query, Container: SeccionCuadrillaSeries, lazyLoad: true});
}
function SearchAnioPage(){
    ContainerVideoTriler.innerHTML = "";
    SeccionBienvenida.classList.add("none");
    SeccionTendencias.classList.add("none");
    SeccionEstrenosPelisDestacados.classList.add("none");
    SeccionPelisDisponibles.classList.add("none");
    SeccionSeriesDestacadas.classList.add("none");
    SeccionSeriesDisponibles.classList.add("none");
    SeccionSeriesTotal.classList.add("none");
    SeccionContainerPeliINFMovie.classList.add("none");
    PageGENEROS_PELIS_SERIES.classList.remove("none");
    HeaderRecientementeTitle.innerText = "Resultados";
    SeccionCuadrillaPelis_Series_GenerosFilter.innerHTML = "";
    titleGeneroInsert.innerText = "";
    titleGeneroInsert.innerText = "Resultados";
    paginacionInsert.classList.remove("none");
    window.scroll(0,0);

    CreateAniosSearch();
    CreatePageNumber({Container: paginacionInsert});
    const totalPageNumber = totalPageNumberALL();
    OpenTitlesAndSeccionCuadrillaSeries();

    const [_, query] = location.hash.split("=");
    getMoviesFilterAnio({query: query, Container: SeccionCuadrillaPelis_Series_GenerosFilter, lazyLoad: true});
    getSeriesFilterAnio({query: query, Container: SeccionCuadrillaSeries, lazyLoad: true});   
    totalPageNumber.forEach((item, index) => {
        item.addEventListener("click", () => {
            window.scroll(0,0)
            getMoviesFilterAnio({query: query, Container: SeccionCuadrillaPelis_Series_GenerosFilter, pageNum: (index + 1), lazyLoad: true});
            getSeriesFilterAnio({query: query, Container: SeccionCuadrillaSeries, pageNum: (index + 1), lazyLoad: true});
            console.log(index + 1);
        })
    })
}
function VerTodo(){
    ContainerVideoTriler.innerHTML = "";
    SeccionBienvenida.classList.add("none");
    SeccionTendencias.classList.add("none");
    SeccionEstrenosPelisDestacados.classList.add("none");
    SeccionPelisDisponibles.classList.add("none");
    SeccionSeriesDestacadas.classList.add("none");
    SeccionSeriesDisponibles.classList.add("none");
    SeccionSeriesTotal.classList.add("none");
    SeccionContainerPeliINFMovie.classList.add("none");
    PageGENEROS_PELIS_SERIES.classList.remove("none");
    HeaderRecientementeTitle.innerText = "Añadido recientemente";
    titleGeneroInsert.innerText = "";
    paginacionInsert.classList.remove("none");
    window.scroll(0,0);
    CreateAniosSearch();
    CreatePageNumber({Container: paginacionInsert});
    OpenTitlesAndSeccionCuadrillaSeries();
    const totalPageNumber = totalPageNumberALL();

    const [Seccion, funcion] = location.hash.split("=");
    if(funcion == "Tendencias"){
        titleGeneroInsert.innerText = "Tendencias";
        getTrendingMovies({Container: SeccionCuadrillaPelis_Series_GenerosFilter, Creator_Movie_SerieCard: CreateMoviesNormal, pageNum: 1, lazyLoad: true});
    }
    else if(funcion == "EstrenosDestacados"){
        titleGeneroInsert.innerText = "Estrenos Destacados";
        getPopularMovies({Container: SeccionCuadrillaPelis_Series_GenerosFilter, Creator_Movie_SerieCard: CreateMoviesNormal, pageNum: 1, lazyLoad: true});
    }
    else if(funcion == "PelisDisponibles"){
        titleGeneroInsert.innerText = "Pelis Disponibles";
        getNowMovies({Container: SeccionCuadrillaPelis_Series_GenerosFilter, Creator_Movie_SerieCard: CreateMoviesNormal, pageNum: 1, lazyLoad: true});
    }
    else if(funcion == "SeriesDestacadas"){
        titleGeneroInsert.innerText = "Series Destacadas";
        getTvSeriesTendencias({Container: SeccionCuadrillaPelis_Series_GenerosFilter, Creator_Movie_SerieCard: CreateSeriesNormal, pageNum: 1, lazyLoad: true});
    }
    else if(funcion == "SeriesDisponibles"){
        titleGeneroInsert.innerText = "Series Disponibles";
        getTvSeriesDisponibles({Container: SeccionCuadrillaPelis_Series_GenerosFilter, Creator_Movie_SerieCard: CreateSeriesNormal, pageNum: 1, lazyLoad: true});
    }
    else if(funcion == "SeriesTotal"){
        titleGeneroInsert.innerText = "Series Total";
        getTvSeriesDisponiblesTotals({Container: SeccionCuadrillaPelis_Series_GenerosFilter, Creator_Movie_SerieCard: CreateSeriesNormal, pageNum: 1, lazyLoad: true});
    }
    else{
        if(funcion == "Movies"){
            titleGeneroInsert.innerText = funcion;
            getTrendingMovies({Container: SeccionCuadrillaPelis_Series_GenerosFilter, Creator_Movie_SerieCard: CreateMoviesNormal, pageNum: 1, lazyLoad: true})
        }
        else if(funcion == "Series" || funcion == "TV"){
            titleGeneroInsert.innerText = funcion;
            getTvSeriesDisponibles({Container: SeccionCuadrillaPelis_Series_GenerosFilter, Creator_Movie_SerieCard: CreateSeriesNormal, pageNum: 1, lazyLoad: true});
        }
    }
    totalPageNumber.forEach((item, index) => {
        item.addEventListener("click", () => {
            if(funcion == "Tendencias"){
                titleGeneroInsert.innerText = funcion;
                getTrendingMovies({Container: SeccionCuadrillaPelis_Series_GenerosFilter, Creator_Movie_SerieCard: CreateMoviesNormal, pageNum: (index + 1), lazyLoad: true});
                    window.scroll(0,0);
            }
            else if(funcion == "EstrenosDestacados"){
                titleGeneroInsert.innerText = funcion;
                getPopularMovies({Container: SeccionCuadrillaPelis_Series_GenerosFilter, Creator_Movie_SerieCard: CreateMoviesNormal, pageNum: (index + 1), lazyLoad: true});
                    window.scroll(0,0);
            }
            else if(funcion == "PelisDisponibles"){
                titleGeneroInsert.innerText = funcion;
                getNowMovies({Container: SeccionCuadrillaPelis_Series_GenerosFilter, Creator_Movie_SerieCard: CreateMoviesNormal, pageNum: (index + 1), lazyLoad: true});
                    window.scroll(0,0);
            }
            else if(funcion == "SeriesDestacadas"){
                titleGeneroInsert.innerText = funcion;
                getTvSeriesTendencias({Container: SeccionCuadrillaPelis_Series_GenerosFilter, Creator_Movie_SerieCard: CreateSeriesNormal, pageNum: (index + 1), lazyLoad: true});
                    window.scroll(0,0);
            }
            else if(funcion == "SeriesDisponibles"){
                titleGeneroInsert.innerText = funcion;
                getTvSeriesDisponibles({Container: SeccionCuadrillaPelis_Series_GenerosFilter, Creator_Movie_SerieCard: CreateSeriesNormal, pageNum: (index + 1), lazyLoad: true});
                    window.scroll(0,0);
            }
            else if(funcion == "SeriesTotal"){
                titleGeneroInsert.innerText = funcion;
                getTvSeriesDisponiblesTotals({Container: SeccionCuadrillaPelis_Series_GenerosFilter, Creator_Movie_SerieCard: CreateSeriesNormal, pageNum: (index + 1), lazyLoad: true});
                    window.scroll(0,0);
            }
            else{
                if(funcion == "Movies"){
                    titleGeneroInsert.innerText = funcion;
                    getTrendingMovies({Container: SeccionCuadrillaPelis_Series_GenerosFilter, Creator_Movie_SerieCard: CreateMoviesNormal, pageNum: (index + 1), lazyLoad: true})
                }
                else if(funcion == "Series" || funcion == "TV"){
                    titleGeneroInsert.innerText = funcion;
                    getTvSeriesDisponibles({Container: SeccionCuadrillaPelis_Series_GenerosFilter, Creator_Movie_SerieCard: CreateSeriesNormal, pageNum: (index + 1), lazyLoad: true});
                }
            }
            console.log(index + 1);
        })
    })
}