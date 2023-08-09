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
})
function navigator() {
    console.log({location});
    if(location.hash.startsWith("#Home")){
        HomePage();
    }else if(location.hash.startsWith("#Movie=")){
        MoviesPage();
    }else if(location.hash.startsWith("#Category=")){
        CategoryPage();
    }else if(location.hash.startsWith("#search=")){
        SearchPage();
    }
}
function HomePage() {
    console.log("home!!");
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
    console.log("Movie!!");
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

        const [_, name_id_data] = location.hash.split("=");
        const [id_name, movie_id] = name_id_data.split("-");

        getMovieByID(movie_id);
        // getPopularMoviesDestacadas()
}
function CategoryPage() {
    console.log("Categorias!!");
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

        const [_, categoryData] = location.hash.split("=");
        const [id, idName] = categoryData.split("-");

        getTrendingMoviesFilter(id);

        titleGeneroInsert.innerText = "";
        titleGeneroInsert.innerText = idName;

        window.scroll(0,0);
}
function SearchPage() {
        console.log("Search!!");
        SeccionBienvenida.classList.add("none");
            SeccionTendencias.classList.add("none");
            SeccionEstrenosPelisDestacados.classList.add("none");
            SeccionPelisDisponibles.classList.add("none");
            SeccionSeriesDestacadas.classList.add("none");
            SeccionSeriesDisponibles.classList.add("none");
            SeccionSeriesTotal.classList.add("none");
            SeccionContainerPeliINFMovie.classList.add("none");
            PageGENEROS_PELIS_SERIES.classList.remove("none");
            HeaderRecientementeTitle.innerText = "Resultados Search";
            SeccionCuadrillaPelis_Series_GenerosFilter.innerHTML = "";
            titleGeneroInsert.innerText = "";
            titleGeneroInsert.innerText = "Resultados";
            window.scroll(0,0);

            // ['#search', 'buscador'];
            const [_, query] = location.hash.split("=");
        getMovieBySearch(query);
}
function TrendsePage() {
    console.log("trendens!!");
}
