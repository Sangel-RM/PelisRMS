const $Selector = (Class) => {
    return document.querySelector(Class);
}
const $SelectorAll = (Class) =>{
    return document.querySelectorAll(Class);
}
// Header 
// Header Mobile
const HeaderMobile = $Selector(".headerMobile");

const HeaderContainer = $Selector(".HeaderContainer");
const openInputHeader = $Selector(".open-search");
const closedInputHeader = $Selector(".closed-search");

// Buscador pelis Lupa
const formInputSearchPelis = $Selector(".form");
const searchInput = $SelectorAll(".search");
const SearchMOVIELUPA = $SelectorAll(".SearchMovie");

// header Section Menu 
const categoryMenuMovie = $SelectorAll(".insertCategoryMovie");
const categoryMenuSerie = $SelectorAll(".insertCategorySeries");
const open_menu = $Selector(".open-menu");
const close_menu = $Selector(".close-menu");
const menu = $Selector(".Menu");

openInputHeader.addEventListener("click", () => {
    // cerrando la lupa y abriendo la X
    if(openInputHeader){
        openInputHeader.classList.add("none");
        closedInputHeader.classList.remove("none");
    }
    // Abriendo el input
    if(formInputSearchPelis){  
       formInputSearchPelis.classList.remove("none");
    }
    // en caso de que este el menu abierto
    if(menu){
        close_menu.classList.add("none");
        open_menu.classList.remove("none");
        menu.classList.add("none")
    }
});
closedInputHeader.addEventListener("click", () => {
    // cerrando la lupa y abriendo la X
    if(closedInputHeader){
        closedInputHeader.classList.add("none");
        openInputHeader.classList.remove("none");
    }
    const formInputSearchPelis = document.querySelector(".form")
    if(formInputSearchPelis){  
       formInputSearchPelis.classList.add("none");
    }
});
// header Section Menu 
open_menu.addEventListener("click", () => {
    if(open_menu){
        open_menu.classList.add("none");
        close_menu.classList.remove("none")
        menu.classList.remove("none");
    }
    // en caso de que este el search, form abierto
    if(closedInputHeader){
        closedInputHeader.classList.add("none");
        openInputHeader.classList.remove("none");
        formInputSearchPelis.classList.add("none");
    }
});
close_menu.addEventListener("click", () => {
    if(open_menu){
        close_menu.classList.add("none");
        open_menu.classList.remove("none")
        menu.classList.add("none");
    }
});
// Tendencias
const PelisTendencias = $Selector(".PelisTendencias");

// categories Movies 
const totalsCategories = $Selector(".totalsCategories");

// Estrenos  Destacados HD
const estrenosDestacadosHD = $Selector(".EstrenosDestacadosHD");

// Pelis Disponibles Totals 
const pelisDisponiblesTotals = $Selector(".pelisDisponiblesTotals");

// Series Tendencias 
const SeriesDestacadas = $Selector(".SeriesTendencias");

// Nuevas Series Disponibles 
const seriesDispo = $Selector(".seriesDisponiblesCard");

// Series disponibles totals 
const seriesDisponiblestotals = $Selector(".SeriesDisponiblesTotals");

// manupulación scroll 
const pelisScrolls = $SelectorAll(".scroll1");
const anchoCard = $Selector(".card").clientWidth;
pelisScrolls.forEach(item => item.scroll(anchoCard, 0))

const botonesIzquierda = $SelectorAll(".fa-chevron-left");
const botonesDerecha = $SelectorAll(".fa-chevron-right");

setInterval(()=>{
    pelisScrolls.forEach((item, i)=> {
        if(screen.width <= 1440){
            if(item.scrollLeft < 4714){
                item.scroll(item.scrollLeft + anchoCard, 0);
            }else{
                item.scroll(0, 0);
            }
        }else{
            if(item.scrollLeft < 3713){
                item.scroll(item.scrollLeft + anchoCard, 0);
            }else{
                item.scroll(0, 0);
            }
        }
    })
},5000);
botonesDerecha.forEach((item, i)=> item.addEventListener("click", () => {
    if(screen.width <= 1440){
        if(pelisScrolls[i].scrollLeft < 4714){
            pelisScrolls[i].scroll(pelisScrolls[i].scrollLeft + anchoCard, 0);
            // console.log(pelisScrolls[i].scrollLeft);
        }else{
            pelisScrolls[i].scroll(0, 0)
        }
    }else{
        if(pelisScrolls[i].scrollLeft < 3713){
            pelisScrolls[i].scroll(pelisScrolls[i].scrollLeft + anchoCard, 0);
            // console.log(pelisScrolls[i].scrollLeft);
        }else{
            pelisScrolls[i].scroll(0, 0)
        }
    }
}));
botonesIzquierda.forEach((item, i)=> item.addEventListener("click", () => {
    if(screen.width <= 1440){
        if(pelisScrolls[i].scrollLeft > 0){
            pelisScrolls[i].scroll(pelisScrolls[i].scrollLeft - anchoCard, 0);
            // console.log(pelisScrolls[i].scrollLeft);
        }else{
            pelisScrolls[i].scroll(4714, 0)
        }
    }else{
        if(pelisScrolls[i].scrollLeft > 0){
            pelisScrolls[i].scroll(pelisScrolls[i].scrollLeft - anchoCard, 0);
            console.log(pelisScrolls[i].scrollLeft);
        }else{
            pelisScrolls[i].scroll(3713, 0)
        }
    }
}));

// seccion scrollsButtons
const nodo_scrollsButtons = $SelectorAll(".scrollersbuttons");

// seleccionando la sección cuando uno valla abrir una pelicula
const pelisINFMOVIE = $Selector(".ContainerPeliINFMovie");

// seleccionando las secciones

const SeccionBienvenida = $Selector(".bienvenidos");
const SeccionTendencias = $Selector(".tendencias");
const SeccionEstrenosPelisDestacados = $Selector(".estrenosDestacados");
const SeccionPelisDisponibles = $Selector(".pelisDisponibles");
const SeccionSeriesDestacadas = $Selector(".seriesDestacadas");
const SeccionSeriesDisponibles = $Selector(".seriesDisponibles");
const SeccionSeriesTotal = $Selector(".seriesTotal");
const SeccionContainerPeliINFMovie = $Selector(".ContainerPeliINFMovie");
const PageGENEROS_PELIS_SERIES = $Selector(".totalPelis-Serie-generos-Search");

// Las peliculas mas destacadas 
const titleMasDestacadas = $Selector(".titleMasDestacadas");
const PeliculasMasDestacadas = $Selector(".pelisDisponiblesMasDestacadas");

// page total Generos search
// seccion Cuadrilla Pelis Genres
const SeccionCuadrillaPelis_Series_GenerosFilter = $Selector(".cuadrillaPelis");
const SeccionCuadrillaSeries = $Selector(".cuadrillaSeries");
const TitleSearchPelisOSeries = $SelectorAll(".TitleSearchPelisOSeries");
const ContainerCuadrillaSeries = $Selector(".ContainerCuadrillaSeries");
const ContainerCuadrillaPelis = $Selector(".ContainerCuadrilla");

function CloseTitlesAndSeccionCuadrillaSeries(){
        ContainerCuadrillaSeries.classList.add("none");
        ContainerCuadrillaPelis.classList.add("none");
}
function OpenTitlesAndSeccionCuadrillaSeries(){
    if(location.hash.startsWith("#CategoryMovie/")){
        TitleSearchPelisOSeries[1].classList.add("none");
        TitleSearchPelisOSeries[0].classList.remove("none");
        ContainerCuadrillaSeries.classList.add("none");
        ContainerCuadrillaPelis.classList.remove("none")
    }else if(location.hash.startsWith("#CategorySerie/")){
        TitleSearchPelisOSeries[0].classList.add("none");
        TitleSearchPelisOSeries[1].classList.remove("none");
        ContainerCuadrillaSeries.classList.remove("none");
        ContainerCuadrillaPelis.classList.add("none");
    }else if(location.hash.startsWith("#search/")){
        TitleSearchPelisOSeries[0].classList.remove("none");
        TitleSearchPelisOSeries[1].classList.remove("none");
        ContainerCuadrillaSeries.classList.remove("none");
        ContainerCuadrillaPelis.classList.remove("none");
    }else if(location.hash.startsWith("#SearchAnio/")){
        TitleSearchPelisOSeries[0].classList.remove("none");
        TitleSearchPelisOSeries[1].classList.remove("none");
        ContainerCuadrillaSeries.classList.remove("none");
        ContainerCuadrillaPelis.classList.remove("none");
    }else{
        ContainerCuadrillaSeries.classList.add("none");
        ContainerCuadrillaPelis.classList.remove("none");
    }
}
// Title
const titleGeneroInsert = $Selector(".title-GENEROS-PELI-SERIE");
const HeaderRecientementeTitle = $Selector(".Header-Recientemente");

// cargar datos en la parte de inf de un video
// y cargar container para insertar el boton de like
const titlePeliINF = $Selector(".TitleMOVIE");
const insertPosterPeli = $Selector(".InsertPosterPeli");
const Extras = $Selector(".extras");
const subGeneros = $Selector(".subGeneros");
const bienvenida = $Selector(".bienvenida");
const lang = $Selector(".lang");

const related = $Selector(".related");
const overview = $Selector(".overview");
const title_original_name = $Selector(".TitleMOVIE_ORIGINAL");

const totalStarAverage = $Selector(".totalStarsAverage");
const totalCountVotosAverage = $Selector(".totalCountVotosAverage");

// insertando pelis TitulosSimilaresInsert
const TitulosSimilaresInsert = $Selector(".TitulosSimilaresInsert");
setInterval(()=>{
    if(screen.width >= 1440){
        if(TitulosSimilaresInsert.scrollLeft < 2163){
            TitulosSimilaresInsert.scroll(TitulosSimilaresInsert.scrollLeft + anchoCard, 0);
        }else{
            TitulosSimilaresInsert.scroll(0,0);
        }
    }else if(screen.width >= 1024){
        if(TitulosSimilaresInsert.scrollLeft < 2384){
            TitulosSimilaresInsert.scroll(TitulosSimilaresInsert.scrollLeft + anchoCard, 0);
        }else{
            TitulosSimilaresInsert.scroll(0,0);
        }
    }else if(screen.width >= 768){
        if(TitulosSimilaresInsert.scrollLeft < 2367){
            TitulosSimilaresInsert.scroll(TitulosSimilaresInsert.scrollLeft + anchoCard, 0);
        }else{
            TitulosSimilaresInsert.scroll(0,0);
        }
    }else if(screen.width >= 425){
        if(TitulosSimilaresInsert.scrollLeft < 2710){
            TitulosSimilaresInsert.scroll(TitulosSimilaresInsert.scrollLeft + anchoCard, 0);
        }else{
            TitulosSimilaresInsert.scroll(0,0);
        }
    }else if(screen.width >= 375){
        if(TitulosSimilaresInsert.scrollLeft < 2700){
            TitulosSimilaresInsert.scroll(TitulosSimilaresInsert.scrollLeft + anchoCard, 0);
        }else{
            TitulosSimilaresInsert.scroll(0,0);
        }
    }else if(screen.width >= 320){
        if(TitulosSimilaresInsert.scrollLeft < 2780){
            TitulosSimilaresInsert.scroll(TitulosSimilaresInsert.scrollLeft + anchoCard, 0);
        }else{
            TitulosSimilaresInsert.scroll(0,0);
        }
    }
},3000);

// insertando los anios a el contenedor Anios 
const Anios = $SelectorAll(".anios");

// insertando el trailer en el contenedor 
const ContainerVideoTriler = $Selector(".contenedorVideo");

// Botones para abrir ver todo 
const VerTodoTendencias = $Selector(".VerTodoTendencias");
const VerTodoEstrenosDestacados = $Selector(".VerTodoEstrenosDestacados");
const VerTodopelisDisponibles = $Selector(".verTodopelisDisponibles");
const VerTodoSeriesDestacadas = $Selector(".VerTodoSeriesDestacadas");
const VerTodoSeriesDisponibles = $Selector(".VerTodoSeriesDisponibles");
const VerTodoSeriesTotal = $Selector(".VerTodoSeriesTotal");

// paginacion
const paginacionInsert = $Selector(".Paginacion");
const totalPageNumberALL = () => {
    const totalPageNumber = $SelectorAll(".PageNumbers");
    return totalPageNumber
}
// Mostrar que pagina estoy 
const ContenerdorPageNumber = $Selector(".ContenerdorPageNumber");
const PageIs = $Selector(".pageIS");

// cargar Mas pelis cuando este en la parte de search page
const ContainerCargarMasPelis = $Selector(".ContainerCargarMasPelis");
const ContainerCargarMasSeries = $Selector(".ContainerCargarMasSeries");
