window.addEventListener("DOMContentLoaded", navigator, false);
window.addEventListener("hashchange", navigator, false);

SearchMOVIELUPA.addEventListener("click", () => {
    location.hash = `#search/${searchInput.value}`;
});
searchInput.addEventListener("keyup", (event) => {
    if(event.which === 13){
        location.hash = `#search/${searchInput.value}`;
        searchInput.value = "";
    }
});
// secciones para buscar todas las secciones
VerTodoTendencias.addEventListener("click", () => {
    location.hash = "#VerTodo/Tendencias";
});
VerTodoEstrenosDestacados.addEventListener("click", () => {
    location.hash = "#VerTodo/EstrenosDestacados";
});
VerTodopelisDisponibles.addEventListener("click", () => {
    location.hash = "VerTodo/PelisDisponibles";
});
VerTodoSeriesDestacadas.addEventListener("click", () => {
    location.hash = "VerTodo/SeriesDestacadas";
});
VerTodoSeriesDisponibles.addEventListener("click", () => {
    location.hash = "VerTodo/SeriesDisponibles";
});
VerTodoSeriesTotal.addEventListener("click", () => {
    location.hash = "VerTodo/SeriesTotal";
})
function navigator() {
    if(location.hash.startsWith("#Home")){
        HomePage();
    }else if(location.hash.startsWith("#Movie/") || location.hash.startsWith("#Series/")){
        MoviesPage();
    }else if(location.hash.startsWith("#CategoryMovie/") || location.hash.startsWith("#CategorySerie/")){
        CategoryPage();
    }else if(location.hash.startsWith("#search/")){
        SearchPage();
    }else if(location.hash.startsWith("#SearchAnio/")){
        SearchAnioPage();
    }else if(location.hash.startsWith("#VerTodo/")){
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

        const [_, name_id_data] = location.hash.split("/");
        const [id_name, movie_id] = name_id_data.split("_");
        if(location.hash.startsWith("#Movie/")){
            titleMasDestacadas.innerText = "Movies Mas Destacados";
            getMovieByID({id: movie_id});
            getPopularMoviesDestacadas({Container: PeliculasMasDestacadas, lazyLoad: true});
            getMovieSimilarID({id: movie_id, Container: TitulosSimilaresInsert, Creator_Movie_SerieCard: CreateMoviesNormalSimilares, lazyLoad: true});
        }else if(location.hash.startsWith("#Series/")){
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
        ContenerdorPageNumber.classList.remove("none");
        ContainerCargarMasPelis.classList.add("none");
        ContainerCargarMasSeries.classList.add("none");
        CreateAniosSearch();
        OpenTitlesAndSeccionCuadrillaSeries();
        const [dataRuta, categoryData] = location.hash.split("/");
        const [id, idName] = categoryData.split("-");
        if(dataRuta == "#CategoryMovie"){
            getPaginacionGeneros({ruta: FilterMovieCategory, 
                ContainerNumbersPage: paginacionInsert, 
                Creator_Movie_SerieCard: CreateMoviesNormal, 
                id: id, 
                pageNum: 1,
                Container: SeccionCuadrillaPelis_Series_GenerosFilter, 
                lazyLoad: true,
            });
        }else if(dataRuta == "#CategorySerie"){
            getPaginacionGeneros({ruta: FilterSeriesCategory, 
                ContainerNumbersPage: paginacionInsert, 
                Creator_Movie_SerieCard: CreateSeriesNormal, 
                id: id, 
                Container: SeccionCuadrillaSeries, 
                lazyLoad: true,
                pageNum: 1,
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
            ContenerdorPageNumber.classList.add("none");
            ContainerCargarMasPelis.classList.remove("none");
            ContainerCargarMasSeries.classList.remove("none");
            window.scroll(0,0);

            CreateAniosSearch();
            OpenTitlesAndSeccionCuadrillaSeries();

            // ['#search', 'buscador'];
            const [_, query] = location.hash.split("/");
            getMovieBySearch({query: query, Container: SeccionCuadrillaPelis_Series_GenerosFilter, pageNum: 1, lazyLoad: false});
            getSeriesBySearch({query: query, Container: SeccionCuadrillaSeries, lazyLoad: false, pageNum: 1});
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
    ContenerdorPageNumber.classList.remove("none");
    ContainerCargarMasPelis.classList.add("none");
    ContainerCargarMasSeries.classList.add("none");
    window.scroll(0,0);

    CreateAniosSearch();
    CreatePageNumber({Container: paginacionInsert});
    OpenTitlesAndSeccionCuadrillaSeries();

    const [_, query, pageData] = location.hash.split("/");
    const pageNumbersAll = totalPageNumberALL();
    pageNumbersAll.forEach((item, index) => {
        item.addEventListener("click", () =>{
            window.scroll(0,0);
            getMoviesFilterAnio({query: query, pageNum: (index + 1),Container: SeccionCuadrillaPelis_Series_GenerosFilter, lazyLoad: true});
            getSeriesFilterAnio({query: query, pageNum: (index + 1),Container: SeccionCuadrillaSeries, lazyLoad: true});
        })
    })
    getMoviesFilterAnio({query: query, Container: SeccionCuadrillaPelis_Series_GenerosFilter, lazyLoad: true, pageNum: 1});
    getSeriesFilterAnio({query: query, Container: SeccionCuadrillaSeries, lazyLoad: true, pageNum: 1});
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
    ContenerdorPageNumber.classList.remove("none");
    ContainerCargarMasPelis.classList.add("none");
    ContainerCargarMasSeries.classList.add("none");
    window.scroll(0,0);
    CreateAniosSearch();
    OpenTitlesAndSeccionCuadrillaSeries();

    const [Seccion, funcion, pageData] = location.hash.split("/");
    if(funcion == "Tendencias"){
        titleGeneroInsert.innerText = "Tendencias";
        getPaginacion({ruta: MoviesTrending, 
            ContainerNumbersPage: paginacionInsert, 
            Container: SeccionCuadrillaPelis_Series_GenerosFilter, 
            Creator_Movie_SerieCard: CreateMoviesNormal, 
            lazyLoad: true,
            pageNum: 1 
        });
    }
    else if(funcion == "EstrenosDestacados"){
        titleGeneroInsert.innerText = "Estrenos Destacados";
        getPaginacion({ruta: popularMovies, 
            ContainerNumbersPage: paginacionInsert, 
            Container: SeccionCuadrillaPelis_Series_GenerosFilter, 
            Creator_Movie_SerieCard: CreateMoviesNormal, 
            lazyLoad: true,
            pageNum: 1
        });
    }
    else if(funcion == "PelisDisponibles"){
        titleGeneroInsert.innerText = "Pelis Disponibles";
        getPaginacion({ruta: nowPlayingMovies, 
            ContainerNumbersPage: paginacionInsert, 
            Container: SeccionCuadrillaPelis_Series_GenerosFilter, 
            Creator_Movie_SerieCard: CreateMoviesNormal, 
            lazyLoad: true,
            pageNum: 1 
        });
    }
    else if(funcion == "SeriesDestacadas"){
        titleGeneroInsert.innerText = "Series Destacadas";
        getPaginacion({ruta: tvSeries, 
            ContainerNumbersPage: paginacionInsert, 
            Container: SeccionCuadrillaPelis_Series_GenerosFilter, 
            Creator_Movie_SerieCard: CreateSeriesNormal, 
            lazyLoad: true,
            pageNum: 1 
        });
    }
    else if(funcion == "SeriesDisponibles"){
        titleGeneroInsert.innerText = "Series Disponibles";
        getPaginacion({ruta: tvSeriesPopulares, 
            ContainerNumbersPage: paginacionInsert, 
            Container: SeccionCuadrillaPelis_Series_GenerosFilter, 
            Creator_Movie_SerieCard: CreateSeriesNormal, 
            lazyLoad: true,
            pageNum: 1 
        });
    }
    else if(funcion == "SeriesTotal"){
        titleGeneroInsert.innerText = "Series Total";
        getPaginacion({ruta: tvSeriesTotals, 
            ContainerNumbersPage: paginacionInsert, 
            Container: SeccionCuadrillaPelis_Series_GenerosFilter, 
            Creator_Movie_SerieCard: CreateSeriesNormal, 
            lazyLoad: true,
            pageNum: 1 
        });
    }
    else{
        if(funcion == "Movies"){
            titleGeneroInsert.innerText = funcion;
            getPaginacion({ruta: MoviesTrending, 
                ContainerNumbersPage: paginacionInsert, 
                Container: SeccionCuadrillaPelis_Series_GenerosFilter, 
                Creator_Movie_SerieCard: CreateMoviesNormal, 
                lazyLoad: true,
                pageNum: 1 
            });
        }
        else if(funcion == "Series" || funcion == "TV"){
            titleGeneroInsert.innerText = funcion;
            getPaginacion({ruta: tvSeries, 
                ContainerNumbersPage: paginacionInsert, 
                Container: SeccionCuadrillaPelis_Series_GenerosFilter, 
                Creator_Movie_SerieCard: CreateSeriesNormal, 
                lazyLoad: true,
                pageNum: 1 
            });
        }
    }
}