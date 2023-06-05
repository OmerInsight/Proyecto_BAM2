// CONFIGURACION DE BOTON RESPONSIVE:
document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function () {
        document.querySelector(".nav-links").
            classList.toggle("nav-links-responsive");
    });


if (window.location.pathname.endsWith("index.html")) {


    // CONFIGURACION DE BOTON OCULTAR O MOSTRAR LECTURA
    let ocultar_texto_btn = document.getElementById("ocultar-texto-btn");
    let ocultar_texto = document.getElementById("ocultar-texto");
    ocultar_texto_btn.addEventListener("click", toggleText);

    function toggleText() {
        ocultar_texto.classList.toggle("show");

        if (ocultar_texto.classList.contains("show")) {
            ocultar_texto_btn.innerHTML = "Ocultar";
        } else {
            ocultar_texto_btn.innerHTML = "Seguir leyendo";
        }
    }
}


// CONFIGURACIONES DE PAGINA DE SERVICIOS 

$(document).ready(function () {
    if (window.location.pathname.includes("servicios.html")) {
        $(".boton-servicios").click(function () {
            var ingresos = parseInt($("#ingresos-servicio").val()) || 0;
            var gastosFijos = parseInt($("#gastos-fijos-servicio").val()) || 0;
            var gastosVariables = parseInt($("#gastos-variables-servicio").val()) || 0;
            var nombre = $("#nombre-servicio").val();

            if (ingresos > 200000 && ingresos > gastosFijos + gastosVariables) {
                // Caso 1: Ingresos competentes
                $("#texto-mensaje").text("Felicidades " + nombre + ", usted goza de unos ingresos competentes y además los administra muy bien. Es momento de comenzar a ahorrar e invertir.");
                $("#imagen-mensaje").attr("src", "../img/servicios-caso-1.jpg");
            } else if (ingresos < 200000 && ingresos > gastosFijos + gastosVariables) {
                // Caso 2: Administración adecuada
                $("#texto-mensaje").text("Continúa así " + nombre + ", estás administrando muy bien tus recursos. Es momento de comenzar a ahorrar.");
                $("#imagen-mensaje").attr("src", "../img/servicios-caso-2.jpg");
            } else if (ingresos > 200000 && ingresos < gastosFijos + gastosVariables) {
                // Caso 3: Revisar salidas de dinero
                $("#texto-mensaje").text(nombre + ", es momento de sentarse y revisar las salidas de dinero, encontrar y cambiar ciertos hábitos.");
                $("#imagen-mensaje").attr("src", "../img/servicios-caso-3.jpg");
            } else {
                // Caso 4: Finanzas en condición delicada
                $("#texto-mensaje").text(nombre + ", tus finanzas están en una condición muy delicada y precisan de un alto compromiso de tu parte para estabilizarlas.");
                $("#imagen-mensaje").attr("src", "../img/servicios-caso-4.jpg");
            }

            $(".formulario-servicio").hide();
            $("#mensaje").show();
        });
    }
});



