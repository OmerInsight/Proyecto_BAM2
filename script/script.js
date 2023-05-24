document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function () {
        document.querySelector(".nav-links").
            classList.toggle("nav-links-responsive")
    })

let ocutar_texto_btn=document.getElementById("ocutar-texto-btn");
let ocutar_texto = document.getElementById("ocutar-texto");

ocutar_texto_btn.addEventListener("click",toggleText);

function toggleText(){
    ocutar_texto.classList.toggle("show")

    if(ocutar_texto.classList.contains("show")){
        ocutar_texto_btn.innerHTML= "Ocultar"
    }
    else {
        ocutar_texto_btn.inner="Ocultar"
    }
}