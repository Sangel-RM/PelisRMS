const openInputHeader = document.querySelector(".open-search");
const closedInputHeader = document.querySelector(".closed-search");
openInputHeader.addEventListener("click", () => {
    console.log("1");
    // cerrando la lupa y abriendo la X
    if(openInputHeader){
        openInputHeader.classList.add("none");
        closedInputHeader.classList.remove("none");
    }
    // Abriendo el input
    const formInputSearchPelis = document.querySelector(".form")
    if(formInputSearchPelis){  
       formInputSearchPelis.classList.remove("none");
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
       document.querySelector(".form").classList.add("none");
    }
});