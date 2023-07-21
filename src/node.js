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


