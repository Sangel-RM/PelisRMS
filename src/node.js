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
const searchInput = $Selector(".search");
const SearchMOVIELUPA = $Selector(".SearchMovie");

// header Section Menu 
const categoryMenu = $SelectorAll(".insertCategory");
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
    console.log("1");
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

// botones Para mover las Pelis o Series
const buttons_left_right = $SelectorAll(".buttonsleft-right");
buttons_left_right.forEach(item => item.classList.add("none"));

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
const pelisScrolls = $SelectorAll(".scroll");
const anchoCard = $Selector(".card").clientWidth;
pelisScrolls.forEach(item => item.scroll(anchoCard, 0))

const botonesIzquierda = $SelectorAll(".fa-chevron-left");
const botonesDerecha = $SelectorAll(".fa-chevron-right");

console.log({pelisScrolls, anchoCard,botonesDerecha, botonesIzquierda});
let indexintervarl = 0;
setInterval(()=>{
indexintervarl++;
    pelisScrolls.forEach((item, i)=> {
        if(screen.width <= 1440){
            if(item.scrollLeft < 4714){
                item.scroll(item.scrollLeft + anchoCard, 0);
                if (indexintervarl == 17) {
                    indexintervarl = 0;
                }
                if(i == 0){
                    // console.log(item.scrollLeft, indexintervarl);
                }
            }else{
                item.scroll(0, 0);
            }
        }else{
            if(item.scrollLeft < 3713){
                item.scroll(item.scrollLeft + anchoCard, 0);
                // console.log(item.scrollLeft);
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

// quitando la clase none para las vista de desktop
if(screen.width >= 1024){
    buttons_left_right.forEach(item => item.classList.remove("none"));
}

// seleccionando la sección cuando uno valla abrir una pelicula
const pelisINFMOVIE = $Selector(".ContainerPeliINFMovie");
const leta = pelisINFMOVIE.classList;
console.log(leta);

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
const PeliculasMasDestacadas = $Selector(".pelisDisponiblesMasDestacadas");
// page total Generos search
// seccion Cuadrilla Pelis Genres
const SeccionCuadrillaPelis_Series_GenerosFilter = $Selector(".cuadrillaPelis");

// Title
const titleGeneroInsert = $Selector(".title-GENEROS-PELI-SERIE");
const HeaderRecientementeTitle = $Selector(".Header-Recientemente");

