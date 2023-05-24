// CONFIGURACION DE BOTON RESPONSIVE:

document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function () {
        document.querySelector(".nav-links").
            classList.toggle("nav-links-responsive")
    })


// CONFIGURACIO DE BOTON CULTAR O MOSTRAR LECTURA
let ocultar_texto_btn=document.getElementById("ocultar-texto-btn");
let ocultar_texto = document.getElementById("ocultar-texto");

ocultar_texto_btn.addEventListener("click",toggleText);

function toggleText(){
    ocultar_texto.classList.toggle("show")

    if(ocultar_texto.classList.contains("show")){
        ocultar_texto_btn.innerHTML= "Ocultar"
    }
    else {
        ocultar_texto_btn.innerHTML="Seguir leyendo"
    }
}