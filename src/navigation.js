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
        const index = 0;
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

        CreateAniosSearch(index);

        const [_, name_id_data] = location.hash.split("=");
        const [id_name, movie_id] = name_id_data.split("_");
        if(location.hash.startsWith("#Movie=")){
            titleMasDestacadas.innerText = "Movies Mas Destacados";
            getMovieByID(movie_id);
            getPopularMoviesDestacadas(PeliculasMasDestacadas);
            getMovieSimilarID(movie_id, TitulosSimilaresInsert, CreateMoviesNormalSimilares);
        }else if(location.hash.startsWith("#Series=")){
            titleMasDestacadas.innerText = "Series Mas Destacadas";
            getSerieByID(movie_id);
            getPopularSeriesDestacadas(PeliculasMasDestacadas);
            getSerieSimilarID(movie_id, TitulosSimilaresInsert, CreateSeriesNormalSimilares);
        }

}
function CategoryPage() {
        SeccionCuadrillaPelis_Series_GenerosFilter.innerHTML = "";
        ContainerVideoTriler.innerHTML = "";
        const index = 1;
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
        CreateAniosSearch(index);
        CreatePageNumber(paginacionInsert);
        OpenTitlesAndSeccionCuadrillaSeries();
        const [dataRuta, categoryData] = location.hash.split("=");
        const [id, idName] = categoryData.split("-");

        const totalPageNumber = totalPageNumberALL();
        if(location.hash.startsWith("#CategoryMovie=")){
            getTrendingMoviesFilter(id, SeccionCuadrillaPelis_Series_GenerosFilter);
            totalPageNumber.forEach((item, index) => {
                item.addEventListener("click", () => {
                    getTrendingMoviesFilter(id, SeccionCuadrillaPelis_Series_GenerosFilter, (index + 1));
                    console.log(index + 1);
                });
            });
        }else if(location.hash.startsWith("#CategorySerie=")){
            getTrendingSeriesFilter(id, SeccionCuadrillaSeries);
            totalPageNumber.forEach((item, index) => {
                item.addEventListener("click", () => {
                    getTrendingSeriesFilter(id, SeccionCuadrillaSeries, (index + 1));
                    console.log(index + 1);
                })
            });
        };
        window.scroll(0,0);
}
function SearchPage() {
            SeccionCuadrillaPelis_Series_GenerosFilter.innerHTML = "";
            ContainerVideoTriler.innerHTML = "";
            const index = 1;
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
            window.scroll(0,0);

            CreateAniosSearch(index);
            CreatePageNumber(paginacionInsert);
            OpenTitlesAndSeccionCuadrillaSeries();

            // ['#search', 'buscador'];
            const [_, query] = location.hash.split("=");
            getMovieBySearch(query, SeccionCuadrillaPelis_Series_GenerosFilter);
            getSeriesBySearch(query, SeccionCuadrillaSeries)
}
function SearchAnioPage(){
    SeccionCuadrillaPelis_Series_GenerosFilter.innerHTML = "";
    ContainerVideoTriler.innerHTML = "";
    const index = 1;
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
    window.scroll(0,0);

    CreateAniosSearch(index);
    CreatePageNumber(paginacionInsert);
    const totalPageNumber = totalPageNumberALL();
    OpenTitlesAndSeccionCuadrillaSeries();

    const [_, query] = location.hash.split("=");
    getMoviesFilterAnio(query, SeccionCuadrillaPelis_Series_GenerosFilter);
    getSeriesFilterAnio(query, SeccionCuadrillaSeries);   
    totalPageNumber.forEach((item, index) => {
        item.addEventListener("click", () => {
            getMoviesFilterAnio(query, SeccionCuadrillaPelis_Series_GenerosFilter, (index + 1));
            getSeriesFilterAnio(query, SeccionCuadrillaSeries, (index + 1));
            console.log(index + 1);
        })
    })
}
function VerTodo(){
    SeccionCuadrillaPelis_Series_GenerosFilter.innerHTML = "";
    ContainerVideoTriler.innerHTML = "";
    const index = 1;
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
    window.scroll(0,0);
    CreateAniosSearch(index);
    CreatePageNumber(paginacionInsert);
    OpenTitlesAndSeccionCuadrillaSeries();
    const totalPageNumber = totalPageNumberALL();

    const [Seccion, funcion] = location.hash.split("=");
    if(funcion == "Tendencias"){
        titleGeneroInsert.innerText = funcion;
        getTrendingMovies(SeccionCuadrillaPelis_Series_GenerosFilter,CreateMoviesNormal, 1);
    }
    else if(funcion == "EstrenosDestacados"){
        titleGeneroInsert.innerText = funcion;
        getPopularMovies(SeccionCuadrillaPelis_Series_GenerosFilter, CreateMoviesNormal, 1);
    }
    else if(funcion == "PelisDisponibles"){
        titleGeneroInsert.innerText = funcion;
        getNowMovies(SeccionCuadrillaPelis_Series_GenerosFilter, CreateMoviesNormal, 1);
    }
    else if(funcion == "SeriesDestacadas"){
        titleGeneroInsert.innerText = funcion;
        getTvSeriesTendencias(SeccionCuadrillaPelis_Series_GenerosFilter, CreateSeriesNormal, 1);
    }
    else if(funcion == "SeriesDisponibles"){
        titleGeneroInsert.innerText = funcion;
        getTvSeriesDisponibles(SeccionCuadrillaPelis_Series_GenerosFilter, CreateSeriesNormal, 1);
    }
    else if(funcion == "SeriesTotal"){
        titleGeneroInsert.innerText = funcion;
        getTvSeriesDisponiblesTotals(SeccionCuadrillaPelis_Series_GenerosFilter, CreateSeriesNormal, 1);
    }
    else{
        if(funcion == "Movies"){
            titleGeneroInsert.innerText = funcion;
            getTrendingMovies(SeccionCuadrillaPelis_Series_GenerosFilter,CreateMoviesNormal, 1)
        }
        else if(funcion == "Series" || funcion == "TV"){
            titleGeneroInsert.innerText = funcion;
            getTvSeriesDisponibles(SeccionCuadrillaPelis_Series_GenerosFilter, CreateSeriesNormal, 1);
        }
    }
    totalPageNumber.forEach((item, index) => {
        item.addEventListener("click", () => {
            if(funcion == "Tendencias"){
                titleGeneroInsert.innerText = funcion;
                getTrendingMovies(SeccionCuadrillaPelis_Series_GenerosFilter,CreateMoviesNormal, (index + 1));
                    window.scroll(0,0);
            }
            else if(funcion == "EstrenosDestacados"){
                titleGeneroInsert.innerText = funcion;
                getPopularMovies(SeccionCuadrillaPelis_Series_GenerosFilter, CreateMoviesNormal, (index + 1));
                    window.scroll(0,0);
            }
            else if(funcion == "PelisDisponibles"){
                titleGeneroInsert.innerText = funcion;
                getNowMovies(SeccionCuadrillaPelis_Series_GenerosFilter, CreateMoviesNormal, (index + 1));
                    window.scroll(0,0);
            }
            else if(funcion == "SeriesDestacadas"){
                titleGeneroInsert.innerText = funcion;
                getTvSeriesTendencias(SeccionCuadrillaPelis_Series_GenerosFilter, CreateSeriesNormal, (index + 1));
                    window.scroll(0,0);
            }
            else if(funcion == "SeriesDisponibles"){
                titleGeneroInsert.innerText = funcion;
                getTvSeriesDisponibles(SeccionCuadrillaPelis_Series_GenerosFilter, CreateSeriesNormal, (index + 1));
                    window.scroll(0,0);
            }
            else if(funcion == "SeriesTotal"){
                titleGeneroInsert.innerText = funcion;
                getTvSeriesDisponiblesTotals(SeccionCuadrillaPelis_Series_GenerosFilter, CreateSeriesNormal, (index + 1));
                    window.scroll(0,0);
            }
            else{
                if(funcion == "Movies"){
                    titleGeneroInsert.innerText = funcion;
                    getTrendingMovies(SeccionCuadrillaPelis_Series_GenerosFilter,CreateMoviesNormal, (index + 1))
                }
                else if(funcion == "Series" || funcion == "TV"){
                    titleGeneroInsert.innerText = funcion;
                    getTvSeriesDisponibles(SeccionCuadrillaPelis_Series_GenerosFilter, CreateSeriesNormal, (index + 1));
                }
            }
            console.log(index + 1);
        })
    })
}