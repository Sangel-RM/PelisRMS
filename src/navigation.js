window.addEventListener("DOMContentLoaded", navigator, false);
window.addEventListener("hashchange", navigator, false);
function navigator() {
    console.log({location});
    if(location.hash.startsWith("#trends")){
        TrendsePage()
    }else if (location.hash.startsWith("#search=")) {
        SearchPage()
    }else if (location.hash.startsWith("#movie=")) {
        MoviesPage()
    }else if (location.hash.startsWith("#category=")) {
        Categories()
    }else{
        HomePage();
    }
}
function HomePage() {
    console.log("home!!");
}
function CategoriesPage() {
    console.log("categories!!");
}
function MoviesPage() {
    console.log("Movie!!");
}
function SearchPage() {
    console.log("Search!!");
}
function TrendsePage() {
    console.log("trendens!!");
}
