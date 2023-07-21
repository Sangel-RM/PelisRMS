// Header 
const HeaderContainer = document.querySelector(".HeaderContainer")
// Tendencias
const PelisTendencias = document.querySelector(".PelisTendencias");

// botones Para mover las Pelis o Series
const buttons_left_right = document.querySelectorAll(".buttonsleft-right");
buttons_left_right.forEach(item => item.classList.add("none"));
if(screen.width >= 1024){
    buttons_left_right.forEach(item => item.classList.remove("none"));
}
// categories Movies 
const categoryMovies = document.querySelector(".categoriesMovies");

// Estrenos  Destacados HD
const estrenosDestacadosHD = document.querySelector(".EstrenosDestacadosHD");

// Pelis Disponibles Totals 
const pelisDisponiblesTotals = document.querySelector(".pelisDisponiblesTotals");

// Series Tendencias 
const SeriesDestacadas = document.querySelector(".SeriesTendencias");

// Nuevas Series Disponibles 
const seriesDispo = document.querySelector(".seriesDisponiblesCard");


// manupulación scroll 
const pelisScrolls = document.querySelectorAll(".scroll");
const anchoCard = document.querySelector(".card").clientWidth;
pelisScrolls.forEach(item => item.scroll(anchoCard, 0))

const botonesIzquierda = document.querySelectorAll(".fa-chevron-left");
const botonesDerecha = document.querySelectorAll(".fa-chevron-right");

console.log({pelisScrolls, anchoCard,botonesDerecha, botonesIzquierda});
setInterval(()=>{
    pelisScrolls.forEach(item => {
        if(item.scrollLeft < 4714){
            item.scroll(item.scrollLeft + anchoCard, 0)
        }else{
            item.scroll(0, 0);
        }
    })
},5000);
botonesDerecha.forEach((item, i)=> item.addEventListener("click", () => {
    if(pelisScrolls[i].scrollLeft < 4714){
        pelisScrolls[i].scroll(pelisScrolls[i].scrollLeft + anchoCard, 0);
        console.log(pelisScrolls[i].scrollLeft);
    }else{
        pelisScrolls[i].scroll(0, 0)
    }
}));
botonesIzquierda.forEach((item, i)=> item.addEventListener("click", () => {
    if(pelisScrolls[i].scrollLeft > 0){
        pelisScrolls[i].scroll(pelisScrolls[i].scrollLeft - anchoCard, 0);
        console.log(pelisScrolls[i].scrollLeft);
    }else{
        pelisScrolls[i].scroll(4714, 0)
    }
}));
