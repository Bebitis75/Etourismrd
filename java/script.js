/*jshint esversion: 6 */
const star= document.querySelectorAll(".stars");
const stars = document.querySelectorAll(" .stars a");

stars.forEach((star, idx) => {
  star.addEventListener("click",() =>{
    star.classList.add("disabled");

    stars.forEach((otrastar , otroidx) =>{
      if(otroidx <= idx){
        otrastar.classList.add("active");
      }
    });
    console.log(`La estrella ${idx + 1} fue tocada`);
  });
});

//Buscador de contenido
//Ejecutando funciones
document.getElementById("icon-search").addEventListener("click", mostrar_buscador);
document.getElementById("icon-search-copy").addEventListener("click", ocultar_buscador);


//Declarando variables
let bars_search =       document.getElementById("ctn-bars-search");
let inputSearch =       document.getElementById("inputSearch");
let box_search =        document.getElementById("box-search");
let icon_search =       document.getElementById("ctn-icon-search");
let icon_search_copy =       document.getElementById("ctn-icon-search-copy");



//Funcion para mostrar el buscador
function mostrar_buscador(){

    bars_search.style.visibility = "visible";
    inputSearch.focus();
    icon_search.style.display = "none";
    icon_search_copy.style.display = "";

    if (inputSearch.value === ""){
        box_search.style.display = "block";
    }

}

//Funcion para ocultar el buscador
function ocultar_buscador(){

    bars_search.style.visibility = "hidden";
    inputSearch.value = "";
    box_search.style.display = "none";
    icon_search_copy.style.display = "none";
    icon_search.style.display = "";

}


//Creando filtrado de busqueda

document.getElementById("inputSearch").addEventListener("keyup", buscador_interno);

function buscador_interno(){


    filter = inputSearch.value.toUpperCase();
    li = box_search.getElementsByTagName("li");

    //Recorriendo elementos a filtrar mediante los "li"
    for (i = 0; i < li.length; i++){

        a = li[i].getElementsByTagName("a")[0];
        textValue = a.textContent || a.innerText;

        if(textValue.toUpperCase().indexOf(filter) > -1){

            li[i].style.display = "";
            box_search.style.display = "block";

            if (inputSearch.value === ""){
                box_search.style.display = "block";
            }

        }else{
            li[i].style.display = "none";
        }

    }



}
