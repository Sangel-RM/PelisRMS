const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: "application/json",
    },
    params: {
        "api_key": Key_API
    },
});
const $Selector = (Class) => {
    return document.querySelector(Class);
}
const $SelectorAll = (Class) =>{
    return document.querySelectorAll(Class);
}
const TitleMovies = $Selector(".TitleMOVIE");
const subGeneros = $Selector(".subGeneros");
const bienvenida = $Selector(".bienvenida");
const extras = $Selector(".extras");
const Lang = $Selector(".lang");
const overview = $Selector(".overview");
const related = $Selector(".related");

async function listaMovies(){
    const {data} = await api(`${listaMoviesCategories}`)
    // console.log("data Categories", data);
    const generos = data.genres
    console.log(generos);
    let view = `<a href="#">${generos[0].name}</a> <a href="#">${generos[1].name}</a> <a href="#">${generos[2].name}</a>`;
    console.log(view);
    subGeneros.innerHTML = view;
};
listaMovies();
async function getPopularMovies(){
    const {data} = await api(`${popularMovies}`);
    // console.log("popular" ,data);
    const pelisDestacadas = data.results;
    console.log("pelisDestacadas", pelisDestacadas);
    let view = `<a href="#">${pelisDestacadas[10].title}</a>`;
    TitleMovies.innerHTML = view;
    extras.innerHTML = `<span class="date">${pelisDestacadas[10].release_date}</span>
                        <span class="Adult?">Adult: ${pelisDestacadas[10].adult}</span>
                        <span class ="votes">🌟${pelisDestacadas[10].vote_average}</span>`;
    bienvenida.innerHTML = `Estas por <strong>ver ${pelisDestacadas[10].title} Película Online ✅</strong>`;
    if(pelisDestacadas[10].original_lenguage !== "en"){
        Lang.innerHTML = `<strong>Ingles</strong>`
    }else{
        Lang.innerHTML = `<strong>Castellano</strong>`
    }
    related.innerHTML = `RePelis24 » Estás viendo ${pelisDestacadas[10].title} [Película Completa, Gratis], Película disponible en Audio Español, Latino o Subtitulada, también contamos con películas estrenadas del cine. película para ver online y descargar del Año 2023. ${pelisDestacadas[10].title} en Calidad (HD) Completa.`;
    overview.innerHTML = `${pelisDestacadas[10].overview}`;
}
getPopularMovies();