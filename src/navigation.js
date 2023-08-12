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
    }else if(location.hash.startsWith("#Category=")){
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

        CreateAniosSearch(index);

        const [_, name_id_data] = location.hash.split("=");
        const [id_name, movie_id] = name_id_data.split("_");
        if(location.hash.startsWith("#Movie=")){
            getMovieByID(movie_id);
            getPopularMoviesDestacadas(PeliculasMasDestacadas);
            getMovieSimilarID(movie_id, TitulosSimilaresInsert, CreateMoviesNormalSimilares);
        }else if(location.hash.startsWith("#Series=")){
            getSerieByID(movie_id);
            getPopularMoviesDestacadas(PeliculasMasDestacadas);
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

        CreateAniosSearch(index);

        const [_, categoryData] = location.hash.split("=");
        const [id, idName] = categoryData.split("-");

        getTrendingMoviesFilter(id, SeccionCuadrillaPelis_Series_GenerosFilter);

        titleGeneroInsert.innerText = "";
        titleGeneroInsert.innerText = idName;

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

            // ['#search', 'buscador'];
            const [_, query] = location.hash.split("=");
        getMovieBySearch(query, SeccionCuadrillaPelis_Series_GenerosFilter);
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

    const [_, query] = location.hash.split("=");
    getMoviesFilterAnio(query);
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

    CreateAniosSearch(index);

    const [_, funcion] = location.hash.split("=");
    if(funcion == "Tendencias"){
        titleGeneroInsert.innerText = funcion;
        getTrendingMovies(SeccionCuadrillaPelis_Series_GenerosFilter, CreateMoviesNormal);
    }
    else if(funcion == "EstrenosDestacados"){
        titleGeneroInsert.innerText = funcion;
        getPopularMovies(SeccionCuadrillaPelis_Series_GenerosFilter, CreateMoviesNormal);
    }
    else if(funcion == "PelisDisponibles"){
        titleGeneroInsert.innerText = funcion;
        getNowMovies(SeccionCuadrillaPelis_Series_GenerosFilter, CreateMoviesNormal);
    }
    else if(funcion == "SeriesDestacadas"){
        titleGeneroInsert.innerText = funcion;
        getTvSeriesTendencias(SeccionCuadrillaPelis_Series_GenerosFilter, CreateSeriesNormal);
    }
    else if(funcion == "SeriesDisponibles"){
        titleGeneroInsert.innerText = funcion;
        getTvSeriesDisponibles(SeccionCuadrillaPelis_Series_GenerosFilter, CreateSeriesNormal);
    }
    else if(funcion == "SeriesTotal"){
        titleGeneroInsert.innerText = funcion;
        getTvSeriesDisponiblesTotals(SeccionCuadrillaPelis_Series_GenerosFilter, CreateSeriesNormal);
    }
}